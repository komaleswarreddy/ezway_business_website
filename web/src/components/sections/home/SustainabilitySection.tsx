import Image from "next/image";
import { sustainabilityContent } from "@/data/home-content";

export function SustainabilitySection() {
  const { footer } = sustainabilityContent;

  return (
    <section className="bg-[#eef8f0] px-16 py-20">
      <div className="grid grid-cols-2 items-start gap-10">
        {/* Left — exported image already includes environmental impact overlay */}
        <div className="overflow-hidden rounded-[28px]">
          <Image
            src={sustainabilityContent.image}
            alt={sustainabilityContent.imageAlt}
            width={520}
            height={560}
            className="h-[560px] w-full object-cover"
          />
        </div>

        {/* Right — copy, stat grid, footer banner */}
        <div>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-green)]">
            {sustainabilityContent.label}
          </p>
          <h2 className="ezway-display max-w-[480px] text-[42px] leading-[0.95] text-[var(--ezway-black)]">
            {sustainabilityContent.heading}
          </h2>
          <p className="mt-5 max-w-[460px] text-[14px] leading-[1.7] text-[var(--ezway-muted)]">
            {sustainabilityContent.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {sustainabilityContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] bg-white px-5 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${stat.iconBg}`}
                >
                  <Image
                    src={stat.icon}
                    alt=""
                    aria-hidden
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] object-contain"
                  />
                </div>
                <p className="text-[22px] font-black leading-none text-[var(--ezway-black)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] leading-snug text-[var(--ezway-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-[18px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <Image
              src={footer.icon}
              alt=""
              aria-hidden
              width={22}
              height={22}
              className="mt-0.5 h-[22px] w-[22px] shrink-0 object-contain"
            />
            <p className="text-[13px] leading-[1.65] text-[var(--ezway-muted)]">
              <span className="font-bold text-[var(--ezway-green)]">
                {footer.highlight}
              </span>
              {footer.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
