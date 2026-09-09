import Link from "next/link";
import Button from "../common/Button";

export default function Hero({ categories }) {
  return (
    <section className="border-b border-ink-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 tracking-tight leading-[1.1]">
            Get Your Profile Seen First
          </h1>
          <p className="mt-5 text-lg text-ink-500 max-w-md leading-relaxed">
            Submit your profile, choose your category, and place a higher bid to
            move your submission to the top.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/categories">
              <Button variant="primary" size="lg">
                Start Bidding
              </Button>
            </Link>
            <Link href="/categories">
              <Button variant="secondary" size="lg">
                Explore Categories
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-xl2 border border-ink-100 shadow-raised p-5 bg-white">
          <p className="text-xs font-medium text-ink-500 mb-3">
            Instagram &middot; ranked by bid
          </p>
          <div className="space-y-2">
            {[
              {
                rank: 1,
                user: "Instagram",
                bid: categories.Instagram.highestBid,
              },
              {
                rank: 2,
                user: "Facebook",
                bid: categories.Facebook.highestBid,
              },
              {
                rank: 3,
                user: "LinkedIn",
                bid: categories.LinkedIn.highestBid,
              },
              {
                rank: 4,
                user: "X",
                bid: categories.X.highestBid,
              },
              {
                rank: 5,
                user: "Reddit",
                bid: categories.Reddit.highestBid,
              },
              {
                rank: 6,
                user: "YouTube",
                bid: categories.YouTube.highestBid,
              },
            ].map((row) => (
              <Link
                href={`/category/${row.user}`}
                key={row.rank}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${
                  row.top ? "bg-gold-50/60" : "bg-ink-100/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-ink-900">
                    {row.user}
                  </span>
                </div>
                <span className="text-sm font-semibold text-ink-900">
                  ₹{row.bid}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
