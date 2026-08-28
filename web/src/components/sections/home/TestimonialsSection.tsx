import { testimonialsContent } from "@/data/home-content";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { hoverLift } from "@/components/motion/variants";

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <path
        d="M10 2L12.4 7.2L18 8L13.9 11.9L15 17.5L10 14.8L5 17.5L6.1 11.9L2 8L7.6 7.2L10 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
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

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
      <path
        d="M10 17.5s-7-4.35-7-9.5c0-2.5 2-4.5 4.5-4.5 1.4 0 2.6.7 3.5 1.9C11.9 4.2 13.1 3.5 14.5 3.5 17 3.5 19 5.5 19 8c0 5.15-9 9.5-9 9.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" aria-hidden className="text-[var(--ezway-orange)]">
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

const statsBarIconMap = {
  star: StarIcon,
  car: CarIcon,
  heart: HeartIcon,
  leaf: LeafIcon,
};

function StarRow() {
  return (
    <p className="text-[var(--ezway-orange)] tracking-wider" aria-label="5 stars">
      ★★★★★
    </p>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  variant,
}: {
  quote: string;
  author: string;
  role: string;
  variant: "dark" | "light";
}) {
  const isDark = variant === "dark";

  return (
    <article
      className={`flex min-h-[280px] flex-col rounded-[24px] border p-8 ${
        isDark
          ? "border-transparent bg-[var(--ezway-black)] text-white"
          : "border-black/10 bg-[var(--ezway-light-gray)] text-[var(--ezway-black)]"
      }`}
    >
      <StarRow />
      <p className="mt-4 flex-1 text-[15px] leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-bold">{author}</p>
          <p
            className={`text-sm ${
              isDark ? "text-[var(--ezway-muted)]" : "text-[var(--ezway-muted)]"
            }`}
          >
            {role}
          </p>
        </div>
        {role === "Verified" && (
          <span className="shrink-0 rounded-full bg-[var(--ezway-orange)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Verified
          </span>
        )}
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white text-[var(--ezway-black)]">
      <div className="ezway-container ezway-section">
      <Reveal className="mb-8 flex items-start justify-between gap-8 md:mb-10">
        <div>
          <p className="ezway-label mb-3">{testimonialsContent.label}</p>
          <h2 className="ezway-display text-[28px] leading-[1] md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
            {testimonialsContent.heading}
          </h2>
        </div>
        <div className="hidden shrink-0 text-right sm:block">
          <StarRow />
          <p className="mt-2 text-sm text-[var(--ezway-muted)]">
            {testimonialsContent.ratingSummary}
          </p>
        </div>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {testimonialsContent.items.map((item) => (
          <StaggerItem key={item.author} whileHover={hoverLift}>
            <TestimonialCard {...item} />
          </StaggerItem>
        ))}
      </StaggerReveal>

      <div className="mt-8 flex justify-center gap-2">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className={`h-2 rounded-full ${
              dot === 0
                ? "w-8 bg-[var(--ezway-orange)]"
                : "w-2 bg-black/15"
            }`}
          />
        ))}
      </div>

      <StaggerReveal className="mt-8 grid grid-cols-2 overflow-hidden rounded-[20px] bg-[var(--ezway-orange)] md:grid-cols-4">
        {testimonialsContent.statsBar.map((stat, index) => {
          const Icon = statsBarIconMap[stat.icon];
          return (
            <StaggerItem
              key={stat.label}
              className={`flex items-center gap-3 px-5 py-5 md:gap-4 md:px-8 md:py-6 ${
                index > 0 ? "md:border-l md:border-white/20" : ""
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--ezway-black)]">
                <Icon />
              </span>
              <div>
                <AnimatedCounter value={stat.value} className="block text-xl font-black text-white" />
                <p className="text-sm text-white/85">{stat.label}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerReveal>
      </div>
    </section>
  );
}
