import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LegalContentSection } from "@/components/sections/legal/LegalContentSection";
import { LegalHeroSection } from "@/components/sections/legal/LegalHeroSection";
import { privacyContent as fallbackPrivacyContent } from "@/data/legal-content";
import { getLegalContent } from "@/lib/api";

export default async function PrivacyPage() {
  const content = (await getLegalContent("privacy")) ?? fallbackPrivacyContent;

  return (
    <div className="ezway-page bg-[var(--ezway-pure-black)]">
      <SiteHeader activePath="/" />
      <LegalHeroSection content={content} />
      <LegalContentSection content={content} />
      <SiteFooter variant="careers" />
    </div>
  );
}
