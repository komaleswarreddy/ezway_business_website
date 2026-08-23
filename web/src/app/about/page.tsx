import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutCtaSection } from "@/components/sections/about/AboutCtaSection";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { BeliefsSection } from "@/components/sections/about/BeliefsSection";
import { ImpactSection } from "@/components/sections/about/ImpactSection";
import { OurStorySection } from "@/components/sections/about/OurStorySection";
import { TeamSection } from "@/components/sections/about/TeamSection";

export default function AboutPage() {
  return (
    <div className="ezway-page bg-[var(--ezway-pure-black)]">
      <SiteHeader activePath="/about" />
      <AboutHeroSection />
      <OurStorySection />
      <BeliefsSection />
      <TeamSection />
      <ImpactSection />
      <AboutCtaSection />
      <SiteFooter variant="about" />
    </div>
  );
}
