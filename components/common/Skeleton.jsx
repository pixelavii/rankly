export function SkeletonBlock({ className = "" }) {
  return <div className={`animate-pulse bg-ink-100 rounded-md ${className}`} />;
}

export function CategoryCardSkeleton() {
  return (
    <div className="border border-ink-100 rounded-xl2 p-5">
      <SkeletonBlock className="w-10 h-10 rounded-lg mb-4" />
      <SkeletonBlock className="w-2/3 h-4 mb-2" />
      <SkeletonBlock className="w-full h-3 mb-1" />
      <SkeletonBlock className="w-4/5 h-3 mb-4" />
      <SkeletonBlock className="w-full h-9 rounded-lg" />
    </div>
  );
}

export function BidCardSkeleton() {
  return (
    <div className="flex items-center gap-4 border border-ink-100 rounded-xl2 p-4">
      <SkeletonBlock className="w-8 h-8 rounded-full" />
      <SkeletonBlock className="w-10 h-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <SkeletonBlock className="w-1/3 h-3.5" />
        <SkeletonBlock className="w-1/4 h-3" />
      </div>
      <SkeletonBlock className="w-16 h-6 rounded-md" />
    </div>
  );
}

export function HighestBidSkeleton() {
  return (
    <div className="border border-ink-100 rounded-xl2 p-6">
      <SkeletonBlock className="w-40 h-3 mb-3" />
      <SkeletonBlock className="w-32 h-9 mb-3" />
      <SkeletonBlock className="w-56 h-3" />
    </div>
  );
}

export function DashboardRowSkeleton() {
  return (
    <div className="grid grid-cols-5 gap-4 items-center border border-ink-100 rounded-xl2 p-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <SkeletonBlock key={i} className="h-4" />
      ))}
    </div>
  );
}
