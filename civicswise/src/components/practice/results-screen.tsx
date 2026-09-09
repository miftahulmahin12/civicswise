"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/categories";
import type { MultipleChoiceQuestion } from "@/data/distractors";
import type { PracticeAnswerRecord } from "@/types/question";

export function ResultsScreen({
  questions,
  records,
  passThreshold,
  onRestart,
}: {
  questions: MultipleChoiceQuestion[];
  records: Record<string, PracticeAnswerRecord>;
  passThreshold: number;
  onRestart: () => void;
}) {
  const correctCount = Object.values(records).filter((r) => r.isCorrect).length;
  const total = questions.length;
  const passed = correctCount >= passThreshold;
  const accuracy = Math.round((correctCount / total) * 100);

  const categoryBreakdown = new Map<string, { correct: number; total: number }>();
  for (const q of questions) {
    const entry = categoryBreakdown.get(q.category) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (records[q.id]?.isCorrect) entry.correct += 1;
    categoryBreakdown.set(q.category, entry);
  }

  const missed = questions.filter((q) => records[q.id] && !records[q.id].isCorrect);

  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="paper-card flex flex-col items-center gap-4 rounded-[var(--radius-xl)] p-8 text-center sm:p-12"
      >
        <span
          className={
            passed
              ? "flex h-16 w-16 items-center justify-center rounded-full bg-success-100 text-success-600"
              : "flex h-16 w-16 items-center justify-center rounded-full bg-warning-100 text-warning-600"
          }
        >
          <Trophy className="h-8 w-8" />
        </span>
        <Badge variant={passed ? "success" : "warning"}>
          {passed ? "Passing score" : "Not yet passing"}
        </Badge>
        <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          {correctCount} of {total} correct
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-ink-faint">
          {passed
            ? `That's ${accuracy}% accuracy — at or above the ${passThreshold}-correct passing bar for this practice set.`
            : `You need ${passThreshold} correct to reach a passing score on this set. Review what you missed below, then try again.`}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" onClick={onRestart}>
            <RotateCcw />
            Try another set
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">
              View my dashboard
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="paper-card rounded-[var(--radius-lg)] p-6">
          <h2 className="font-display text-lg font-medium text-ink">Accuracy by category</h2>
          <div className="mt-4 flex flex-col gap-3">
            {Array.from(categoryBreakdown.entries()).map(([slug, data]) => {
              const category = categories.find((c) => c.slug === slug);
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={slug} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-soft">{category?.shortName ?? slug}</span>
                    <span className="text-ink-faint">
                      {data.correct}/{data.total}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-dim">
                    <div
                      className="h-full rounded-full bg-teal-600"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="paper-card rounded-[var(--radius-lg)] p-6">
          <h2 className="font-display text-lg font-medium text-ink">Questions to review</h2>
          {missed.length === 0 ? (
            <p className="mt-4 text-sm text-ink-faint">
              You didn't miss anything in this set. Nice work.
            </p>
          ) : (
            <ul className="mt-4 flex flex-col gap-4">
              {missed.map((q) => (
                <li key={q.id} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <p className="text-sm font-medium text-ink">{q.question}</p>
                  <p className="mt-1 text-xs text-ink-faint">
                    Correct answer: <span className="text-ink-soft">{q.correctAnswer}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
