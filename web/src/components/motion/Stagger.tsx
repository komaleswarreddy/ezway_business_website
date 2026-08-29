"use client";

import type { TargetAndTransition, Variants } from "motion/react";
import type { ReactNode } from "react";
import { tagMap } from "./Reveal";
import { baseTransition, fadeInUp, staggerContainer } from "./variants";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: keyof typeof tagMap;
  /** "view" (default) animates in on scroll; "mount" animates in immediately
   * — use "mount" for above-the-fold hero content that's visible on load. */
  trigger?: "view" | "mount";
};

/** Wrap a grid/list of <StaggerItem> children — they animate in one after another. */
export function StaggerReveal({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.15,
  as = "div",
  trigger = "view",
}: StaggerRevealProps) {
  const MotionTag = tagMap[as];

  const viewProps =
    trigger === "view"
      ? { initial: "hidden", whileInView: "show", viewport: { once, amount } }
      : { initial: "hidden", animate: "show" };

  return (
    <MotionTag className={className} variants={staggerContainer(stagger, delay)} {...viewProps}>
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: keyof typeof tagMap;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
};

export function StaggerItem({
  children,
  className,
  variants = fadeInUp,
  as = "div",
  whileHover,
  whileTap,
}: StaggerItemProps) {
  const MotionTag = tagMap[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      transition={baseTransition}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </MotionTag>
  );
}
