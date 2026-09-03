import Avatar from "../common/Avatar";

export default function BidCard({ bidder, rank, categoryName }) {
  const isTop = rank === 1;
  const isTopThree = rank <= 3;

  return (
    <div
      className={`flex items-center gap-4 sm:gap-5 rounded-2xl p-4 sm:p-5 transition ${
        isTop
          ? "bg-coral-50"
          : isTopThree
          ? "bg-ink-100/60"
          : "hover:bg-ink-100/40"
      }`}
    >
      <span
        className={`w-6 sm:w-8 text-center font-display font-extrabold shrink-0 ${
          isTop ? "text-coral-600 text-lg sm:text-xl" : "text-ink-300 text-base sm:text-lg"
        }`}
      >
        #{rank}
      </span>

      <Avatar username={bidder.username} size="lg" />

      <div className="flex-1 min-w-0">
        <p className="text-sm sm:text-base font-semibold text-ink-900 truncate">
          {bidder.username}
        </p>
        <p className="text-xs sm:text-sm text-ink-500 truncate mt-0.5">
          {categoryName} profile submission
        </p>
        <div className="flex items-center gap-2 mt-1.5 text-xs text-ink-500">
          <span className="font-medium text-ink-700">{categoryName}</span>
          <span>&middot;</span>
          <span>{bidder.createdAt}</span>
          <span className="hidden sm:inline">&middot;</span>
          <a
            href={bidder.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-coral-600 hover:text-coral-700 font-medium"
          >
            view profile
          </a>
        </div>
      </div>

      <div className="text-right shrink-0">
        <p
          className={`font-display font-extrabold ${
            isTop ? "text-coral-600 text-xl sm:text-2xl" : "text-ink-900 text-lg sm:text-xl"
          }`}
        >
          ₹{bidder.bidAmount}
        </p>
        {isTop && <p className="text-xs text-ink-500 mt-0.5">highest bid</p>}
      </div>
    </div>
  );
}
