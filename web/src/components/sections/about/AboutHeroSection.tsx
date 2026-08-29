import { aboutHeroContent } from "@/data/about-content";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";

function RouteCurve() {
  return (
    <svg
      viewBox="0 0 1200 220"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-[200px] w-full -translate-y-1/2 opacity-60 md:block"
    >
      <path
        d="M0 170C160 170 200 40 380 40C540 40 570 190 760 190C920 190 960 60 1200 100"
        stroke="var(--ezway-orange)"
        strokeWidth="2"
        strokeDasharray="10 10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden md:min-h-[calc(100svh-7rem)] lg:min-h-[calc(100svh-7.5rem)]">
      <div className="ezway-container relative px-5 pb-12 pt-6 md:px-10 md:pb-16 lg:px-16 lg:pb-24 lg:pt-4">
        <RouteCurve />
        <StaggerReveal trigger="mount" stagger={0.12} className="relative z-10 max-w-4xl">
          <StaggerItem>
            <h1 className="ezway-display text-[36px] leading-[1.02] md:text-[52px] md:leading-[0.96] lg:text-[64px] lg:leading-[0.92]">
              {aboutHeroContent.headline[0]}
              <br />
              <span className="text-[var(--ezway-orange)]">
                {aboutHeroContent.headline[1]}
              </span>{" "}
              {aboutHeroContent.headline[2]}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75">
              {aboutHeroContent.subtext}
            </p>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
