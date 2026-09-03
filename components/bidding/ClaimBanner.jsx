export default function ClaimBanner({ amount, rank, onClick }) {
  return (
    <div className="flex justify-center py-1">
      <button
        onClick={onClick}
        className="text-xs sm:text-sm font-semibold text-white bg-ink-900 hover:bg-coral-600 rounded-full px-4 py-2 transition"
      >
        claim rank #{rank} for ₹{amount}
      </button>
    </div>
  );
}
