import {
  lifeAtEzwayContent,
  type LifeCardBg,
} from "@/data/careers-content";

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className={className}>
      <path
        d="M10 1.5L3.5 10.5H8.5L8 16.5L14.5 7.5H9.5L10 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className={className}>
      <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M9 1.75C11 4 12 6.4 12 9C12 11.6 11 14 9 16.25C7 14 6 11.6 6 9C6 6.4 7 4 9 1.75Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M1.75 9H16.25" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className={className}>
      <circle cx="6.5" cy="6" r="2.25" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12.5" cy="6.75" r="1.85" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2 15.5C2 12.5 4 10.75 6.5 10.75C8.35 10.75 9.9 11.7 10.6 13.15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10.6 15.5C10.6 13.15 12.15 11.75 14 11.75C15.6 11.75 16.5 12.9 16.5 14.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className={className}>
      <circle cx="9" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M6.5 10.5L5.5 16.5L9 14.75L12.5 16.5L11.5 10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className={className}>
      <rect x="2" y="3.5" width="14" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 7.25H16" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 1.5V4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12.5 1.5V4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const iconMap = {
  bolt: BoltIcon,
  globe: GlobeIcon,
  people: PeopleIcon,
  badge: BadgeIcon,
  leaf: LeafIcon,
  calendar: CalendarIcon,
};

const cardStyles: Record<
  LifeCardBg,
  { card: string; iconWrap: string; icon: string; title: string; body: string }
> = {
  black: {
    card: "bg-[var(--ezway-black)]",
    iconWrap: "bg-[var(--ezway-orange)]/15",
    icon: "text-[var(--ezway-orange)]",
    title: "text-white",
    body: "text-[#b8b8b8]",
  },
  orange: {
    card: "bg-[var(--ezway-orange)]",
    iconWrap: "bg-white/20",
    icon: "text-white",
    title: "text-white",
    body: "text-white/90",
  },
  white: {
    card: "bg-white",
    iconWrap: "bg-[#fff0e0]",
    icon: "text-[var(--ezway-orange)]",
    title: "text-[var(--ezway-black)]",
    body: "text-[var(--ezway-muted)]",
  },
  mint: {
    card: "bg-[var(--ezway-mint)]",
    iconWrap: "bg-white",
    icon: "text-[var(--ezway-green)]",
    title: "text-[var(--ezway-black)]",
    body: "text-[var(--ezway-muted)]",
  },
};

export function LifeAtEzwaySection() {
  return (
    <section className="bg-[var(--ezway-light-gray)] px-5 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="ezway-label mb-3">{lifeAtEzwayContent.label}</p>
        <h2 className="ezway-display text-[26px] leading-[1] text-[var(--ezway-black)] md:text-[34px] lg:text-[42px] lg:leading-[0.95]">
          {lifeAtEzwayContent.heading}
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {lifeAtEzwayContent.cards.map((card) => {
          const Icon = iconMap[card.icon];
          const style = cardStyles[card.bg];
          return (
            <div
              key={card.title}
              className={`rounded-[24px] px-7 py-7 ${style.card}`}
            >
              <div
                className={`mb-5 flex h-10 w-10 items-center justify-center rounded-full ${style.iconWrap}`}
              >
                <Icon className={style.icon} />
              </div>
              <h3 className={`text-[17px] font-black uppercase tracking-[-0.01em] ${style.title}`}>
                {card.title}
              </h3>
              <p className={`mt-3 text-[13.5px] leading-[1.65] ${style.body}`}>
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
