import { ourStoryContent } from "@/data/about-content";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { fadeInLeft, hoverLift } from "@/components/motion/variants";

const statBgMap = {
  black: "bg-[var(--ezway-black)] text-white",
  orange: "bg-[var(--ezway-orange)] text-white",
  gray: "bg-[var(--ezway-light-gray)] text-[var(--ezway-black)]",
  green: "bg-[#eef8f0] text-[var(--ezway-green)]",
};

export function OurStorySection() {
  return (
    <section className="bg-white text-[var(--ezway-black)]">
      <div className="ezway-container ezway-section grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <Reveal variants={fadeInLeft}>
          <p className="ezway-label mb-3">{ourStoryContent.label}</p>
          <h2 className="ezway-display mb-6 text-[28px] leading-[1] md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
            {ourStoryContent.heading}
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-[#666666]">
            {ourStoryContent.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {ourStoryContent.bullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[15px] text-[#666666]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff3e6] text-[11px] font-bold text-[var(--ezway-orange)]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <StaggerReveal className="grid grid-cols-2 gap-4 self-start">
          {ourStoryContent.stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              whileHover={hoverLift}
              className={`rounded-[28px] p-7 ${statBgMap[stat.bg]}`}
            >
              <AnimatedCounter
                value={stat.value}
                className="ezway-display block text-[30px] md:text-[36px] lg:text-[40px]"
              />
              <p className="mt-2 text-sm opacity-85">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
