import Image from "next/image";
import { sustainabilityContent } from "@/data/home-content";

export function SustainabilitySection() {
  const { footer } = sustainabilityContent;

  return (
    <section className="bg-[#eef8f0] px-5 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
        {/* Left — exported image already includes environmental impact overlay */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-[28px] md:h-[400px] lg:h-[560px]">
          <Image
            src={sustainabilityContent.image}
            alt={sustainabilityContent.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, (max-width: 1325px) 50vw, 620px"
          />
        </div>

        {/* Right — copy, stat grid, footer banner */}
        <div>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ezway-green)]">
            {sustainabilityContent.label}
          </p>
          <h2 className="ezway-display max-w-[480px] text-[26px] leading-[1] text-[var(--ezway-black)] md:text-[34px] lg:text-[42px] lg:leading-[0.95]">
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
