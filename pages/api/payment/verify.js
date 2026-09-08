import crypto from 'crypto'
import { supabase } from '../utils/db'

const UNIQUE_VIOLATION = '23505'

export default async function Verify (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const {
      razorpay_payment_id: paymentId,
      razorpay_order_id: orderId,
      razorpay_signature: signature,
      idempotencyKey,
      account // { username, short_link, category, category_id, link }
    } = req.body

    if (!paymentId || !orderId || !signature || !idempotencyKey || !account) {
      return res.status(400).json({ success: false, message: 'Missing required fields' })
    }

    // 1. Already fully processed for this key? Respond idempotently.
    const existingPaid = await findPaidPayment(idempotencyKey)
    if (existingPaid) {
      return res.json({
        success: true,
        message: 'Payment already verified',
        userId: existingPaid.user_id
      })
    }

    // 2. Cross-check against the order WE created — never trust
    //    amount/order id purely from the client.
    const orderRecord = await findOrderRecord(idempotencyKey)
    if (!orderRecord || orderRecord.orderId !== orderId) {
      return res.status(400).json({ success: false, message: 'Order mismatch' })
    }

    // 3. Verify the signature.
    if (!isValidSignature({ orderId, paymentId, signature })) {
      await logFailedPayment({ orderRecord, orderId, paymentId, idempotencyKey })
      return res.status(400).json({ success: false, message: 'Payment verification failed' })
    }

    // 4. Atomically claim the idempotency key by inserting the 'paid' row
    //    first. The partial unique index (idempotency_key WHERE status =
    //    'paid') means only one concurrent request can win this insert.
    const claim = await claimPayment({ orderRecord, orderId, paymentId, idempotencyKey })
    if (claim.alreadyClaimed) {
      return res.json({
        success: true,
        message: 'Payment already verified',
        userId: claim.userId
      })
    }

    // 5. We won the claim — only now do we create the Users row.
    const newUser = await createUser({ account, orderRecord, idempotencyKey })

    // 6. Link the Payment row to the new user.
    await linkPaymentToUser(claim.payment.id, newUser.id)

    return res.json({
      success: true,
      message: 'Payment verified and user saved',
      userId: newUser.id
    })
  } catch (error) {
    console.error('verify error:', error)
    return res.status(500).json({ success: false, message: 'Payment verification failed' })
  }
}

async function findPaidPayment (idempotencyKey) {
  const { data, error } = await supabase
    .from('Payment')
    .select('*')
    .eq('idempotency_key', idempotencyKey)
    .eq('status', 'paid')
    .maybeSingle()

  if (error) throw error
  return data
}

async function findOrderRecord (idempotencyKey) {
  const { data, error } = await supabase
    .from('Create_payment')
    .select('*')
    .eq('idempotency_key', idempotencyKey)
    .eq('success', true)
    .maybeSingle()

  if (error) throw error
  return data
}

function isValidSignature ({ orderId, paymentId, signature }) {
  const generated = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest('hex')

  return generated === signature
}

async function logFailedPayment ({ orderRecord, orderId, paymentId, idempotencyKey }) {
  // status !== 'paid', so this never conflicts with the partial unique
  // index, and no Users row is ever touched from this path.
  const { error } = await supabase.from('Payment').insert({
    payment_amount: orderRecord.amount,
    status: 'failed',
    razorpayPaymentId: paymentId,
    razorpayOrderId: orderId,
    idempotency_key: idempotencyKey
  })

  if (error) console.error('Failed to log failed payment attempt:', error)
}

async function claimPayment ({ orderRecord, orderId, paymentId, idempotencyKey }) {
  const { data, error } = await supabase
    .from('Payment')
    .insert({
      payment_amount: orderRecord.amount,
      status: 'paid',
      razorpayPaymentId: paymentId,
      razorpayOrderId: orderId,
      idempotency_key: idempotencyKey
    })
    .select()
    .single()

  if (error) {
    if (error.code === UNIQUE_VIOLATION) {
      const winner = await findPaidPayment(idempotencyKey)
      return { alreadyClaimed: true, userId: winner?.user_id ?? null }
    }
    throw error
  }

  return { alreadyClaimed: false, payment: data }
}

async function createUser ({ account, orderRecord, idempotencyKey }) {
  const { data, error } = await supabase
    .from('Users')
    .insert({
      username: account.username,
      short_link: account.short_link,
      category: account.category,
      category_id: account.category_id,
      link: account.link,
      amount: orderRecord.amount,
      idempotency_key: idempotencyKey
    })
    .select()
    .single()

  if (error) {
    // Payment is already marked 'paid' at this point — this needs
    // attention rather than silent failure.
    console.error('CRITICAL: payment claimed but Users insert failed', error)
    throw error
  }

  return data
}

async function linkPaymentToUser (paymentRowId, userId) {
  const { error } = await supabase
    .from('Payment')
    .update({ user_id: userId })
    .eq('id', paymentRowId)

  if (error) throw error
}