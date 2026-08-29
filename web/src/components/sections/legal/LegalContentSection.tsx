"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { LegalPageContent } from "@/data/legal-content";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/motion/Stagger";
import { EASE } from "@/components/motion/variants";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={`shrink-0 text-[var(--ezway-muted)] transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M2.5 5L7 9.5L11.5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0 text-[var(--ezway-muted)]">
      <path
        d="M5 3L9 7L5 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LegalContentSection({ content }: { content: LegalPageContent }) {
  const [openNum, setOpenNum] = useState<string | null>(null);

  const toggle = (num: string) => {
    setOpenNum((current) => (current === num ? null : num));
  };

  return (
    <section className="bg-[var(--ezway-light-gray)]">
      <div className="ezway-container px-5 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16">
        {/* Table of contents */}
        <Reveal className="mx-auto mb-5 max-w-2xl rounded-[20px] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] md:p-7">
          <p className="ezway-label mb-4">{content.tocLabel}</p>
          <nav className="space-y-1">
            {content.sections.map((section) => (
              <a
                key={section.num}
                href={`#section-${section.num}`}
                onClick={() => setOpenNum(section.num)}
                className="flex items-center justify-between gap-3 rounded-[10px] px-2 py-2 text-[14px] text-[var(--ezway-black)] transition-colors hover:bg-[var(--ezway-light-gray)]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-[var(--ezway-orange)]">
                    {section.num}.
                  </span>
                  {section.title}
                </span>
                <ChevronRightIcon />
              </a>
            ))}
          </nav>
        </Reveal>

        {/* Numbered accordion cards */}
        <StaggerReveal className="mx-auto max-w-2xl space-y-4">
          {content.sections.map((section) => {
            const open = openNum === section.num;
            return (
              <StaggerItem
                key={section.num}
                as="div"
                className="rounded-[20px] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
              >
                <div id={`section-${section.num}`} className="scroll-mt-24">
                  <button
                    type="button"
                    onClick={() => toggle(section.num)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-3 p-6 text-left md:p-7"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#fff0e0] text-[13px] font-bold text-[var(--ezway-orange)]">
                        {section.num}
                      </span>
                      <h2 className="ezway-display text-[17px] text-[var(--ezway-black)]">
                        {section.title}
                      </h2>
                    </span>
                    <ChevronIcon open={open} />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-7 md:pb-7">
                          {section.body && (
                            <p className="text-[14px] leading-[1.7] text-[var(--ezway-muted)]">
                              {section.body}
                            </p>
                          )}

                          {section.bullets && (
                            <ul className="space-y-2.5">
                              {section.bullets.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-[var(--ezway-muted)]"
                                >
                                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ezway-orange)]" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
