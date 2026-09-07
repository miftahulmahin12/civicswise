"use client";

import { cn } from "@/lib/utils";
import type { PracticeAnswerRecord } from "@/types/question";

export function QuestionNavigator({
  total,
  currentIndex,
  records,
  questionIds,
  onJump,
}: {
  total: number;
  currentIndex: number;
  records: Record<string, PracticeAnswerRecord>;
  questionIds: string[];
  onJump: (index: number) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Jump to a specific question"
    >
      {Array.from({ length: total }).map((_, index) => {
        const id = questionIds[index];
        const record = records[id];
        const isCurrent = index === currentIndex;

        return (
          <button
            key={id}
            type="button"
            onClick={() => onJump(index)}
            aria-current={isCurrent ? "step" : undefined}
            aria-label={`Question ${index + 1}${record ? (record.isCorrect ? ", answered correctly" : ", answered incorrectly") : ", not answered"}`}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-medium transition-colors",
              isCurrent && "border-teal-600 ring-2 ring-teal-100",
              !record && "border-line-strong bg-surface text-ink-faint",
              record?.isCorrect && "border-success-600 bg-success-100 text-success-600",
              record && !record.isCorrect && "border-danger-600 bg-danger-100 text-danger-600"
            )}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
