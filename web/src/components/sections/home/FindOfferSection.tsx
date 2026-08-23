import Image from "next/image";
import Link from "next/link";
import { findOfferContent } from "@/data/home-content";

function FeatureIcons({ index }: { index: number }) {
  const icons = [
    // Star
    <svg key="star" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1.5L9.8 5.8L14.5 6.2L11 9.2L12 14L8 11.6L4 14L5 9.2L1.5 6.2L6.2 5.8L8 1.5Z"
        stroke="#FE8800"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>,
    // Shield
    <svg key="shield" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1.5L13 3.5V7.5C13 10.5 10.8 12.8 8 14C5.2 12.8 3 10.5 3 7.5V3.5L8 1.5Z"
        stroke="#FE8800"
        strokeWidth="1.2"
      />
    </svg>,
    // Paper plane
    <svg key="plane" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 8L14 2L10 14L8 9L2 8Z"
        stroke="#FE8800"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}

const statAccentClass = {
  orange: "text-[var(--ezway-orange)]",
  black: "text-[var(--ezway-black)]",
  green: "text-[#27ae60]",
  blue: "text-[#2196f3]",
} as const;

export function FindOfferSection() {
  const { top, bottomLeft, bottomRight } = findOfferContent;

  return (
    <section className="bg-[var(--ezway-light-gray)] px-16 py-20">
      {/* Section header — centered */}
      <div className="mb-10 text-center">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-orange)]">
          {findOfferContent.label}
        </p>
        <h2 className="ezway-display text-[48px] leading-[0.95] text-[var(--ezway-black)]">
          {findOfferContent.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>

      {/* Top card — image left, content right */}
      <div className="mb-5 overflow-hidden rounded-[28px] bg-white p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-2 items-center gap-10">
          <div className="overflow-hidden rounded-[22px]">
            <Image
              src={top.image}
              alt={top.imageAlt}
              width={520}
              height={400}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fff3e6] px-3 py-1.5">
              <span className="h-2 w-2 rounded-full border-2 border-[var(--ezway-orange)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ezway-orange)]">
                {top.tag}
              </span>
            </div>

            <h3 className="text-[28px] font-black uppercase leading-[1.05] tracking-[-0.02em] text-[var(--ezway-black)]">
              {top.heading}
            </h3>
            <p className="mt-4 max-w-[420px] text-[14px] leading-[1.7] text-[var(--ezway-muted)]">
              {top.description}
            </p>

            <ul className="mt-6 space-y-3.5">
              {top.features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[14px] text-[var(--ezway-muted)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff3e6]">
                    <FeatureIcons index={index} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-2 gap-5">
        {/* Drivers card */}
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--ezway-black)] px-8 pb-8 pt-8">
          <div className="grid grid-cols-[1fr_auto] items-end gap-4">
            <div className="pb-2">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M1.5 10H12.5L11.2 6.2C11 5.5 10.3 5 9.5 5H4.5C3.7 5 3 5.5 2.8 6.2L1.5 10Z"
                    stroke="white"
                    strokeWidth="1.1"
                  />
                  <circle cx="4" cy="10.2" r="0.9" fill="white" />
                  <circle cx="10" cy="10.2" r="0.9" fill="white" />
                </svg>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/90">
                  {bottomLeft.tag}
                </span>
              </div>

              <h3 className="text-[26px] font-black uppercase leading-[1.08] tracking-[-0.02em] text-white">
                {bottomLeft.heading[0]}
                <br />
                {bottomLeft.heading[1]}
              </h3>
              <p className="mt-4 max-w-[300px] text-[14px] leading-[1.65] text-[#a1a1a1]">
                {bottomLeft.description}
              </p>

              <Link
                href="#get-started"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ezway-orange)] px-6 py-3 text-[14px] font-bold text-white no-underline"
              >
                {bottomLeft.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <Image
              src={bottomLeft.image}
              alt={bottomLeft.imageAlt}
              width={200}
              height={400}
              className="h-[320px] w-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        {/* Community stats card */}
        <div className="overflow-hidden rounded-[28px] bg-white px-8 pb-8 pt-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
          <h3 className="text-[22px] font-black uppercase leading-[1.1] tracking-[-0.02em] text-[var(--ezway-black)]">
            {bottomRight.heading}
          </h3>
          <p className="mt-2 text-[13px] text-[var(--ezway-muted)]">
            {bottomRight.subtext}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {bottomRight.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[16px] bg-[#f5f5f5] px-4 py-4"
              >
                <p
                  className={`text-[22px] font-black leading-none ${statAccentClass[stat.accent]}`}
                >
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[12px] text-[var(--ezway-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-[18px]">
            <Image
              src={bottomRight.image}
              alt={bottomRight.imageAlt}
              width={520}
              height={220}
              className="h-[180px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
