import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import PopularCategories from "../components/sections/PopularCategories";
import StatsSection from "../components/sections/StatsSection";
import HowItWorks from "../components/sections/HowItWorks";
import CTASection from "../components/sections/CTASection";
import { mockCategories, mockStats } from "../data/mockData";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <PopularCategories categories={mockCategories} />
      <StatsSection stats={mockStats} />
      <HowItWorks />
      <CTASection />
    </Layout>
  );
}
