import Link from "next/link";
import Layout from "../components/layout/Layout";
import Badge from "../components/common/Badge";
import EmptyState from "../components/common/EmptyState";
import { mockMyBids } from "../data/mockData";

export default function MyBidsPage() {
  const hasBids = mockMyBids.length > 0;

  return (
    <Layout title="My Bids — Rankly">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="font-display text-2xl font-extrabold text-ink-900">My Bids</h1>
          <p className="text-sm text-ink-500 mt-2">
            Track your submissions and current rank across categories.
          </p>
        </div>

        {!hasBids ? (
          <EmptyState
            title="You haven't placed a bid yet"
            description="Choose a category and submit your first profile."
            actionLabel="Explore Categories"
          />
        ) : (
          <div className="space-y-3">
            {mockMyBids.map((bid) => (
              <div
                key={bid.id}
                className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center border border-ink-100 rounded-xl2 p-4 sm:p-5"
              >
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-xs text-ink-500">Category</p>
                  <p className="text-sm font-semibold text-ink-900">
                    {bid.category}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-ink-500">Profile</p>
                  <p className="text-sm font-medium text-ink-900">
                    {bid.username}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-ink-500">Current Bid</p>
                  <p className="text-sm font-semibold text-ink-900">
                    ₹{bid.currentBid}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-ink-500">Current Rank</p>
                  <p className="text-sm font-semibold text-ink-900">
                    #{bid.currentRank}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-ink-500">Highest Bid</p>
                  <p className="text-sm font-semibold text-ink-900">
                    ₹{bid.highestBid}
                  </p>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 col-span-2 sm:col-span-1">
                  <Badge tone="active">{bid.status}</Badge>
                  <Link
                    href={`/category/${bid.categorySlug}`}
                    className="text-sm font-semibold text-rise-600 hover:text-rise-700 whitespace-nowrap"
                  >
                    Increase Bid
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
