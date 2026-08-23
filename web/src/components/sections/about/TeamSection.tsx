import { teamMembers } from "@/data/about-content";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";

export function TeamSection() {
  const { header } = teamMembers;

  return (
    <section className="relative ezway-section overflow-hidden">
      <span className="pointer-events-none absolute right-10 top-8 text-[180px] font-black leading-none text-white/[0.04]">
        TEAM
      </span>

      <div className="relative mb-10 grid grid-cols-[1.1fr_1fr] items-end gap-10">
        <div>
          <p className="ezway-label mb-3">{header.label}</p>
          <h2 className="ezway-display text-[48px] leading-[0.95]">
            {header.heading[0]}
            <br />
            <span className="text-[var(--ezway-orange)]">{header.heading[1]}</span>
          </h2>
        </div>
        <div className="border-l-2 border-[var(--ezway-orange)] pl-8">
          <p className="max-w-md text-[15px] leading-relaxed text-[var(--ezway-muted)]">
            {header.description}
          </p>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-5">
        {teamMembers.founders.map((member) => (
          <TeamMemberCard key={member.num} {...member} size="large" />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-5">
        {teamMembers.leadership.map((member) => (
          <TeamMemberCard key={member.num} {...member} size="medium" />
        ))}
      </div>
    </section>
  );
}
