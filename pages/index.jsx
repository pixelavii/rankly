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

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/categories`, {
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
