import Image from "next/image";
import { beliefsContent } from "@/data/about-content";

const beliefBgMap = {
  black: "bg-[var(--ezway-black)] text-white",
  orange: "bg-[var(--ezway-orange)] text-white",
  white: "bg-white text-[var(--ezway-black)] shadow-sm ring-1 ring-black/5",
};

export function BeliefsSection() {
  return (
    <section className="ezway-section bg-[var(--ezway-light-gray)] text-[var(--ezway-black)]">
      <p className="ezway-label mb-3 text-center">{beliefsContent.label}</p>
      <h2 className="ezway-display mb-8 text-center text-[28px] leading-[1] md:mb-10 md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
        {beliefsContent.heading}
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {beliefsContent.cards.map((card) => (
          <div
            key={card.num}
            className={`relative min-h-[300px] overflow-hidden rounded-[40px] p-6 md:min-h-[340px] md:p-7 lg:min-h-[380px] lg:p-8 ${beliefBgMap[card.bg]}`}
          >
            <span
              className={`absolute left-6 top-4 text-[64px] font-black leading-none md:text-[80px] lg:text-[96px] ${
                card.bg === "orange"
                  ? "text-white/20"
                  : card.bg === "black"
                    ? "text-white/10"
                    : "text-black/5"
              }`}
            >
              {card.num}
            </span>
            <div
              className={`relative mb-6 mt-10 inline-flex h-12 w-12 items-center justify-center rounded-full ${
                card.bg === "white"
                  ? "bg-[#eef8f0]"
                  : card.bg === "orange"
                    ? "bg-white/20"
                    : "bg-transparent"
              }`}
            >
              <Image src={card.icon} alt="" width={40} height={40} />
            </div>
            <h3 className="relative ezway-display text-[22px]">{card.title}</h3>
            <p className="relative mt-4 text-sm leading-relaxed opacity-80">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
