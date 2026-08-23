import Image from "next/image";
import Link from "next/link";
import { howItWorksContent } from "@/data/home-content";

export function HowItWorksSection() {
  return (
    <section className="relative bg-[var(--ezway-pure-black)] px-16 py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-orange)]">
          {howItWorksContent.label}
        </p>
        <h2 className="ezway-display text-[48px] leading-[0.95] text-white">
          {howItWorksContent.heading}
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {howItWorksContent.steps.map((step) => (
          <div
            key={step.num}
            className={`relative min-h-[240px] overflow-hidden rounded-[24px] px-6 pb-7 pt-8 ${
              step.tone === "warm"
                ? "bg-gradient-to-br from-[#2d2218] via-[#241a12] to-[#1a1208]"
                : "bg-[#1a1a1a]"
            }`}
          >
            {/* Outlined watermark number */}
            <span
              className={`pointer-events-none absolute left-3 top-0 select-none text-[128px] font-black leading-none ${
                step.tone === "warm"
                  ? "text-transparent [-webkit-text-stroke:1.5px_rgba(254,136,0,0.22)]"
                  : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.1)]"
              }`}
            >
              {step.num}
            </span>

            {/* Icon — exported asset includes dark squircle bg */}
            <div className="relative mb-5">
              <Image
                src={step.icon}
                alt=""
                aria-hidden
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </div>

            <h3 className="relative text-[14px] font-black uppercase leading-[1.2] tracking-[0.01em] text-white">
              {step.title}
            </h3>
            <p className="relative mt-3 text-[13px] leading-[1.65] text-[#9a9a9a]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="#get-started"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--ezway-orange)] px-9 py-3.5 text-[15px] font-bold text-white no-underline transition-opacity hover:opacity-90"
        >
          {howItWorksContent.cta}
          <span aria-hidden className="text-[17px] leading-none">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
