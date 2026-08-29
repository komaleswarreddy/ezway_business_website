import type { LegalPageContent } from "@/data/legal-content";
import { Reveal } from "@/components/motion/Reveal";

function DocIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 1.5H10L13 4.5V13.5C13 14.05 12.55 14.5 12 14.5H4C3.45 14.5 3 14.05 3 13.5V2.5C3 1.95 3.45 1.5 4 1.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M10 1.5V4.5H13" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M5.5 8H10.5M5.5 10.5H10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function LegalHeroSection({
  content,
}: {
  content: Pick<LegalPageContent, "badge" | "heading" | "lastUpdated" | "subtext">;
}) {
  return (
    <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden md:min-h-[calc(100svh-7rem)] lg:min-h-[calc(100svh-7.5rem)]">
      <div className="ezway-container px-5 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ezway-orange)]/25 bg-[var(--ezway-orange)]/15 px-3 py-1.5 text-[12px] font-bold text-[var(--ezway-orange)]">
            <DocIcon />
            {content.badge}
          </span>
          <h1 className="ezway-display mt-5 text-[36px] leading-[1.02] text-white md:text-[48px] md:leading-[0.98] lg:text-[56px] lg:leading-[0.95]">
            {content.heading}
          </h1>
          <p className="mt-3 text-[13px] text-[var(--ezway-muted)]">{content.lastUpdated}</p>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/75">
            {content.subtext}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
