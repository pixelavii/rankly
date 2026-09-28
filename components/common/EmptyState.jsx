export default function EmptyState({
  title = "No bids yet",
  description = "Be the first person to submit a bid in this category.",
}) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6 border border-dashed border-ink-300 rounded-xl2">
      <h3 className="text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm text-ink-500 max-w-xs">{description}</p>
    </div>
  );
}
