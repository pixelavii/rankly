import { createPayment } from './models/CreatePaymentInsert'

export default async function CreatePaymentInDB (req, res) {
  if (req.method === 'POST') {
    try {
      const { success, orderId, amount, currency, idempotency_key } = req.body

      if (!success) {
        return res
          .status(400)
          .json({ success: false, error: 'Payment Failed, Try Again' })
      }

      const payload = {
        created_at: new Date().toISOString(),
        success: success,
        orderId: orderId,
        amount: amount,
        currency: currency,
        idempotency_key: idempotency_key
      }

      const updated = await createPayment(payload)
      res.json({ success: true, data: updated })
    } catch (error) {
      console.error('Update expense error:', error)
      res
        .status(500)
        .json({ success: false, error: 'Failed to enter User Datails' })
    }
  }
}
