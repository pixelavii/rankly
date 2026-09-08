import Link from "next/link";
import CategoryIcon from "./CategoryIcon";

export default function CategoryCard({ category }) {
  console.log("This is the key:", category);
  return (
    <div className="group border border-ink-100 rounded-xl2 p-5 hover:border-rise-400 hover:shadow-card transition">
      <div className="flex items-start justify-between mb-4">
        <CategoryIcon initials={`/logo/${category.name.toLowerCase()}.svg`} />
        <span className="text-xs text-ink-500 mt-1">
          {category.bidders} bidders
        </span>
      </div>

      <h3 className="text-base font-semibold text-ink-900">{category.name}</h3>
      <p className="mt-1 text-sm text-ink-500 leading-relaxed">
        {category.name} profile submissions
      </p>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-ink-100">
        <div>
          <p className="text-xs text-ink-500">Highest bid</p>
          <p className="text-base font-semibold text-ink-900">
            ₹{category.highestBid}
          </p>
        </div>
        <Link
          href={`/category/${category.name}`}
          className="text-sm font-semibold text-rise-600 group-hover:text-rise-700 flex items-center gap-1"
        >
          View Bids
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
