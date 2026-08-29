import Image from "next/image";
import { confidenceContent } from "@/data/home-content";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { hoverLift } from "@/components/motion/variants";

function AadhaarKycIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden className="mb-5 text-[var(--ezway-orange)]">
      <circle cx="8" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 17c0-3.6 2.4-6 5.5-6 1.1 0 2.1.3 3 .85" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15.5" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M14 6.5l1 1 2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TripOtpIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden className="mb-5 text-[var(--ezway-orange)]">
      <circle cx="6.5" cy="13.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 11L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 7L15.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 5L17.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LiveTrackingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden className="mb-5 text-[var(--ezway-orange)]">
      <path
        d="M17 3L3 9.5L9.5 11.5L11.5 18L17 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SosShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 22 22" fill="none" aria-hidden className="mb-5 text-[var(--ezway-orange)]">
      <path
        d="M11 1.5L18 4.5V10.5C18 15 14.5 18.5 11 20.5C7.5 18.5 4 15 4 10.5V4.5L11 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const confidenceIconMap = {
  "aadhaar-kyc": AadhaarKycIcon,
  "trip-otp": TripOtpIcon,
  "live-tracking": LiveTrackingIcon,
  "sos-shield": SosShieldIcon,
};

export function ConfidenceSection() {
  return (
    <section className="relative overflow-hidden">
      {/* City at night background */}
      <Image
        src={confidenceContent.background}
        alt=""
        aria-hidden
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="ezway-container relative px-5 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20">
        {/* Centered header */}
        <Reveal className="mx-auto mb-8 max-w-[720px] text-center md:mb-10 lg:mb-12">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-orange)]">
            {confidenceContent.label}
          </p>
          <h2 className="ezway-display text-[28px] leading-[1] text-white md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
            {confidenceContent.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#c8c8c8]">
            {confidenceContent.description}
          </p>
        </Reveal>

        {/* Feature cards */}
        <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {confidenceContent.items.map((item) => {
            const Icon = confidenceIconMap[item.icon];
            return (
              <StaggerItem
                key={item.title}
                whileHover={hoverLift}
                className="rounded-[22px] border border-white/10 bg-black/45 p-6 backdrop-blur-[2px]"
              >
                <Icon />
                <h3 className="text-[13px] font-black uppercase leading-[1.2] tracking-[0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-[#a8a8a8]">
                  {item.desc}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
