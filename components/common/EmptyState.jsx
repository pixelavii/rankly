export default function EmptyState({
  title = "No bids yet",
  description = "Be the first person to submit a bid in this category.",
  actionLabel = "Place First Bid",
  onAction,
}) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6 border border-dashed border-ink-300 rounded-xl2">
      <div className="w-12 h-12 rounded-full bg-ink-100 flex items-center justify-center mb-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12h14"
            stroke="#64748B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h3 className="text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm text-ink-500 max-w-xs">{description}</p>
      {onAction && (
        <button
          onClick={onAction}
          className="mt-5 text-sm font-semibold text-white bg-rise-600 hover:bg-rise-700 rounded-lg px-4 py-2.5 transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
