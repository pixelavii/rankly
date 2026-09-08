const RAZORPAY_SCRIPT_SRC = 'https://checkout.razorpay.com/v1/checkout.js'

let loadPromise = null

/**
 * Loads the Razorpay checkout script if it isn't already present.
 * Safe to call multiple times — the script is only injected once.
 * Resolves `true` on success, `false` if the script failed to load.
 */
export function loadRazorpayScript () {
  if (typeof window !== 'undefined' && window.Razorpay) {
    return Promise.resolve(true)
  }

  if (loadPromise) return loadPromise

  loadPromise = new Promise(resolve => {
    const script = document.createElement('script')
    script.src = RAZORPAY_SCRIPT_SRC
    script.onload = () => resolve(true)
    script.onerror = () => {
      loadPromise = null // allow a retry on a later call
      resolve(false)
    }
    document.body.appendChild(script)
  })

  return loadPromise
}
