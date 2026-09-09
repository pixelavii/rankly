import Layout from "../components/layout/Layout";
import CategoryGrid from "../components/categories/CategoryGrid";

export default function CategoriesPage({ data }) {
  return (
    <Layout title="Categories — Rankly">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-lg mb-8">
          <h1 className="font-display text-2xl font-extrabold text-ink-900">
            Categories
          </h1>
          <p className="text-sm text-ink-500 mt-2">
            Choose a category to view its current ranking, or submit your own
            profile with a bid.
          </p>
        </div>
        <CategoryGrid categories={data.categories} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://rankly-zeta.vercel.app/api/categories`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return {
    props: {
      data: data || [],
    },
  };
}
