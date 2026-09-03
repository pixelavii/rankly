export default function BidInput({ value, onChange, minBid, id = "bid-amount" }) {
  const numericValue = Number(value);
  const isTooLow = value !== "" && numericValue <= minBid;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink-700 mb-1.5">
        Your Bid
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500 text-sm">
          ₹
        </span>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={minBid + 1}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`${minBid + 5}`}
          aria-describedby={`${id}-helper`}
          className={`w-full rounded-lg border pl-7 pr-3 py-2.5 text-sm text-ink-900 focus:ring-2 focus:ring-rise-400 focus:border-rise-400 outline-none transition ${
            isTooLow ? "border-red-400" : "border-ink-300"
          }`}
        />
      </div>
      <p
        id={`${id}-helper`}
        className={`mt-1.5 text-sm ${isTooLow ? "text-red-600" : "text-ink-500"}`}
      >
        {isTooLow
          ? `Enter an amount higher than ₹${minBid}.`
          : `Current highest bid: ₹${minBid}. Enter an amount higher than ₹${minBid}.`}
      </p>
    </div>
  );
}
