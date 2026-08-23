import Image from "next/image";
import Link from "next/link";
import { finalCtaContent } from "@/data/home-content";

export function FinalCtaSection() {
  return (
    <section
      id="get-started"
      className="ezway-section bg-white text-center text-[var(--ezway-black)]"
    >
      <h2 className="ezway-display text-[48px]">{finalCtaContent.heading}</h2>
      <p className="mx-auto mt-4 max-w-lg text-[var(--ezway-muted)]">
        {finalCtaContent.subtext}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="#" className="ezway-btn-primary inline-flex items-center gap-2">
          <Image
            src="/assets/icons/impact/icon-car.png"
            alt=""
            width={18}
            height={18}
            className="brightness-0 invert"
          />
          {finalCtaContent.primaryCta}
        </Link>
        <Link
          href="#careers"
          className="inline-flex items-center rounded-full bg-[var(--ezway-black)] px-7 py-3.5 text-[15px] font-bold text-white"
        >
          {finalCtaContent.secondaryCta}
        </Link>
      </div>
    </section>
  );
}
