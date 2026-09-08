import Link from "next/link";
import { useRouter } from "next/router";
import { mockCategories } from "../../data/mockData";

const navLinks = [
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Rules", href: "/rules" },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="top-0 z-40 bg-cream/15 backdrop-blur">
      <div className="max-w-5xl mx-auto px-5 py-2 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-ink-900 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 20V10M12 20V4M20 20v-7"
                  stroke="#EA6A3D"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="font-display font-extrabold text-ink-900 tracking-tight">
              Rankly
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 ml-3 pl-3 border-l border-ink-100 text-xs text-ink-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              62 online &middot; 471 submissions
            </span>
          </Link>

          <nav className="flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition ${
                  router.pathname === link.href
                    ? "text-coral-600 bg-coral-50"
                    : "text-ink-700 hover:text-ink-900 hover:bg-ink-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Category pill bar */}
        <div className="flex items-center gap-1.5 mt-1 pt-1.5 pb-1.5 pl-2 pr-2 bg-cream/95 rounded-full overflow-x-auto no-scrollbar">
          {mockCategories.slice(0, 7).map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.name}`}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                router.query.slug === cat.name
                  ? "bg-ink-900 text-white border-ink-900"
                  : "border-ink-100 text-ink-700 hover:border-ink-300 bg-white/60"
              }`}
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/categories"
            className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-coral-600 hover:text-coral-700"
          >
            All categories &rarr;
          </Link>
        </div>

        <div className="flex items-center justify-center mt-3">
          <span className="lg:hidden inline-flex items-center gap-1.5 text-xs text-ink-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            62 online &middot; 471 submissions
          </span>
        </div>
      </div>
    </header>
  );
}
