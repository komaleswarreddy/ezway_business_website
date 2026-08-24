import { contactHeroContent } from "@/data/contact-content";

function RouteCurve() {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 top-[58px] h-[110px] w-full opacity-60"
    >
      <path
        d="M0 90C120 90 160 20 300 20C440 20 460 100 600 100C740 100 780 30 920 30C1040 30 1080 70 1200 60"
        stroke="var(--ezway-orange)"
        strokeWidth="2"
        strokeDasharray="10 10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-8 md:px-10 md:pb-12 lg:px-16 lg:pb-16 lg:pt-10">
      <RouteCurve />
      <div className="relative z-10 max-w-2xl">
        <h1 className="ezway-display text-[32px] leading-[1.05] md:text-[44px] md:leading-[1] lg:text-[56px] lg:leading-[0.95]">
          <span className="text-white">{contactHeroContent.headline[0].text}</span>
          <span className="text-[var(--ezway-orange)]">
            {contactHeroContent.headline[1].text}
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-[var(--ezway-muted)]">
          {contactHeroContent.subtext}
        </p>
      </div>
    </section>
  );
}
