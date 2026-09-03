import { useState } from "react";
import BidCard from "./BidCard";
import ClaimBanner from "./ClaimBanner";
import BidPagination from "./BidPagination";
import EmptyState from "../common/EmptyState";
import { BidCardSkeleton } from "../common/Skeleton";

const PAGE_SIZE = 50;

export default function BidList({
  bidders,
  categoryName,
  loading = false,
  onPlaceFirstBid,
  onPlaceBid,
}) {
  const [page, setPage] = useState(1);

  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <BidCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!bidders || bidders.length === 0) {
    return (
      <EmptyState
        title="No bids yet"
        description="Be the first person to submit a bid in this category."
        actionLabel="Place First Bid"
        onAction={onPlaceFirstBid}
      />
    );
  }

  const totalPages = Math.ceil(bidders.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visibleBidders = bidders.slice(start, start + PAGE_SIZE);

  return (
    <div>
      <div className="space-y-1.5">
        {visibleBidders.map((bidder, i) => {
          const rank = start + i + 1;
          return (
            <div key={bidder.id}>
              <BidCard bidder={bidder} rank={rank} categoryName={categoryName} />
              {/* {rank === 2 && bidders[2] && (
                <ClaimBanner
                  rank={2}
                  amount={bidder.bidAmount}
                  onClick={onPlaceBid}
                />
              )} */}
            </div>
          );
        })}
      </div>

      <BidPagination
        currentPage={page}
        totalPages={totalPages}
        totalItems={bidders.length}
        pageSize={PAGE_SIZE}
        onPageChange={(p) => {
          setPage(p);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
