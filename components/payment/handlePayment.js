import { loadRazorpayScript } from './loadRazorpay'
/**
 * Kicks off the Razorpay checkout flow for a given account.
 * `account` must include `amount` and `idempotencyKey`.
 */
export default async function handlePayment (account) {
  if (!account) {
    alert('Invalid account link')
    return
  }

  const scriptLoaded = await loadRazorpayScript()
  if (!scriptLoaded) {
    alert(
      'Could not load the payment gateway. Please check your connection and try again.'
    )
    return
  }

  const order = await createOrder(account)
  if (!order.success) {
    alert(order.message || 'Unable to start payment')
    return
  }

  openCheckout({ order, account })
}

async function createOrder (account) {
  const response = await fetch('/api/payment/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: account.amount,
      idempotencyKey: account.idempotencyKey
    })
  })

  return response.json()
}

async function verifyPayment ({ paymentResponse, account }) {
  const response = await fetch('/api/payment/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...paymentResponse,
      idempotencyKey: account.idempotencyKey,
      account
    })
  })

  return response.json()
}

function openCheckout ({ order, account }) {
  const options = {
    key: order.key,
    amount: order.amount,
    currency: order.currency,
    order_id: order.orderId,

    name: 'Rankly',
    description: 'Account Submission',

    handler: async paymentResponse => {
      const result = await verifyPayment({ paymentResponse, account })

      if (result.success) {
        console.log('User saved successfully')
      } else {
        alert(result.message || 'Payment verification failed')
      }
    },

    modal: {
      ondismiss: () => {
        // The order stays 'pending' server-side, so a retry reuses it
        // instead of creating a duplicate.
        console.log('Checkout closed before completing payment.')
      }
    }
  }

  const razorpay = new window.Razorpay(options)

  razorpay.on('payment.failed', response => {
    console.error('Payment failed:', response.error)
    alert('Payment failed. Please try again.')
  })

  razorpay.open()
}
