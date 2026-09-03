export default function LoadingState({ label = "Loading" }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center justify-center gap-2.5 py-12 text-ink-500 text-sm"
    >
      <svg
        className="animate-spin"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#CBD5E1"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M21 12a9 9 0 0 0-9-9"
          stroke="#4338CA"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {label}
    </div>
  );
}
