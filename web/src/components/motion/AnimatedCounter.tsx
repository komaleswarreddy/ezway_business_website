"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { EASE } from "./variants";

const NUMBER_PATTERN = /^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/;

type AnimatedCounterProps = {
  value: string;
  className?: string;
  duration?: number;
};

/** Counts up from 0 to the numeric part of `value` once it scrolls into view,
 * preserving whatever prefix/suffix surrounds the number (₹, +, kg, ★, /5…). */
export function AnimatedCounter({ value, className, duration = 1.4 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(value);
  const hasRun = useRef(false);

  // Memoized on `value` alone — `.match()` returns a new array every render,
  // which (if left un-memoized) re-triggers the effect below on every
  // unrelated re-render and restarts the count-up from 0 in a loop.
  const match = useMemo(() => value.match(NUMBER_PATTERN), [value]);

  useEffect(() => {
    if (!isInView || !match || hasRun.current) return;
    hasRun.current = true;

    const [, prefix, numStr, suffix] = match;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const target = parseFloat(numStr.replace(/,/g, ""));

    const controls = animate(0, target, {
      duration,
      ease: EASE,
      onUpdate: (latest) => {
        const formatted =
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.round(latest).toLocaleString("en-US");
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, match, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
