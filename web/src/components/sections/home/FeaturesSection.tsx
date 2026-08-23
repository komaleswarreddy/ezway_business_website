import Image from "next/image";
import { featuresContent } from "@/data/home-content";

function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      className="text-white"
    >
      <path
        d="M11 1.5L18 4.5V10.5C18 15 14.5 18.5 11 20.5C7.5 18.5 4 15 4 10.5V4.5L11 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 11L10 13L14 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className="text-[var(--ezway-orange)]"
    >
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

export function FeaturesSection() {
  const [c1, c2, c3, c4] = featuresContent.cards;

  return (
    <section className="bg-[var(--ezway-light-gray)] px-16 py-20">
      {/* Header */}
      <div className="mb-10 grid grid-cols-[1fr_340px] items-start gap-10">
        <div>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-orange)]">
            {featuresContent.label}
          </p>
          <h2 className="ezway-display text-[48px] leading-[0.95] text-[var(--ezway-black)]">
            {featuresContent.heading}
          </h2>
        </div>
        <p className="pt-2 text-[14px] leading-[1.65] text-[var(--ezway-muted)]">
          {featuresContent.intro}
        </p>
      </div>

      {/* Top row — wide left, narrow right */}
      <div className="grid grid-cols-[1.68fr_1fr] gap-5">
        {/* Card 01 */}
        <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[var(--ezway-black)] px-8 pb-6 pt-8">
          <span className="pointer-events-none absolute right-6 top-2 select-none text-[148px] font-black leading-none text-white/[0.05]">
            {c1.num}
          </span>
          <p className="relative mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ezway-orange)]">
            {c1.tag}
          </p>
          <h3 className="relative max-w-[420px] text-[26px] font-black uppercase leading-[1.05] tracking-[-0.02em] text-white">
            {c1.title}
          </h3>
          <p className="relative mt-4 max-w-[400px] text-[14px] leading-[1.65] text-[#d0d0d0]">
            {c1.description}
          </p>
          <p className="relative mt-4 flex items-center gap-2 text-[13px] text-[#d0d0d0]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ezway-orange)]" />
            {c1.bullet}
          </p>
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-end gap-3">
            {c1.phones!.map((phone) => (
              <Image
                key={phone.src}
                src={phone.src}
                alt={phone.alt}
                width={phone.width}
                height={phone.height}
                className="h-[248px] w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
              />
            ))}
          </div>
        </div>

        {/* Card 02 */}
        <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[var(--ezway-orange)] px-7 pb-7 pt-8">
          <span className="pointer-events-none absolute left-5 top-2 select-none text-[148px] font-black leading-none text-white/10">
            {c2.num}
          </span>
          <div className="relative mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
            <ShieldIcon />
          </div>
          <h3 className="relative max-w-[280px] text-[22px] font-black uppercase leading-[1.08] tracking-[-0.02em] text-white">
            {c2.title}
          </h3>
          <p className="relative mt-3 max-w-[280px] text-[13px] leading-[1.6] text-white/90">
            {c2.description}
          </p>
          <div className="relative mx-auto mt-5 overflow-hidden rounded-[18px]">
            <Image
              src={c2.photo!}
              alt={c2.photoAlt!}
              width={360}
              height={210}
              className="h-[196px] w-full object-cover"
            />
          </div>
          <div className="relative mt-4 flex items-center justify-center gap-2 rounded-full bg-white/20 px-5 py-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25 text-[11px] text-white">
              ✓
            </span>
            <span className="text-[13px] font-semibold text-white">
              {c2.verifiedLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom row — narrow left, wide right (reference 40/60 split) */}
      <div className="mt-5 grid grid-cols-[1fr_1.68fr] gap-5">
        {/* Card 03 — exported card has all text baked in */}
        <div className="relative min-h-[340px] overflow-hidden rounded-[28px]">
          <Image
            src={c3.image!}
            alt={c3.imageAlt!}
            fill
            className="object-cover"
            sizes="(max-width: 1325px) 40vw, 400px"
          />
        </div>

        {/* Card 04 — Share Your Route */}
        <div className="relative min-h-[340px] overflow-hidden rounded-[28px] border border-[#e8e8e8] bg-white">
          <div className="flex h-full items-center justify-between gap-6 px-8 py-8">
            <div className="max-w-[270px] shrink-0">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#fff0e0]">
                <CarIcon />
              </div>
              <h3 className="text-[26px] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[var(--ezway-black)]">
                SHARE YOUR ROUTE.
                <br />
                EARN COINS.
              </h3>
              <p className="mt-4 text-[14px] leading-[1.7] text-[var(--ezway-muted)]">
                {c4.description}
              </p>
            </div>

            <div className="flex shrink-0 items-end gap-3 pr-1">
              <Image
                src={c4.phones![0].src}
                alt={c4.phones![0].alt}
                width={148}
                height={296}
                className="h-[288px] w-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
              />
              <Image
                src={c4.phones![1].src}
                alt={c4.phones![1].alt}
                width={160}
                height={318}
                className="h-[308px] w-[160px] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
