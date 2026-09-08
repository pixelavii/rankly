import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import PopularCategories from "../components/sections/PopularCategories";
import StatsSection from "../components/sections/StatsSection";
import HowItWorks from "../components/sections/HowItWorks";
import CTASection from "../components/sections/CTASection";
import { mockCategories, mockStats } from "../data/mockData";

export default function HomePage({ data }) {
  return (
    <Layout>
      <Hero />
      <PopularCategories categories={data.categories} />
      <StatsSection stats={mockStats} />
      <HowItWorks />
      <CTASection />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`https://rankly-zeta.vercel.app/api/categories`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return {
      props: {
        data: data || [],
      },
      revalidate: 180,
    };
  } catch (error) {
    console.error("Build-time fetch failed, using empty fallback:", error);
    return {
      props: {
        products: [],
        category: [],
      },
      revalidate: 60, // retry sooner since we have no data
    };
  }
}
