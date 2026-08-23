import Image from "next/image";
import { impactContent } from "@/data/about-content";

export function ImpactSection() {
  return (
    <section className="relative ezway-section overflow-hidden bg-[var(--ezway-black)]">
      <div className="relative z-10">
        <p className="ezway-label mb-3 text-center">{impactContent.label}</p>
        <h2 className="ezway-display mb-10 text-center text-[48px]">
          {impactContent.heading}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {impactContent.stats.map((stat) => (
            <div
              key={stat.label}
              className="relative rounded-[20px] bg-[#1f1f1f] p-6 ring-1 ring-white/5"
            >
              <Image
                src={stat.icon}
                alt=""
                width={36}
                height={36}
                className="mb-4"
              />
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-white/90">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-[var(--ezway-muted)]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
