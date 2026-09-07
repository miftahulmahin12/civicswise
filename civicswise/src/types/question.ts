export type TestVersion = "2025" | "2008";

export type CategorySlug =
  | "american-government"
  | "system-of-government"
  | "principles-of-democracy"
  | "rights-and-responsibilities"
  | "american-history-colonial"
  | "founding-fathers"
  | "the-1800s"
  | "recent-american-history"
  | "geography"
  | "symbols"
  | "holidays";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  section: "Government" | "History" | "Civics & Integrated";
  questionCount: number;
}

export interface CivicsQuestion {
  id: string;
  number: number;
  version: TestVersion[];
  category: CategorySlug;
  question: string;
  answers: string[];
  isDynamic: boolean;
  isSixtyFiveTwenty: boolean;
  officialNote?: string;
  hint?: string;
}

export interface PracticeAnswerRecord {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
}

export interface PracticeResult {
  totalQuestions: number;
  correctCount: number;
  passed: boolean;
  passThreshold: number;
  records: PracticeAnswerRecord[];
  completedAt: string;
}
