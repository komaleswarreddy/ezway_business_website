import Link from "next/link";
import { howItWorksContent } from "@/data/home-content";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { hoverLift } from "@/components/motion/variants";

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="8.5" cy="8.5" r="6" stroke="#FE8800" strokeWidth="1.6" />
      <path d="M13 13L18 18" stroke="#FE8800" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ConnectIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="6.5" cy="6" r="2.25" stroke="white" strokeWidth="1.4" />
      <circle cx="12.5" cy="6.75" r="1.85" stroke="white" strokeWidth="1.4" />
      <path d="M2 15.5C2 12.5 4 10.75 6.5 10.75C8.35 10.75 9.9 11.7 10.6 13.15" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10.6 15.5C10.6 13.15 12.15 11.75 14 11.75C15.6 11.75 16.5 12.9 16.5 14.6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 1.5L18 4.5V10.5C18 15 14.5 18.5 11 20.5C7.5 18.5 4 15 4 10.5V4.5L11 1.5Z"
        stroke="#FE8800"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 2L12.4 7.2L18 8L13.9 11.9L15 17.5L10 14.8L5 17.5L6.1 11.9L2 8L7.6 7.2L10 2Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const howItWorksIconMap = {
  search: SearchIcon,
  connect: ConnectIcon,
  shield: ShieldIcon,
  star: StarIcon,
};

export function HowItWorksSection() {
  return (
    <section className="relative bg-[var(--ezway-pure-black)]">
      <div className="ezway-container px-5 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20">
      <Reveal className="mb-8 text-center md:mb-10 lg:mb-12">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-orange)]">
          {howItWorksContent.label}
        </p>
        <h2 className="ezway-display text-[28px] leading-[1] text-white md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
          {howItWorksContent.heading}
        </h2>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {howItWorksContent.steps.map((step) => {
          const Icon = howItWorksIconMap[step.icon];
          return (
          <StaggerItem
            key={step.num}
            whileHover={hoverLift}
            className={`relative min-h-[200px] overflow-hidden rounded-[24px] px-6 pb-7 pt-8 md:min-h-[220px] lg:min-h-[240px] ${
              step.tone === "warm"
                ? "bg-gradient-to-br from-[#2d2218] via-[#241a12] to-[#1a1208]"
                : "bg-[#1a1a1a]"
            }`}
          >
            {/* Outlined watermark number */}
            <span
              className={`pointer-events-none absolute left-3 top-0 select-none text-[80px] font-black leading-none md:text-[100px] lg:text-[128px] ${
                step.tone === "warm"
                  ? "text-transparent [-webkit-text-stroke:1.5px_rgba(254,136,0,0.22)]"
                  : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.1)]"
              }`}
            >
              {step.num}
            </span>

            {/* Icon */}
            <div className="relative mb-5">
              <Icon />
            </div>

            <h3 className="relative text-[14px] font-black uppercase leading-[1.2] tracking-[0.01em] text-white">
              {step.title}
            </h3>
            <p className="relative mt-3 text-[13px] leading-[1.65] text-[#9a9a9a]">
              {step.desc}
            </p>
          </StaggerItem>
          );
        })}
      </StaggerReveal>

      <div className="mt-8 flex justify-center md:mt-10 lg:mt-12">
        <Link
          href="#get-started"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--ezway-orange)] px-9 py-3.5 text-[15px] font-bold text-white no-underline transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
        >
          {howItWorksContent.cta}
          <span aria-hidden className="text-[17px] leading-none">
            →
          </span>
        </Link>
      </div>
      </div>
    </section>
  );
}
