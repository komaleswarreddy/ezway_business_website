import { aboutHeroContent } from "@/data/about-content";

export function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden px-5 pb-12 pt-6 md:min-h-[calc(100svh-7rem)] md:px-10 md:pb-16 lg:min-h-[calc(100svh-7.5rem)] lg:px-16 lg:pb-24 lg:pt-4">
      <div className="relative max-w-4xl">
        <h1 className="ezway-display text-[36px] leading-[1.02] md:text-[52px] md:leading-[0.96] lg:text-[64px] lg:leading-[0.92]">
          {aboutHeroContent.headline[0]}
          <br />
          <span className="text-[var(--ezway-orange)]">
            {aboutHeroContent.headline[1]}
          </span>{" "}
          {aboutHeroContent.headline[2]}
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75">
          {aboutHeroContent.subtext}
        </p>
      </div>
    </section>
  );
}
