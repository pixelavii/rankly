export default function BidderRank({ rank, emphasized = false }) {
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
        emphasized
          ? "bg-gold-400 text-white"
          : "bg-ink-100 text-ink-700"
      }`}
      aria-label={`Rank ${rank}`}
    >
      {rank}
    </div>
  );
}
