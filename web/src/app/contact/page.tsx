import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";

export default function ContactPage() {
  return (
    <div className="ezway-page bg-[var(--ezway-pure-black)]">
      <SiteHeader activePath="/contact" />
      <ContactHeroSection />
      <ContactFormSection />
      <SiteFooter variant="careers" />
    </div>
  );
}
