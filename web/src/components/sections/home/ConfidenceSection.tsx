import Image from "next/image";
import { confidenceContent } from "@/data/home-content";

export function ConfidenceSection() {
  return (
    <section className="relative overflow-hidden px-16 py-20">
      {/* City at night background */}
      <Image
        src={confidenceContent.background}
        alt=""
        aria-hidden
        fill
        className="object-cover"
        sizes="1325px"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative">
        {/* Centered header */}
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-orange)]">
            {confidenceContent.label}
          </p>
          <h2 className="ezway-display text-[48px] leading-[0.95] text-white">
            {confidenceContent.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#c8c8c8]">
            {confidenceContent.description}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-4 gap-5">
          {confidenceContent.items.map((item) => (
            <div
              key={item.title}
              className="rounded-[22px] border border-white/10 bg-black/45 p-6 backdrop-blur-[2px]"
            >
              <Image
                src={item.icon}
                alt=""
                aria-hidden
                width={44}
                height={44}
                className="mb-5 h-11 w-11 object-contain"
              />
              <h3 className="text-[13px] font-black uppercase leading-[1.2] tracking-[0.02em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-[#a8a8a8]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
