import { aboutHeroContent } from "@/data/about-content";

export function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-7.5rem)] items-center overflow-hidden px-16 pb-24 pt-4">
      <div className="relative max-w-4xl">
        <h1 className="ezway-display text-[64px] leading-[0.92]">
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
