import Image from "next/image";
import { testimonialsContent } from "@/data/home-content";

function StarRow() {
  return (
    <p className="text-[var(--ezway-orange)] tracking-wider" aria-label="5 stars">
      ★★★★★
    </p>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  variant,
}: {
  quote: string;
  author: string;
  role: string;
  variant: "dark" | "light";
}) {
  const isDark = variant === "dark";

  return (
    <article
      className={`flex min-h-[280px] flex-col rounded-[24px] border p-8 ${
        isDark
          ? "border-transparent bg-[var(--ezway-black)] text-white"
          : "border-black/10 bg-[var(--ezway-light-gray)] text-[var(--ezway-black)]"
      }`}
    >
      <StarRow />
      <p className="mt-4 flex-1 text-[15px] leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-bold">{author}</p>
          <p
            className={`text-sm ${
              isDark ? "text-[var(--ezway-muted)]" : "text-[var(--ezway-muted)]"
            }`}
          >
            {role}
          </p>
        </div>
        {role === "Verified" && (
          <span className="shrink-0 rounded-full bg-[var(--ezway-orange)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Verified
          </span>
        )}
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="ezway-section bg-white text-[var(--ezway-black)]">
      <div className="mb-8 flex items-start justify-between gap-8 md:mb-10">
        <div>
          <p className="ezway-label mb-3">{testimonialsContent.label}</p>
          <h2 className="ezway-display text-[28px] leading-[1] md:text-[38px] lg:text-[48px] lg:leading-[0.95]">
            {testimonialsContent.heading}
          </h2>
        </div>
        <div className="hidden shrink-0 text-right sm:block">
          <StarRow />
          <p className="mt-2 text-sm text-[var(--ezway-muted)]">
            {testimonialsContent.ratingSummary}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {testimonialsContent.items.map((item) => (
          <TestimonialCard key={item.author} {...item} />
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className={`h-2 rounded-full ${
              dot === 0
                ? "w-8 bg-[var(--ezway-orange)]"
                : "w-2 bg-black/15"
            }`}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-[20px] bg-[var(--ezway-orange)] md:grid-cols-4">
        {testimonialsContent.statsBar.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center gap-3 px-5 py-5 md:gap-4 md:px-8 md:py-6 ${
              index > 0 ? "md:border-l md:border-white/20" : ""
            }`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--ezway-black)]">
              <Image src={stat.icon} alt="" width={22} height={22} />
            </span>
            <div>
              <p className="text-xl font-black text-white">{stat.value}</p>
              <p className="text-sm text-white/85">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
