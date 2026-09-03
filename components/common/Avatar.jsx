const palette = [
  "bg-rise-100 text-rise-700",
  "bg-gold-50 text-gold-600",
  "bg-emerald-50 text-emerald-700",
  "bg-sky-50 text-sky-700",
  "bg-purple-50 text-purple-700",
];

function hashToIndex(str, mod) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash + str.charCodeAt(i)) % mod;
  }
  return hash;
}

export default function Avatar({ username = "", size = "md" }) {
  const initial = username.replace("@", "").charAt(0).toUpperCase() || "?";
  const colorClass = palette[hashToIndex(username, palette.length)];

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full font-semibold shrink-0 ${colorClass} ${sizes[size]}`}
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}
