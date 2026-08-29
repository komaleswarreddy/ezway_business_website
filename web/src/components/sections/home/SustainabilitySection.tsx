import Image from "next/image";
import { sustainabilityContent } from "@/data/home-content";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { fadeInLeft, fadeInRight, hoverLift } from "@/components/motion/variants";

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className={className}>
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

function CarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <path
        d="M2 12H16L14.5 7.5C14.2 6.5 13.2 6 12 6H6C4.8 6 3.8 6.5 3.5 7.5L2 12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="5.5" cy="12.5" r="1.2" fill="currentColor" />
      <circle cx="12.5" cy="12.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path
        d="M10 17.5s-7-4.35-7-9.5c0-2.5 2-4.5 4.5-4.5 1.4 0 2.6.7 3.5 1.9C11.9 4.2 13.1 3.5 14.5 3.5 17 3.5 19 5.5 19 8c0 5.15-9 9.5-9 9.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden className="text-[#2196f3]">
      <circle cx="8.5" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 16c1-3.2 3.2-4.8 5.5-4.8s4.5 1.6 5.5 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15.5" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12.5 16c0.7-2.4 2.4-3.6 4-3.6s3.3 1.2 4 3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const sustainabilityIconMap = {
  leaf: () => <LeafIcon className="text-[var(--ezway-green)]" />,
  car: CarIcon,
  "heart-red": () => <HeartIcon className="text-[#dc2626]" />,
  community: CommunityIcon,
};

export function SustainabilitySection() {
  const { footer } = sustainabilityContent;

  return (
    <section className="bg-[#eef8f0]">
      <div className="ezway-container grid grid-cols-1 gap-6 px-5 py-10 md:px-10 md:py-14 lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-16 lg:py-20">
        {/* Left — exported image already includes environmental impact overlay */}
        <Reveal
          variants={fadeInLeft}
          className="relative h-[280px] w-full overflow-hidden rounded-[28px] md:h-[400px] lg:h-[560px]"
        >
          <Image
            src={sustainabilityContent.image}
            alt={sustainabilityContent.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, (max-width: 1325px) 50vw, 620px"
          />
        </Reveal>

        {/* Right — copy, stat grid, footer banner */}
        <Reveal variants={fadeInRight}>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-green)]">
            {sustainabilityContent.label}
          </p>
          <h2 className="ezway-display max-w-[480px] text-[26px] leading-[1] text-[var(--ezway-black)] md:text-[34px] lg:text-[42px] lg:leading-[0.95]">
            {sustainabilityContent.heading}
          </h2>
          <p className="mt-5 max-w-[460px] text-[14px] leading-[1.7] text-[var(--ezway-muted)]">
            {sustainabilityContent.description}
          </p>

          <StaggerReveal className="mt-8 grid grid-cols-2 gap-4">
            {sustainabilityContent.stats.map((stat) => {
              const Icon = sustainabilityIconMap[stat.icon];
              return (
                <StaggerItem
                  key={stat.label}
                  whileHover={hoverLift}
                  className="rounded-[20px] bg-white px-5 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                >
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${stat.iconBg}`}
                  >
                    <Icon />
                  </div>
                  <AnimatedCounter
                    value={stat.value}
                    className="block text-[22px] font-black leading-none text-[var(--ezway-black)]"
                  />
                  <p className="mt-2 text-[12px] leading-snug text-[var(--ezway-muted)]">
                    {stat.label}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerReveal>

          <div className="mt-5 flex items-start gap-3 rounded-[18px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <HeartIcon className="mt-0.5 shrink-0 text-[var(--ezway-green)]" />
            <p className="text-[13px] leading-[1.65] text-[var(--ezway-muted)]">
              <span className="font-bold text-[var(--ezway-green)]">
                {footer.highlight}
              </span>
              {footer.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
