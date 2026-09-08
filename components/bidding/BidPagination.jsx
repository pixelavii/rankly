export default function BidPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      aria-label="Bidder list pagination"
      className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
    >
      <p className="text-sm text-ink-500 order-2 sm:order-1">
        Showing {startItem}–{endItem} of {totalItems} bidders
      </p>

      {/* Desktop pagination */}
      <div className="hidden sm:flex items-center gap-1 order-1 sm:order-2">
        <PageButton
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </PageButton>
        {pageNumbers.map((page, i) =>
          page === "..." ? (
            <span key={`ellipsis-${i}`} className="px-2 text-ink-500 text-sm">
              &hellip;
            </span>
          ) : (
            <PageButton
              key={page}
              active={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PageButton>
          ),
        )}
        <PageButton
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </PageButton>
      </div>

      {/* Mobile compact pagination */}
      <div className="flex sm:hidden items-center justify-between w-full order-1">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="text-sm font-medium text-ink-700 disabled:text-ink-300 flex items-center gap-1"
        >
          &larr; Previous
        </button>
        <span className="text-sm text-ink-500">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="text-sm font-medium text-ink-700 disabled:text-ink-300 flex items-center gap-1"
        >
          Next &rarr;
        </button>
      </div>
    </nav>
  );
}

function PageButton({ children, active, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-current={active ? "page" : undefined}
      className={`min-w-[2.25rem] h-9 px-2 rounded-lg text-sm font-medium transition disabled:opacity-40 disabled:cursor-not-allowed ${
        active ? "bg-rise-600 text-white" : "text-ink-700 hover:bg-ink-100"
      }`}
    >
      {children}
    </button>
  );
}

function getPageNumbers(current, total) {
  const delta = 1;
  const range = [];
  const withEllipsis = [];
  let last;

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    }
  }

  for (const page of range) {
    if (last) {
      if (page - last === 2) withEllipsis.push(last + 1);
      else if (page - last > 2) withEllipsis.push("...");
    }
    withEllipsis.push(page);
    last = page;
  }

  return withEllipsis;
}
