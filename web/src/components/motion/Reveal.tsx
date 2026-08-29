"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { baseTransition, fadeInUp } from "./variants";

export const tagMap = {
  div: motion.div,
  span: motion.span,
  section: motion.section,
  li: motion.li,
  ul: motion.ul,
  p: motion.p,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: keyof typeof tagMap;
  /** "view" (default) animates in on scroll; "mount" animates in immediately
   * — use "mount" for above-the-fold hero content that's visible on load. */
  trigger?: "view" | "mount";
};

/** Reveal animation: fades/slides in, either on scroll-into-view or on mount. */
export function Reveal({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  once = true,
  amount = 0.2,
  as = "div",
  trigger = "view",
}: RevealProps) {
  const MotionTag = tagMap[as];

  const viewProps =
    trigger === "view"
      ? { initial: "hidden", whileInView: "show", viewport: { once, amount } }
      : { initial: "hidden", animate: "show" };

  return (
    <MotionTag
      className={className}
      variants={variants}
      transition={{ ...baseTransition, delay }}
      {...viewProps}
    >
      {children}
    </MotionTag>
  );
}
