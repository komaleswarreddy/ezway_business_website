import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ConfidenceSection } from "@/components/sections/home/ConfidenceSection";
import { FeaturesSection } from "@/components/sections/home/FeaturesSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { FindOfferSection } from "@/components/sections/home/FindOfferSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { SustainabilitySection } from "@/components/sections/home/SustainabilitySection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="ezway-page bg-[var(--ezway-pure-black)]">
      <SiteHeader activePath="/" />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FindOfferSection />
      <ConfidenceSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <FinalCtaSection />
      <SiteFooter variant="home" />
    </div>
  );
}
