# Rankly — Bidding Marketplace (Frontend Only)

A frontend-only UI for a ranked-listing marketplace, built with Next.js
(Pages Router), React, and TailwindCSS. There is **no backend, database,
API, authentication, or payment logic** — all data comes from
`data/mockData.js`.

## Concept

Users submit a social profile under a category (Instagram, YouTube,
Reddit, etc.) with a bid amount. Bidders are shown in descending order of
bid amount. There is no winner/loser — it's simply a continuously ordered
list, and a new bidder needs a higher bid to appear above existing ones.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
components/
  layout/     Header, Footer, Layout (site chrome)
  categories/ CategoryCard, CategoryGrid, CategoryIcon, CategoryHeader
  bidding/    BidCard, BidList, BidForm, BidInput, BidModal,
              CurrentHighestBid, BidderRank, BidPagination
  common/     Button, Input, Modal, Badge, Avatar, EmptyState,
              LoadingState, Skeleton
  sections/   Hero, HowItWorks, PopularCategories, StatsSection, CTASection
data/
  mockData.js Mock categories, bidders, "my bids", and stats
pages/
  index.jsx             Home
  categories.jsx         Category browsing
  category/[slug].jsx    Individual category ranking + bid modal
  my-bids.jsx             User's dashboard of submitted bids
  how-it-works.jsx        Explanation page
```

## Notes

- Pagination caps at 50 bidders per page (`components/bidding/BidPagination.jsx`,
  wired up in `components/bidding/BidList.jsx`).
- The bid form (`BidForm.jsx` / `BidInput.jsx`) does client-side visual
  validation only (bid must exceed the current highest bid) — no
  submission logic.
- Language avoids "winner/loser/won/lost" throughout; uses "highest bid",
  "current rank", "top position" instead.
- One design note: `Navbar.jsx` was folded into `Header.jsx` since the
  header owns both desktop and mobile nav — splitting them added an extra
  file without a real seam.
