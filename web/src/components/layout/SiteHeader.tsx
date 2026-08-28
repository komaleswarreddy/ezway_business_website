"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeNav } from "@/data/home-content";
import { EASE } from "@/components/motion/variants";

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M3 6H19M3 11H19M3 16H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M5 5L17 17M17 5L5 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader({ activePath = "/" }: { activePath?: string }) {
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === activePath || (href !== "/" && activePath.startsWith(href));

  return (
    <header className="relative">
      <div className="ezway-container flex items-center justify-between px-5 py-6 md:px-10 lg:px-16 lg:py-8">
      <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
        <Image
          src="/assets/logo/ezway-logo.png"
          alt="Ezway"
          width={140}
          height={40}
          className="h-8 w-auto lg:h-auto lg:w-auto"
          priority
        />
      </Link>

      {/* Desktop nav — unchanged at lg and above */}
      <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-[var(--ezway-nav-bg)] px-3 py-2 lg:flex">
        {homeNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              isActive(link.href)
                ? "bg-[var(--ezway-orange)] text-white"
                : "text-[var(--ezway-muted)] hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/#get-started"
        className="ezway-btn-primary hidden shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 lg:inline-flex"
      >
        Get Started
      </Link>

      {/* Mobile / tablet menu trigger */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[var(--ezway-nav-bg)] text-white transition-transform duration-200 active:scale-90 lg:hidden"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      </div>

      {/* Mobile / tablet dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="absolute inset-x-5 top-full z-50 mt-2 rounded-[20px] border border-white/10 bg-[var(--ezway-nav-bg)] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)] md:inset-x-10 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {homeNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-[14px] px-4 py-3 text-[15px] font-semibold transition-colors ${
                    isActive(link.href)
                      ? "bg-[var(--ezway-orange)] text-white"
                      : "text-[var(--ezway-muted)] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/#get-started"
              onClick={() => setOpen(false)}
              className="ezway-btn-primary mt-3 w-full"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
