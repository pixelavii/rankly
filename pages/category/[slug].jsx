import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import CategoryHeader from "../../components/categories/CategoryHeader";
import CurrentHighestBid from "../../components/bidding/CurrentHighestBid";
import BidList from "../../components/bidding/BidList";
import { mockCategories } from "../../data/mockData";

export default function CategoryPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const category = mockCategories.find((c) => c.name === slug);
  // const bidders = slug ? mockBiddersByCategory[slug] || [] : [];

  if (!category) {
    return (
      <Layout title="Category — Rankly">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center text-ink-500">
          {slug ? "Category not found." : ""}
        </div>
      </Layout>
    );
  }

  const highestBid = data?.users[0]?.amount ?? 0;

  return (
    <Layout title={`${category.name} — Rankly`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <CategoryHeader category={category} />

        <CurrentHighestBid category={category} amount={highestBid} />

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
            bidders={data.users}
            categoryName={category.name}
            Pagination={data.pagination}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params, query, req }) {
  const { slug } = params;
  const page = parseInt(query.page || "1", 10);
  const res = await fetch(
    `https://rankly-zeta.vercel.app/api/get_user_by_category?category=${slug}&page=${page}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );
  const data = await res.json();
  return {
    props: {
      data: data || [],
    },
  };
}
