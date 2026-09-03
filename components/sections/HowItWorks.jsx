const steps = [
  {
    number: "1",
    title: "Choose a Category",
    description: "Pick the platform and content type you want to submit to.",
  },
  {
    number: "2",
    title: "Submit Your Profile",
    description: "Add your username and profile link for that category.",
  },
  {
    number: "3",
    title: "Place a Higher Bid",
    description: "Bid above the current highest amount in that category.",
  },
  {
    number: "4",
    title: "Your Submission Moves Higher",
    description: "Your position is determined by your bid amount. Higher bids appear above lower bids.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="max-w-lg mb-10">
        <h2 className="font-display text-2xl font-extrabold text-ink-900">How Bidding Works</h2>
        <p className="text-sm text-ink-500 mt-2 leading-relaxed">
          There is no winner or loser. It's simply a continuously ordered
          list of bidders where a new bidder needs to submit a higher bid
          to appear above the existing bidders.
        </p>
      </div>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <li key={step.number} className="relative pl-11">
            <span className="absolute left-0 top-0 w-8 h-8 rounded-full bg-rise-50 text-rise-600 font-semibold text-sm flex items-center justify-center">
              {step.number}
            </span>
            <h3 className="text-sm font-semibold text-ink-900">
              {step.title}
            </h3>
            <p className="text-sm text-ink-500 mt-1 leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
