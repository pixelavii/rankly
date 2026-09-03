import Link from "next/link";
import Button from "../common/Button";

export default function CTASection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
      <div className="rounded-xl2 bg-ink-900 text-white px-6 sm:px-10 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="font-display text-2xl font-extrabold">Ready to take a higher spot?</h2>
          <p className="text-ink-300 mt-2 text-sm max-w-md">
            Choose a category, submit your profile, and place a bid above
            the current highest amount.
          </p>
        </div>
        <Link href="/categories">
          <Button
            variant="primary"
            size="lg"
            className="bg-cream/95 text-ink-900 hover:bg-ink-100 whitespace-nowrap"
          >
            Start Bidding
          </Button>
        </Link>
      </div>
    </section>
  );
}
