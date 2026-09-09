import { mockCategories } from "../../data/mockData";

export default function StatsSection({ stats }) {
  return (
    <section className="bg-ink-100/50 border-y border-ink-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-ink-900">
            {stats.highestBid}
          </p>
          <p className="text-sm text-ink-500 mt-1">Highest Bid</p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-bold text-ink-900">
            {stats.totalUsers}
          </p>
          <p className="text-sm text-ink-500 mt-1">Profiles submitted</p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-bold text-ink-900">
            {mockCategories.length}
          </p>
          <p className="text-sm text-ink-500 mt-1">Active categories</p>
        </div>
      </div>
    </section>
  );
}
