import Link from "next/link";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="border-b border-ink-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 tracking-tight leading-[1.1]">
            Get Your Profile Seen First
          </h1>
          <p className="mt-5 text-lg text-ink-500 max-w-md leading-relaxed">
            Submit your profile, choose your category, and place a higher
            bid to move your submission to the top.
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
              { rank: 1, user: "@alex", bid: 125, top: true },
              { rank: 2, user: "@john", bid: 110 },
              { rank: 3, user: "@mike", bid: 95 },
            ].map((row) => (
              <div
                key={row.rank}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${
                  row.top ? "bg-gold-50/60" : "bg-ink-100/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      row.top ? "bg-gold-400 text-white" : "bg-white text-ink-700"
                    }`}
                  >
                    {row.rank}
                  </span>
                  <span className="text-sm font-medium text-ink-900">
                    {row.user}
                  </span>
                </div>
                <span className="text-sm font-semibold text-ink-900">
                  ₹{row.bid}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
