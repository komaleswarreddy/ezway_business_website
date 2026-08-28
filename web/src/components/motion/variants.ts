// Shared animation primitives — subtle & fast, used everywhere for a
// consistent motion "feel" across the whole site.
//
// Variants describe pure states (no timing). Timing/easing lives on the
// `transition` prop of each <Reveal>/<motion.*> usage so a per-instance
// `delay` can always be layered on without fighting variant-level
// transitions.

export const EASE = [0.16, 1, 0.3, 1] as const; // fast-out, gentle settle
export const DURATION = 0.45;
export const DURATION_FAST = 0.25;

export const baseTransition = { duration: DURATION, ease: EASE };

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1 },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0 },
};

// Wrap a grid/list with this (as the parent's `variants`, `initial="hidden"
// whileInView="show"`), give each child `variants={fadeInUp}` — children
// stagger in automatically once the parent enters view.
export function staggerContainer(staggerDelay = 0.08, initialDelay = 0) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };
}

export const tapScale = { scale: 0.96 };
export const hoverLift = { y: -4, transition: { duration: DURATION_FAST, ease: EASE } };
export const hoverScale = { scale: 1.03, transition: { duration: DURATION_FAST, ease: EASE } };
