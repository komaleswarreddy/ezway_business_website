import Image from "next/image";
import Link from "next/link";
import { aboutCtaContent } from "@/data/about-content";

export function AboutCtaSection() {
  return (
    <section className="ezway-section bg-[#f8f8f8] text-center text-[var(--ezway-black)]">
      <h2 className="ezway-display text-[48px]">{aboutCtaContent.heading}</h2>
      <p className="mx-auto mt-4 max-w-md text-[var(--ezway-muted)]">
        {aboutCtaContent.subtext}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/#get-started"
          className="ezway-btn-primary inline-flex items-center gap-2"
        >
          <Image
            src="/assets/icons/impact/icon-car.png"
            alt=""
            width={18}
            height={18}
            className="brightness-0 invert"
          />
          {aboutCtaContent.primaryCta}
        </Link>
        <Link
          href="#careers"
          className="inline-flex items-center rounded-full bg-[var(--ezway-black)] px-7 py-3.5 text-[15px] font-bold text-white"
        >
          {aboutCtaContent.secondaryCta}
        </Link>
      </div>
    </section>
  );
}
