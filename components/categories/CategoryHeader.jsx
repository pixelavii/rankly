import Link from "next/link";
import CategoryIcon from "./CategoryIcon";

export default function CategoryHeader({ category }) {
  return (
    <div>
      <Link
        href="/categories"
        className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900 transition mb-5"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 12H5M11 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        All categories
      </Link>

      <div className="flex items-center gap-3">
        <CategoryIcon initials={category.initials} size="lg" />
        <div>
          <h1 className="font-display text-2xl font-extrabold text-ink-900">{category.name}</h1>
          <p className="text-sm text-ink-500 mt-0.5">
            Submit your profile and compete for a higher position.
          </p>
        </div>
      </div>
    </div>
  );
}
