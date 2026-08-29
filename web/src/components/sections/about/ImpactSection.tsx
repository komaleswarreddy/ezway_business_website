import { impactContent } from "@/data/about-content";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { hoverLift } from "@/components/motion/variants";

function CarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 18 18" fill="none" aria-hidden className="mb-4 text-[var(--ezway-orange)]">
      <path
        d="M2 12H16L14.5 7.5C14.2 6.5 13.2 6 12 6H6C4.8 6 3.8 6.5 3.5 7.5L2 12Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="5.5" cy="12.5" r="1.2" fill="currentColor" />
      <circle cx="12.5" cy="12.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function UserCheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden className="mb-4 text-[var(--ezway-orange)]">
      <circle cx="8" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 17c0-3.6 2.4-6 5.5-6 1.1 0 2.1.3 3 .85" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15.5" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M14 6.5l1 1 2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 18 18" fill="none" aria-hidden className="mb-4 text-[var(--ezway-orange)]">
      <path
        d="M15.5 2.5C15.5 2.5 15.8 9 11.5 13.3C7.2 17.6 2.5 15.5 2.5 15.5C2.5 15.5 2.2 9 6.5 4.7C10.8 0.4 15.5 2.5 15.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9.5 12.5C9.5 12.5 8.5 9.5 2.5 9.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden className="mb-4 text-[var(--ezway-orange)]">
      <path
        d="M4 6h12a2 2 0 0 1 2 2v1H4V6Zm-2 3h16v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9Zm14 3.6a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 16 16" fill="none" aria-hidden className="mb-4 text-[var(--ezway-orange)]">
      <path
        d="M8 15C8 15 13 10.6 13 6.5C13 3.7 10.8 1.5 8 1.5C5.2 1.5 3 3.7 3 6.5C3 10.6 8 15 8 15Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.75" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden className="mb-4 text-[var(--ezway-orange)]">
      <path
        d="M10 2L12.4 7.2L18 8L13.9 11.9L15 17.5L10 14.8L5 17.5L6.1 11.9L2 8L7.6 7.2L10 2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden className="mb-4 text-[var(--ezway-orange)]">
      <path
        d="M10 17.5s-7-4.35-7-9.5c0-2.5 2-4.5 4.5-4.5 1.4 0 2.6.7 3.5 1.9C11.9 4.2 13.1 3.5 14.5 3.5 17 3.5 19 5.5 19 8c0 5.15-9 9.5-9 9.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 18 18" fill="none" aria-hidden className="mb-4 text-[var(--ezway-orange)]">
      <circle cx="9" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 10.5L5.5 16.5L9 14.75L12.5 16.5L11.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

const impactIconMap = {
  car: CarIcon,
  "user-check": UserCheckIcon,
  leaf: LeafIcon,
  wallet: WalletIcon,
  location: PinIcon,
  star: StarIcon,
  heart: HeartIcon,
  award: AwardIcon,
};

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--ezway-black)]">
      <div className="ezway-container ezway-section relative z-10">
        <Reveal className="text-center">
          <p className="ezway-label mb-3">{impactContent.label}</p>
          <h2 className="ezway-display mb-8 text-[28px] leading-[1] md:mb-10 md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
            {impactContent.heading}
          </h2>
        </Reveal>
        <StaggerReveal className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {impactContent.stats.map((stat) => {
            const Icon = impactIconMap[stat.icon];
            return (
              <StaggerItem
                key={stat.label}
                whileHover={hoverLift}
                className="relative rounded-[20px] bg-[#1f1f1f] p-6 ring-1 ring-white/5"
              >
                <Icon />
                <AnimatedCounter value={stat.value} className="block text-2xl font-black text-white" />
                <p className="mt-2 text-sm font-semibold text-white/90">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-[var(--ezway-muted)]">
                  {stat.sublabel}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
