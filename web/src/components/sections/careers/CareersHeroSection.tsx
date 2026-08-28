import { careersHeroContent } from "@/data/careers-content";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";

function RouteCurve() {
  return (
    <svg
      viewBox="0 0 900 260"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-[220px] w-full -translate-y-1/2 opacity-60 md:block"
    >
      <path
        d="M0 40C220 40 260 220 480 220C660 220 700 60 900 60"
        stroke="var(--ezway-orange)"
        strokeWidth="2"
        strokeDasharray="10 10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CareersHeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden md:min-h-[calc(100svh-7rem)] lg:min-h-[calc(100svh-7.5rem)]">
      <div className="ezway-container relative px-5 pb-12 pt-8 md:px-10 md:pb-16 lg:px-16 lg:pb-24 lg:pt-10">
        <RouteCurve />
        <StaggerReveal trigger="mount" stagger={0.12} className="relative z-10 max-w-3xl">
          <StaggerItem>
            <h1 className="ezway-display text-[34px] leading-[1.05] md:text-[48px] md:leading-[1] lg:text-[64px] lg:leading-[0.95]">
              <span className="block text-white">
                {careersHeroContent.headlineLine1}
              </span>
              <span className="block">
                <span className="text-[var(--ezway-orange)]">
                  {careersHeroContent.headlineAccent}
                </span>
                <span className="text-white">{careersHeroContent.headlineRest}</span>
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-6 max-w-xl text-[15px] leading-[1.7] text-[var(--ezway-muted)]">
              {careersHeroContent.subtext.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
