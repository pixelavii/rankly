import { useState } from "react";

export default function CurrentHighestBid({ amount, onPlaceBid }) {
  const [preview, setPreview] = useState(amount + 5);

  function step(delta) {
    setPreview((p) => Math.max(amount + 1, p + delta));
  }

  return (
    <div className="text-center py-6">
      <p className="text-sm text-ink-500">
        Rank #1 is currently held at{" "}
        <span className="font-semibold text-ink-900">₹{amount}</span>
      </p>

      <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-tight">
          Claim #1 for
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => step(-5)}
            aria-label="Decrease preview bid"
            className="w-8 h-8 rounded-full bg-coral-50 text-coral-600 flex items-center justify-center text-lg font-bold hover:bg-coral-100 transition"
          >
            &minus;
          </button>
          <span className="font-display text-3xl sm:text-5xl font-extrabold text-coral-600 tracking-tight">
            ₹{preview}
          </span>
          <button
            onClick={() => step(5)}
            aria-label="Increase preview bid"
            className="w-8 h-8 rounded-full bg-coral-50 text-coral-600 flex items-center justify-center text-lg font-bold hover:bg-coral-100 transition"
          >
            +
          </button>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onPlaceBid();
        }}
        className="mt-7 max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch gap-2.5"
      >
        <div className="flex-1 flex items-center gap-2.5 bg-white border border-ink-100 rounded-full pl-4 pr-2 py-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-ink-500">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <input
            type="text"
            placeholder="Your username or profile URL"
            className="flex-1 bg-transparent rounded-full font-semibold pl-2 text-sm text-ink-900 placeholder:text-ink-500/70 outline-none py-1.5"
          />
        </div>
        <button
          type="submit"
          className="shrink-0 bg-coral-600 hover:bg-coral-700 text-white font-semibold text-sm rounded-full px-6 py-3 transition"
        >
          Place Your Bid
        </button>
      </form>

      <p className="mt-3 text-xs text-ink-500">
        Place a bid higher than ₹{amount} to move your submission to the top.
      </p>
    </div>
  );
}
