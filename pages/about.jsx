import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function MyBidsPage() {
  return (
    <Layout title="About — Rankly">
      <Hero />
      <WhatIsRankly />
      <HowItWorks />
      <WhyBidding />
      <KeepingItFair />
      <ClosingCTA />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-8 pt-10 pb-10 text-center">
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight">
        The leaderboard you can buy into
      </h1>
      <p className="mt-5 text-base sm:text-lg text-ink-500 leading-relaxed">
        Rankly ranks profiles by how much people are willing to pay to be seen.
        No followers to grind, no algorithm to guess at — just an open bid, and
        whoever's willing to pay the most holds rank #1.
      </p>
    </section>
  );
}

function WhatIsRankly() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-10 border-t border-ink-100">
      <h2 className="font-display text-2xl font-bold text-ink-900">
        What is Rankly
      </h2>
      <p className="mt-4 text-ink-700 leading-relaxed">
        Every category on Rankly — Instagram, YouTube, X, and more — has one top
        spot. Anyone can submit their profile and name a price to hold it. The
        current highest bid sits at rank #1, visible to everyone who visits that
        category, until another bid comes in higher.
      </p>
      <p className="mt-4 text-ink-700 leading-relaxed">
        There's no subscription and no permanent purchase. You're not buying
        followers or engagement — you're buying a moment of visibility, for as
        long as your bid holds the top spot.
      </p>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Choose a category",
      description:
        "Pick the platform where you want to be seen — Instagram, Facebook, Reddit, X, YouTube, or LinkedIn.",
    },
    {
      title: "Submit your profile",
      description:
        "Drop in your profile link. We check it's a real, working profile before it goes live.",
    },
    {
      title: "Place your bid",
      description:
        "Name an amount higher than the current top bid in that category. Pay securely to lock it in.",
    },
    {
      title: "Hold the spot — or reclaim it",
      description:
        "You stay at rank #1 until someone bids higher. If you get outbid, you can always come back and top it.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-8 py-10 border-t border-ink-100">
      <h2 className="font-display text-2xl font-bold text-ink-900">
        How it works
      </h2>
      <ol className="mt-6 space-y-6">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-coral-50 text-coral-600 flex items-center justify-center text-sm font-bold">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1 text-sm text-ink-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function WhyBidding() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-10 border-t border-ink-100">
      <h2 className="font-display text-2xl font-bold text-ink-900">
        Why bidding, not ranking
      </h2>
      <p className="mt-4 text-ink-700 leading-relaxed">
        Follower counts can be bought quietly and never really tested. A bid is
        public and immediate — everyone sees exactly what it took to reach the
        top, and anyone can challenge it at any time. That keeps every
        leaderboard live instead of settled.
      </p>
      <p className="mt-4 text-ink-700 leading-relaxed">
        It also means rank #1 is never final. A category isn't "won" — it's
        held, one bid at a time.
      </p>
    </section>
  );
}

function KeepingItFair() {
  const points = [
    {
      title: "One click, once",
      description:
        "We count profile clicks per visitor, not per click, so numbers reflect real interest instead of repeat refreshes.",
    },
    {
      title: "Payments through Razorpay",
      description:
        "Every bid is a verified, secure payment. We never save your card details.",
    },
    {
      title: "No hidden minimums",
      description:
        "The next bid just has to beat the current one — the amount is entirely up to you.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-8 py-10 border-t border-ink-100">
      <h2 className="font-display text-2xl font-bold text-ink-900">
        Keeping it fair
      </h2>
      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        {points.map((point) => (
          <div key={point.title}>
            <h3 className="font-semibold text-ink-900 text-sm">
              {point.title}
            </h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-500">
        For the full fine print, see our{" "}
        <Link
          href="/rules"
          className="text-rise-600 hover:text-rise-700 font-medium"
        >
          Rules
        </Link>{" "}
        page.
      </p>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="border-t border-ink-100">
      <div className="max-w-3xl mx-auto px-8 py-16 text-center">
        <h2 className="font-display text-3xl font-extrabold text-ink-900 tracking-tight">
          Ready to hold the top spot?
        </h2>
        <p className="mt-3 text-ink-500">
          Pick a category and see what it takes to reach #1.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <Link
            href="/categories"
            className="bg-coral-600 hover:bg-coral-700 text-white font-semibold text-sm rounded-full px-6 py-3 transition"
          >
            Start Bidding
          </Link>
          <Link
            href="/categories"
            className="border border-ink-200 text-ink-900 font-semibold text-sm rounded-full px-6 py-3 hover:border-ink-300 transition"
          >
            Explore Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
