"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * A one-time, full-screen boot sequence: black screen, brand + welcome
 * message, then an iris wipe reveals the site underneath. Purely visual —
 * it never blocks screen readers or keyboard users from the real page,
 * and is skipped entirely for prefers-reduced-motion.
 */
export function SiteLoader() {
  const prefersReduced = useReducedMotion();
  const [phase, setPhase] = useState<"holding" | "revealing" | "done">("holding");

  useEffect(() => {
    if (prefersReduced) return;
    const revealTimer = setTimeout(() => setPhase("revealing"), 1500);
    const doneTimer = setTimeout(() => setPhase("done"), 2500);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, [prefersReduced]);

  if (phase === "done" || prefersReduced) return null;

  return (
    <AnimatePresence>
      <motion.div
        aria-hidden="true"
        initial={{ clipPath: "circle(150% at 50% 50%)" }}
        animate={{
          clipPath:
            phase === "revealing" ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
        }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0f16]"
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: phase === "revealing" ? 0 : 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full text-base font-bold text-white"
            style={{
              fontFamily: "var(--font-display)",
              background:
                "conic-gradient(from 180deg, var(--brass-400), var(--brass-500), var(--brass-400))",
            }}
          >
            CW
          </span>
          <p className="font-display text-xl font-medium text-paper-fixed">
            Welcome to CivicsWise
          </p>
          <p className="text-sm text-paper-fixed/60">Getting your practice test ready</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
