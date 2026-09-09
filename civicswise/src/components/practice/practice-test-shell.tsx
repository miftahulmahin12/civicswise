"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PracticeProgressHeader } from "./progress-header";
import { QuestionCard } from "./question-card";
import { QuestionNavigator } from "./question-navigator";
import { ResultsScreen } from "./results-screen";
import { usePracticeSession } from "@/hooks/use-practice-session";
import { drawPracticeSet } from "@/data/questions";
import type { TestVersion } from "@/types/question";

export function PracticeTestShell({
  questionCount,
  passThreshold,
  version,
  title,
}: {
  questionCount: number;
  passThreshold: number;
  version: TestVersion;
  title: string;
}) {
  const [questionSet, setQuestionSet] = useState(() => drawPracticeSet(questionCount, version));

  const session = usePracticeSession({
    questions: questionSet,
    passThreshold,
  });

  if (session.status === "completed") {
    return (
      <ResultsScreen
        questions={session.questions}
        records={session.records}
        passThreshold={passThreshold}
        onRestart={() => {
          setQuestionSet(drawPracticeSet(questionCount, version));
          session.restart();
        }}
      />
    );
  }

  if (!session.currentQuestion) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-medium text-ink">{title}</h1>
        <p className="text-sm text-ink-faint">
          Answer each question, then move on. Your progress is local to this session.
        </p>
      </div>

      <PracticeProgressHeader
        current={session.currentIndex + 1}
        total={session.questions.length}
        correctSoFar={session.correctCount}
      />

      <QuestionCard
        question={session.currentQuestion}
        record={session.currentRecord}
        onSelect={session.selectAnswer}
      />

      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={session.goPrevious}
          disabled={session.currentIndex === 0}
        >
          <ChevronLeft />
          Previous
        </Button>
        <Button variant="primary" onClick={session.goNext} disabled={!session.currentRecord}>
          {session.currentIndex === session.questions.length - 1 ? "See results" : "Next question"}
          <ChevronRight />
        </Button>
      </div>

      <div className="border-t border-line pt-5">
        <p className="mb-3 text-xs font-medium text-ink-faint">
          Jump to a question
        </p>
        <QuestionNavigator
          total={session.questions.length}
          currentIndex={session.currentIndex}
          records={session.records}
          questionIds={session.questions.map((q) => q.id)}
          onJump={session.jumpTo}
        />
      </div>
    </div>
  );
}
