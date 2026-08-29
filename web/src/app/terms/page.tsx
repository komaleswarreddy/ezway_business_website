import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LegalContentSection } from "@/components/sections/legal/LegalContentSection";
import { LegalHeroSection } from "@/components/sections/legal/LegalHeroSection";
import { termsContent as fallbackTermsContent } from "@/data/legal-content";
import { getLegalContent } from "@/lib/api";

export default async function TermsPage() {
  const content = (await getLegalContent("terms")) ?? fallbackTermsContent;

  return (
    <div className="ezway-page bg-[var(--ezway-pure-black)]">
      <SiteHeader activePath="/" />
      <LegalHeroSection content={content} />
      <LegalContentSection content={content} />
      <SiteFooter variant="careers" />
    </div>
  );
}
