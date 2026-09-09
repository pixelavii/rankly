import Link from "next/link";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Categories", href: "/categories" },
      { label: "Rules", href: "/rules" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-rise-600 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 20V10M12 20V4M20 20v-7"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="font-semibold text-ink-900">Rankly</span>
            </div>
            <p className="text-sm text-ink-500 max-w-xs">
              A ranked listing platform where your bid amount determines your
              position within a category.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink-900 mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-500 hover:text-ink-900 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-sm text-ink-500">
          <p>&copy; {new Date().getFullYear()} Rankly. All rights reserved.</p>
          <p>
            Rankings reflect bid amount only. There are no winners or losers.
          </p>
        </div>
      </div>
    </footer>
  );
}
