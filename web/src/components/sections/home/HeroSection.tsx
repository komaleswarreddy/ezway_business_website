import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/data/home-content";

function ScrollIndicator() {
  return (
    <div className="mt-12 flex flex-col items-center gap-2 pb-4">
      <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--ezway-muted)]">
        SCROLL
      </span>
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        aria-hidden
        className="text-[var(--ezway-muted)]"
      >
        <path
          d="M2 4L8 10L14 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 8L8 14L14 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative px-16 pb-6 pt-2">
      <div className="relative z-10 grid grid-cols-2 items-center gap-8">
        {/* Left column */}
        <div className="max-w-[520px]">
          <h1 className="ezway-display text-[64px] leading-[0.95]">
            {heroContent.headline.map((line) => (
              <span
                key={line.text}
                className={`block ${
                  line.accent ? "text-[var(--ezway-orange)]" : "text-white"
                }`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[480px] text-[15px] leading-[1.7] text-[var(--ezway-muted)]">
            {heroContent.subtext}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Link href="#get-started" className="shrink-0">
              <Image
                src={heroContent.findRideBtn}
                alt="Find a Ride"
                width={170}
                height={52}
                className="h-[52px] w-auto"
                priority
              />
            </Link>
            <Link href="#get-started" className="shrink-0">
              <Image
                src={heroContent.offerRideBtn}
                alt="Offer a Ride"
                width={170}
                height={52}
                className="h-[52px] w-auto"
                priority
              />
            </Link>
          </div>

          <div className="mt-6 flex gap-3">
            <Image
              src="/assets/icons/badge-google-play.png"
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-[40px] w-auto"
            />
            <Image
              src="/assets/icons/badge-app-store.png"
              alt="Download on the App Store"
              width={135}
              height={40}
              className="h-[40px] w-auto"
            />
          </div>
        </div>

        {/* Right column — phone stack */}
        <div className="relative mx-auto h-[600px] w-full max-w-[560px]">
          <div className="absolute left-[18px] top-[6px] z-10">
            <Image
              src="/assets/hero/ezway-splash-paths.png"
              alt="Ezway app splash screen"
              width={298}
              height={596}
              className="h-[568px] w-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>

          <Image
            src="/assets/hero/badge-kyc-verified.png"
            alt="KYC Verified — Aadhaar + Face scan"
            width={182}
            height={56}
            className="absolute left-[2px] top-1/2 z-20 h-auto w-[172px] -translate-x-[46%] -translate-y-1/2"
          />

          <div className="absolute bottom-[14px] right-[2px] z-30">
            <Image
              src="/assets/mockups/mobile-app/home-dashboard-phone-mockup.png"
              alt="Ezway dashboard"
              width={262}
              height={524}
              className="h-[496px] w-auto object-contain drop-shadow-[0_20px_44px_rgba(0,0,0,0.55)]"
              priority
            />
          </div>

          {/* Live Tracking — moved up to avoid overlapping phone UI */}
          <Image
            src="/assets/hero/badge-live-tracking.png"
            alt="Live Tracking"
            width={138}
            height={36}
            className="absolute right-[68px] top-[48px] z-40 h-auto w-[128px]"
          />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
