import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BidCard from "./BidCard";
import BidPagination from "./BidPagination";
import EmptyState from "../common/EmptyState";
import { BidCardSkeleton } from "../common/Skeleton";

const PAGE_SIZE = 50;

export default function BidList({ bidders, categoryName, Pagination }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const done = () => setLoading(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, [router.events]);

  function handlePageChange(newPage) {
    router.push(
      { pathname: router.pathname, query: { ...router.query, page: newPage } },
      undefined,
      { shallow: false }, // false so getServerSideProps actually re-runs
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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

  const start = (Pagination.page - 1) * Pagination.pageSize;
  const visibleBidders = bidders;

  return (
    <div>
      <div className="space-y-1.5">
        {visibleBidders.map((bidder, i) => {
          const rank = start + i + 1;
          return (
            <div key={bidder.id}>
              <BidCard
                bidder={bidder}
                rank={rank}
                categoryName={categoryName}
              />
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
        currentPage={Pagination.page}
        totalPages={Pagination.totalPages}
        totalItems={Pagination.totalCount}
        pageSize={Pagination.pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
