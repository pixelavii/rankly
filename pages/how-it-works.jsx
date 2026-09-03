import Layout from "../components/layout/Layout";
import HowItWorks from "../components/sections/HowItWorks";
import CTASection from "../components/sections/CTASection";

export default function HowItWorksPage() {
  return (
    <Layout title="How It Works — Rankly">
      <div className="pt-6">
        <HowItWorks />
      </div>
      <CTASection />
    </Layout>
  );
}
