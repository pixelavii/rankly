import Link from "next/link";
import CategoryGrid from "../categories/CategoryGrid";

export default function PopularCategories({ categories }) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-ink-900">Popular Categories</h2>
          <p className="text-sm text-ink-500 mt-1">
            Choose a category and see where your profile could rank.
          </p>
        </div>
        <Link
          href="/categories"
          className="text-sm font-semibold text-rise-600 hover:text-rise-700 hidden sm:block"
        >
          View all
        </Link>
      </div>
      <CategoryGrid categories={categories} />
    </section>
  );
}
