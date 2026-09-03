export default function Button({
  children,
  variant = "primary",
  size = "md",
  as: As = "button",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-rise-600 text-white hover:bg-rise-700",
    secondary:
      "bg-white text-ink-900 border border-ink-300 hover:border-ink-500 hover:bg-ink-100",
    ghost: "text-ink-700 hover:bg-ink-100",
    subtle: "bg-rise-50 text-rise-600 hover:bg-rise-100",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-5 py-3",
  };

  return (
    <As
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}
