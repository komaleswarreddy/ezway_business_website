import Link from "next/link";
import { finalCtaContent } from "@/data/home-content";
import { Reveal } from "@/components/motion/Reveal";

function CarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M2 12H16L14.5 7.5C14.2 6.5 13.2 6 12 6H6C4.8 6 3.8 6.5 3.5 7.5L2 12Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="5.5" cy="12.5" r="1.2" fill="white" />
      <circle cx="12.5" cy="12.5" r="1.2" fill="white" />
    </svg>
  );
}

export function FinalCtaSection() {
  return (
    <section id="get-started" className="bg-white text-center text-[var(--ezway-black)]">
      <Reveal as="div" className="ezway-container ezway-section">
        <h2 className="ezway-display text-[28px] md:text-[38px] lg:text-[48px]">
          {finalCtaContent.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--ezway-muted)]">
          {finalCtaContent.subtext}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="ezway-btn-primary inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <CarIcon />
            {finalCtaContent.primaryCta}
          </Link>
          <Link
            href="/careers"
            className="inline-flex items-center rounded-full bg-[var(--ezway-black)] px-7 py-3.5 text-[15px] font-bold text-white transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            {finalCtaContent.secondaryCta}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
