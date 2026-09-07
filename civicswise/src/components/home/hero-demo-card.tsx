"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const demoQuestions = [
  {
    q: "What do we call the first ten amendments to the Constitution?",
    choices: ["The Federalist Papers", "The Bill of Rights", "The Articles of Confederation"],
    correct: "The Bill of Rights",
    index: 7,
    correctSoFar: 6,
  },
  {
    q: "What is the highest court in the United States?",
    choices: ["The Supreme Court", "The Court of Appeals", "The Senate"],
    correct: "The Supreme Court",
    index: 8,
    correctSoFar: 7,
  },
  {
    q: "What ocean is on the West Coast of the United States?",
    choices: ["Atlantic (Ocean)", "Gulf of Mexico", "Pacific (Ocean)"],
    correct: "Pacific (Ocean)",
    index: 9,
    correctSoFar: 8,
  },
];

export function HeroDemoCard() {
  const prefersReduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [revealedStep, setRevealedStep] = useState(-1);
  const current = demoQuestions[step];

  useEffect(() => {
    if (prefersReduced) return;
    const revealTimer = setTimeout(() => setRevealedStep(step), 900);
    const nextTimer = setTimeout(() => {
      setStep((s) => (s + 1) % demoQuestions.length);
    }, 3200);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(nextTimer);
    };
  }, [step, prefersReduced]);

  const effectiveRevealed = prefersReduced || revealedStep === step;

  return (
    <div className="relative">
      <div className="glass-surface relative overflow-hidden rounded-[var(--radius-xl)] p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-line/70 pb-4">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            Question {current.index} of 20
          </span>
          <motion.span
            key={current.correctSoFar}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="rounded-full bg-teal-100 px-2.5 py-1 text-xs font-medium text-teal-900"
          >
            {current.correctSoFar} correct
          </motion.span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="mt-5 font-display text-xl leading-snug text-ink">{current.q}</p>
            <div className="mt-5 flex flex-col gap-2.5">
              {current.choices.map((choice) => {
                const isCorrect = choice === current.correct;
                const showCheck = effectiveRevealed && isCorrect;
                return (
                  <div
                    key={choice}
                    className={
                      showCheck
                        ? "flex items-center justify-between rounded-[var(--radius-md)] border border-teal-600 bg-teal-100 px-4 py-3 text-sm font-medium text-teal-900 transition-colors duration-300"
                        : "flex items-center justify-between rounded-[var(--radius-md)] border border-line px-4 py-3 text-sm text-ink-soft transition-colors duration-300"
                    }
                  >
                    {choice}
                    {showCheck && <Check className="h-4 w-4 shrink-0 animate-pop-in text-teal-700" />}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="glass-surface absolute -bottom-5 -right-5 hidden rounded-[var(--radius-lg)] px-4 py-3 sm:block">
        <p className="text-xs text-ink-faint">Practice streak</p>
        <p className="font-display text-lg font-medium text-ink">6 days</p>
      </div>
    </div>
  );
}
