import { contactHeroContent } from "@/data/contact-content";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";

function RouteCurve() {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 top-1/2 h-[110px] w-full -translate-y-1/2 opacity-30"
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
    <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden md:min-h-[calc(100svh-7rem)] lg:min-h-[calc(100svh-7.5rem)]">
      <div className="ezway-container relative px-5 pb-14 pt-8 md:px-10 md:pb-16 lg:px-16 lg:pb-20 lg:pt-12">
        <RouteCurve />
        <StaggerReveal trigger="mount" stagger={0.12} className="relative z-10 max-w-2xl">
          <StaggerItem>
            <h1 className="ezway-display text-[40px] leading-[1] md:text-[52px] md:leading-[0.98] lg:text-[64px] lg:leading-[0.95]">
              <span className="text-white">{contactHeroContent.headline[0].text}</span>
              <span className="text-[var(--ezway-orange)]">
                {contactHeroContent.headline[1].text}
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-[var(--ezway-muted)] md:text-[16px]">
              {contactHeroContent.subtext}
            </p>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
