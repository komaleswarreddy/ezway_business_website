import { beliefsContent } from "@/data/about-content";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { hoverLift } from "@/components/motion/variants";

const beliefBgMap = {
  black: "bg-[var(--ezway-black)] text-white",
  orange: "bg-[var(--ezway-orange)] text-white",
  white: "bg-white text-[var(--ezway-black)] shadow-sm ring-1 ring-black/5",
};

function CommunityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <circle cx="8.5" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 16c1-3.2 3.2-4.8 5.5-4.8s4.5 1.6 5.5 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15.5" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12.5 16c0.7-2.4 2.4-3.6 4-3.6s3.3 1.2 4 3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <path
        d="M11 1.5L18 4.5V10.5C18 15 14.5 18.5 11 20.5C7.5 18.5 4 15 4 10.5V4.5L11 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <path
        d="M19 2.5C19 2.5 19.5 11 13.5 16.5C7.5 22 1.5 19 1.5 19C1.5 19 1 11 7 5.5C13 0 19 2.5 19 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M11.5 15C11.5 15 10 11.5 1.5 11.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const beliefIconMap = {
  community: CommunityIcon,
  shield: ShieldIcon,
  leaf: LeafIcon,
};

export function BeliefsSection() {
  return (
    <section className="bg-[var(--ezway-light-gray)] text-[var(--ezway-black)]">
      <div className="ezway-container ezway-section">
      <Reveal className="text-center">
        <p className="ezway-label mb-3">{beliefsContent.label}</p>
        <h2 className="ezway-display mb-8 text-[28px] leading-[1] md:mb-10 md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
          {beliefsContent.heading}
        </h2>
      </Reveal>
      <StaggerReveal className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {beliefsContent.cards.map((card) => {
          const Icon = beliefIconMap[card.icon];
          return (
          <StaggerItem
            key={card.num}
            whileHover={hoverLift}
            className={`relative min-h-[300px] overflow-hidden rounded-[40px] p-6 md:min-h-[340px] md:p-7 lg:min-h-[380px] lg:p-8 ${beliefBgMap[card.bg]}`}
          >
            <span
              className={`absolute left-6 top-4 text-[64px] font-black leading-none md:text-[80px] lg:text-[96px] ${
                card.bg === "orange"
                  ? "text-white/20"
                  : card.bg === "black"
                    ? "text-white/10"
                    : "text-black/5"
              }`}
            >
              {card.num}
            </span>
            <div
              className={`relative mb-6 mt-10 inline-flex h-12 w-12 items-center justify-center rounded-full ${
                card.bg === "white"
                  ? "bg-[#eef8f0]"
                  : card.bg === "orange"
                    ? "bg-white/20"
                    : "bg-transparent"
              }`}
            >
              <Icon />
            </div>
            <h3 className="relative ezway-display text-[22px]">{card.title}</h3>
            <p className="relative mt-4 text-sm leading-relaxed opacity-80">
              {card.body}
            </p>
          </StaggerItem>
          );
        })}
      </StaggerReveal>
      </div>
    </section>
  );
}
