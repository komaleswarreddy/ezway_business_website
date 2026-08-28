import { teamMembers } from "@/data/about-content";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { hoverLift } from "@/components/motion/variants";

export function TeamSection() {
  const { header } = teamMembers;

  return (
    <section className="relative overflow-hidden">
      <div className="ezway-container ezway-section relative">
      <span className="pointer-events-none absolute right-10 top-8 text-[80px] font-black leading-none text-white/[0.04] md:text-[130px] lg:text-[180px]">
        TEAM
      </span>

      <Reveal className="relative mb-8 grid grid-cols-1 gap-6 md:mb-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-10">
        <div>
          <p className="ezway-label mb-3">{header.label}</p>
          <h2 className="ezway-display text-[28px] leading-[1] md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
            {header.heading[0]}
            <br />
            <span className="text-[var(--ezway-orange)]">{header.heading[1]}</span>
          </h2>
        </div>
        <div className="border-l-2 border-[var(--ezway-orange)] pl-6 lg:pl-8">
          <p className="max-w-md text-[15px] leading-relaxed text-[var(--ezway-muted)]">
            {header.description}
          </p>
        </div>
      </Reveal>

      <StaggerReveal className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {teamMembers.founders.map((member) => (
          <StaggerItem key={member.num} whileHover={hoverLift}>
            <TeamMemberCard {...member} size="large" />
          </StaggerItem>
        ))}
      </StaggerReveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {teamMembers.leadership.map((member) => (
          <StaggerItem key={member.num} whileHover={hoverLift}>
            <TeamMemberCard {...member} size="medium" />
          </StaggerItem>
        ))}
      </StaggerReveal>
      </div>
    </section>
  );
}
