import CategoryCard from "./CategoryCard";
import { CategoryCardSkeleton } from "../common/Skeleton";

export default function CategoryGrid({ categories, loading = false }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(categories).map(([categoryName, stats]) => (
        <CategoryCard
          key={categoryName}
          category={{
            name: categoryName,
            highestBid: stats.highestBid,
            bidders: stats.bidderCount,
          }}
        />
      ))}
    </div>
  );
}
