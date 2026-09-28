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
    <footer className="border-t border-ink-100 mt-10">
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
              <span className="font-semibold text-ink-900">TopBidder</span>
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
          <span className="text-center text-sm md:pl-0 pl-5 pr-5 pb-3">
            Built by{" "}
            <Link
              className="font-semibold text-coral-600"
              target="_blank"
              href={"https://www.linkedin.com/in/avinash-chaurasia-398269248"}
            >
              @avinash-chaurasia
            </Link>{" "}
            &middot; Brought to you by{" "}
            <Link
              className="font-semibold text-coral-600"
              target="_blank"
              href={"https://www.xsnapster.store/"}
            >
              xsnapster.store
            </Link>
          </span>
          <p className="text-center text-xs">&copy; {new Date().getFullYear()} TopBidder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
