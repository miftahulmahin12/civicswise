"use client";

import { useMemo, useState, useCallback } from "react";
import { toMultipleChoice, type MultipleChoiceQuestion } from "@/data/distractors";
import type { CivicsQuestion, PracticeAnswerRecord } from "@/types/question";

export type SessionStatus = "in-progress" | "completed";

export interface UsePracticeSessionOptions {
  questions: CivicsQuestion[];
  passThreshold: number;
}

export function usePracticeSession({ questions, passThreshold }: UsePracticeSessionOptions) {
  const mcQuestions = useMemo<MultipleChoiceQuestion[]>(
    () => questions.map((q, i) => toMultipleChoice(q, i + 3)),
    [questions]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [records, setRecords] = useState<Record<string, PracticeAnswerRecord>>({});
  const [status, setStatus] = useState<SessionStatus>("in-progress");

  const currentQuestion = mcQuestions[currentIndex];
  const currentRecord = currentQuestion ? records[currentQuestion.id] : undefined;

  const selectAnswer = useCallback(
    (answer: string) => {
      if (!currentQuestion) return;
      setRecords((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedAnswer: answer,
          isCorrect: answer === currentQuestion.correctAnswer,
        },
      }));
    },
    [currentQuestion]
  );

  const goNext = useCallback(() => {
    if (currentIndex < mcQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setStatus("completed");
    }
  }, [currentIndex, mcQuestions.length]);

  const goPrevious = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const jumpTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < mcQuestions.length) setCurrentIndex(index);
    },
    [mcQuestions.length]
  );

  const restart = useCallback(() => {
    setCurrentIndex(0);
    setRecords({});
    setStatus("in-progress");
  }, []);

  const answeredCount = Object.keys(records).length;
  const correctCount = Object.values(records).filter((r) => r.isCorrect).length;
  const passed = correctCount >= passThreshold;
  const progressPercent = ((currentIndex + (currentRecord ? 1 : 0)) / mcQuestions.length) * 100;

  return {
    questions: mcQuestions,
    currentIndex,
    currentQuestion,
    currentRecord,
    records,
    status,
    answeredCount,
    correctCount,
    passed,
    progressPercent: Math.min(progressPercent, 100),
    selectAnswer,
    goNext,
    goPrevious,
    jumpTo,
    restart,
    setStatus,
  };
}
