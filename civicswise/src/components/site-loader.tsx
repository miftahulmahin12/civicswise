"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const SESSION_FLAG = "civicswise-intro-seen";
const WORD = "CIVICSWISE";

/**
 * Liquid-fill wordmark: a dim base layer of the word sits behind a bright
 * white copy that's clipped from the bottom up as `progress` rises, with a
 * thin shimmering "surface" line marking the fill boundary.
 */
function LiquidWordmark({ progress }: { progress: number }) {
  const boundary = 100 - progress;
  return (
    <div className="liquid-wordmark">
      <span className="liquid-wordmark-base" aria-hidden="true">
        {WORD}
      </span>
      <span
        className="liquid-wordmark-fill"
        style={{ clipPath: `inset(${boundary}% 0 0 0)` }}
      >
        {WORD}
      </span>
      {progress > 1 && progress < 100 && (
        <div className="liquid-wordmark-wave" style={{ top: `${boundary}%` }} />
      )}
      <span className="sr-only">{WORD}</span>
    </div>
  );
}

/**
 * A one-time, full-screen boot sequence: a liquid-fill "CIVICSWISE"
 * wordmark rises to 100%, then an iris wipe reveals the site underneath.
 *
 * Shown only the first time someone lands on the site in a given browser
 * session (sessionStorage-gated) — it will not replay on every page or
 * every reload within that same session, but will play again for a fresh
 * visit later. Purely decorative: it never blocks screen readers or
 * keyboard users from the real page, and is skipped entirely for
 * prefers-reduced-motion.
 */
export function SiteLoader() {
  const prefersReduced = useReducedMotion();
  const [phase, setPhase] = useState<"loading" | "holding" | "revealing" | "done">("loading");
  const [progress, setProgress] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_FLAG) === "1";
    } catch {
      alreadySeen = false;
    }

    if (prefersReduced || alreadySeen) {
      // CSS already hides #site-loader-root instantly via the
      // data-skip-intro attribute set before hydration, so this is just
      // cleanup — deferred to a callback rather than called synchronously
      // in the effect body.
      const id = requestAnimationFrame(() => setPhase("done"));
      return () => cancelAnimationFrame(id);
    }

    const start = performance.now();
    const durationMs = 1600;
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setPhase("holding");
        setTimeout(() => setPhase("revealing"), 350);
        setTimeout(() => {
          setPhase("done");
          try {
            sessionStorage.setItem(SESSION_FLAG, "1");
          } catch {
            /* ignore — worst case the intro plays again */
          }
        }, 1250);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [prefersReduced]);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        id="site-loader-root"
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
          className="flex flex-col items-center gap-6 px-6"
        >
          <LiquidWordmark progress={progress} />
          <p className="text-sm tracking-wide text-paper-fixed/60">
            Loading… {progress}%
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
