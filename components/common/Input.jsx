export default function Input({
  label,
  id,
  helperText,
  prefix,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-ink-700 mb-1.5"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500 text-sm">
            {prefix}
          </span>
        )}
        <input
          id={id}
          className={`w-full rounded-lg border text-sm py-2.5 ${
            prefix ? "pl-8" : "pl-3"
          } pr-3 text-ink-900 placeholder:text-ink-500/70 focus:ring-2 focus:ring-rise-400 focus:border-rise-400 outline-none transition ${
            error ? "border-red-400" : "border-ink-300"
          } ${className}`}
          {...props}
        />
      </div>
      {error ? (
        <p className="mt-1.5 text-sm text-red-600">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 text-sm text-ink-500">{helperText}</p>
      ) : null}
    </div>
  );
}
