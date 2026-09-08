import Razorpay from 'razorpay'
import { supabase } from '../utils/db'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

const UNIQUE_VIOLATION = '23505'

export default async function CreateOrder (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { amount, idempotencyKey } = req.body

    if (!amount || !idempotencyKey) {
      return res.status(400).json({
        success: false,
        message: 'amount and idempotencyKey are required'
      })
    }

    // 1. Already paid for this key? Reject outright.
    const alreadyPaid = await findPaidPayment(idempotencyKey)
    if (alreadyPaid) {
      return res.status(409).json({
        success: false,
        message: 'This submission has already been paid for'
      })
    }

    // 2. Order already created for this key? Reuse it.
    const existingOrder = await findExistingOrder(idempotencyKey)
    if (existingOrder) {
      return res.json(toOrderResponse(existingOrder, idempotencyKey))
    }

    // 3. Create a fresh Razorpay order and log it.
    const order = await createRazorpayOrder(amount, idempotencyKey)
    const savedOrder = await saveOrder(order, idempotencyKey)

    return res.json(toOrderResponse(savedOrder, idempotencyKey))
  } catch (error) {
    console.error('create-order error:', error)
    await logFailedAttempt(req.body)
    return res.status(500).json({ success: false, message: 'Unable to create payment order' })
  }
}

async function findPaidPayment (idempotencyKey) {
  const { data, error } = await supabase
    .from('Payment')
    .select('id, status')
    .eq('idempotency_key', idempotencyKey)
    .eq('status', 'paid')
    .maybeSingle()

  if (error) throw error
  return data
}

async function findExistingOrder (idempotencyKey) {
  const { data, error } = await supabase
    .from('Create_payment')
    .select('*')
    .eq('idempotency_key', idempotencyKey)
    .eq('success', true)
    .maybeSingle()

  if (error) throw error
  return data
}

async function createRazorpayOrder (amount, idempotencyKey) {
  return razorpay.orders.create({
    amount: Math.round(amount * 100),
    currency: 'INR',
    receipt: `rcpt_${idempotencyKey}`.slice(0, 40),
    notes: { idempotency_key: idempotencyKey }
  })
}

async function saveOrder (order, idempotencyKey) {
  const { data, error } = await supabase
    .from('Create_payment')
    .insert({
      success: true,
      orderId: order.id,
      amount: order.amount / 100,
      currency: order.currency,
      idempotency_key: idempotencyKey
    })
    .select()
    .single()

  if (error) {
    if (error.code === UNIQUE_VIOLATION) {
      // Another concurrent request won the race — use their row instead.
      const winner = await findExistingOrder(idempotencyKey)
      if (winner) return winner
    }
    throw error
  }

  return data
}

async function logFailedAttempt (body) {
  try {
    await supabase.from('Create_payment').insert({
      success: false,
      amount: body?.amount ?? null,
      currency: 'INR',
      idempotency_key: body?.idempotencyKey ?? null
    })
  } catch (err) {
    console.error('Failed to log failed order-creation attempt:', err)
  }
}

function toOrderResponse (orderRow, idempotencyKey) {
  return {
    success: true,
    orderId: orderRow.orderId,
    amount: orderRow.amount * 100,
    currency: orderRow.currency,
    key: process.env.RAZORPAY_KEY_ID,
    idempotencyKey
  }
}