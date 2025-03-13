// import Header from "./Header";
// import HeroSection from "./HeroSection";
// import StatsSection from "./StatsSection";
// import FeaturesSection from "./FeaturesSection";
// import TestimonialsSection from "./TestimonialsSection";
// import PricingSection from "./PricingSection";
// import CTASection from "./CTASection";
// import Footer from "./Footer";

import CTASection from "../components/CTASection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PricingSection from "../components/PricingSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}