import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CareersHeroSection } from "@/components/sections/careers/CareersHeroSection";
import { LifeAtEzwaySection } from "@/components/sections/careers/LifeAtEzwaySection";
import { OpenPositionsSection } from "@/components/sections/careers/OpenPositionsSection";

export default function CareersPage() {
  return (
    <div className="ezway-page bg-[var(--ezway-pure-black)]">
      <SiteHeader activePath="/careers" />
      <CareersHeroSection />
      <LifeAtEzwaySection />
      <OpenPositionsSection />
      <SiteFooter variant="careers" />
    </div>
  );
}
