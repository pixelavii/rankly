const tones = {
  neutral: "bg-ink-100 text-ink-700",
  rise: "bg-rise-50 text-rise-600",
  gold: "bg-gold-50 text-gold-600",
  active: "bg-emerald-50 text-emerald-700",
};

export default function Badge({ children, tone = "neutral", className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
