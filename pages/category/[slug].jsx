import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import CategoryHeader from "../../components/categories/CategoryHeader";
import CurrentHighestBid from "../../components/bidding/CurrentHighestBid";
import BidList from "../../components/bidding/BidList";
import BidModal from "../../components/bidding/BidModal";
import { mockCategories, mockBiddersByCategory } from "../../data/mockData";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [modalOpen, setModalOpen] = useState(false);

  const category = mockCategories.find((c) => c.slug === slug);
  const bidders = slug ? mockBiddersByCategory[slug] || [] : [];

  if (!category) {
    return (
      <Layout title="Category — Rankly">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center text-ink-500">
          {slug ? "Category not found." : ""}
        </div>
      </Layout>
    );
  }

  const highestBid = bidders[0]?.bidAmount ?? 0;

  return (
    <Layout title={`${category.name} — Rankly`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <CategoryHeader category={category} />

        <CurrentHighestBid
          amount={highestBid}
          onPlaceBid={() => setModalOpen(true)}
        />

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="md:text-lg text-sm font-semibold text-ink-900">
              Current Ranking
            </h2>
            <p className="md:text-sm text-xs text-ink-500">
              Ranked by bid amount, not by outcome
            </p>
          </div>
          <BidList
            bidders={bidders}
            categoryName={category.name}
            onPlaceFirstBid={() => setModalOpen(true)}
            onPlaceBid={() => setModalOpen(true)}
          />
        </div>
      </div>

      <BidModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        categoryName={category.name}
        minBid={highestBid}
      />
    </Layout>
  );
}
