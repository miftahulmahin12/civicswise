"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { MultipleChoiceQuestion } from "@/data/distractors";
import type { PracticeAnswerRecord } from "@/types/question";

export function QuestionCard({
  question,
  record,
  onSelect,
}: {
  question: MultipleChoiceQuestion;
  record?: PracticeAnswerRecord;
  onSelect: (answer: string) => void;
}) {
  const hasAnswered = Boolean(record);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="glass-surface rounded-[var(--radius-xl)] p-6 sm:p-8"
      >
        <div className="mb-5 flex flex-wrap items-center gap-2">
          {question.isDynamic && <Badge variant="warning">Dynamic answer</Badge>}
          {question.isSixtyFiveTwenty && <Badge variant="brass">65/20 list</Badge>}
        </div>
        <h2 className="text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
          {question.question}
        </h2>

        <div className="mt-7 flex flex-col gap-3" role="radiogroup" aria-label="Answer choices">
          {question.choices.map((choice) => {
            const isSelected = record?.selectedAnswer === choice;
            const isCorrectChoice = choice === question.correctAnswer;
            const showFeedback = hasAnswered && (isSelected || isCorrectChoice);
            const isWrongSelection = showFeedback && isSelected && !isCorrectChoice;

            return (
              <motion.button
                key={choice}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={hasAnswered}
                onClick={() => onSelect(choice)}
                whileTap={{ scale: hasAnswered ? 1 : 0.98 }}
                animate={
                  isWrongSelection
                    ? { x: [0, -6, 5, -3, 2, 0] }
                    : showFeedback && isCorrectChoice
                    ? { scale: [1, 1.02, 1] }
                    : { x: 0, scale: 1 }
                }
                transition={
                  isWrongSelection
                    ? { duration: 0.4, ease: "easeInOut" }
                    : { duration: 0.3, ease: "easeOut" }
                }
                className={cn(
                  "flex items-center justify-between gap-3 rounded-[var(--radius-md)] border px-5 py-4 text-left text-sm font-medium transition-colors sm:text-base",
                  !hasAnswered &&
                    "border-line-strong bg-surface/70 text-ink hover:border-teal-500 hover:bg-teal-100/40 hover:-translate-y-0.5",
                  hasAnswered &&
                    !showFeedback &&
                    "border-line bg-paper-dim/60 text-ink-faint",
                  showFeedback &&
                    isCorrectChoice &&
                    "border-success-600 bg-success-100 text-success-600",
                  isWrongSelection && "border-danger-600 bg-danger-100 text-danger-600"
                )}
                style={{ transitionProperty: "background-color, border-color, color, transform" }}
              >
                <span>{choice}</span>
                {showFeedback && isCorrectChoice && (
                  <Check className="h-5 w-5 shrink-0 animate-pop-in" />
                )}
                {isWrongSelection && <X className="h-5 w-5 shrink-0 animate-pop-in" />}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-5 rounded-[var(--radius-md)] bg-paper-dim/70 p-4 text-sm leading-relaxed text-ink-soft">
                {record?.isCorrect ? (
                  <p>
                    <span className="font-medium text-success-600">Correct.</span> That matches
                    the accepted USCIS answer.
                  </p>
                ) : (
                  <p>
                    <span className="font-medium text-danger-600">Not quite.</span> The accepted
                    answer is <span className="font-medium text-ink">{question.correctAnswer}</span>.
                  </p>
                )}
                {question.officialNote && (
                  <p className="mt-2 text-xs text-ink-faint">{question.officialNote}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
