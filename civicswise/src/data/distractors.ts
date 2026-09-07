import type { CategorySlug, CivicsQuestion } from "@/types/question";

/**
 * The real USCIS civics test is administered as a spoken, free-response
 * interview. CivicsWise presents practice questions as multiple choice so
 * learners can self-check quickly — these pools supply plausible wrong
 * answers for that practice format only.
 */
const distractorPools: Record<CategorySlug, string[]> = {
  "principles-of-democracy": [
    "The Bill of Rights",
    "The Declaration of Independence",
    "The Articles of Confederation",
    "The Federalist Papers",
    "The Mayflower Compact",
    "The Gettysburg Address",
  ],
  "system-of-government": [
    "The Supreme Court",
    "The Senate",
    "The House of Representatives",
    "The Cabinet",
    "The Electoral College",
    "The Department of State",
    "Three (3)",
    "Two (2)",
    "Eight (8)",
    "Fifty (50)",
  ],
  "american-government": [
    "Only property owners can vote",
    "Only men over 21 can vote",
    "Voting is limited to one state",
    "Only military veterans can vote",
  ],
  "rights-and-responsibilities": [
    "Pay federal taxes",
    "Attend public school",
    "Own a passport",
    "Join a union",
    "Register a business",
  ],
  "american-history-colonial": [
    "To join an existing government",
    "To expand British trade routes",
    "To explore uncharted land for its own sake",
    "To establish new European colonies for Spain",
  ],
  "founding-fathers": [
    "John Adams",
    "Alexander Hamilton",
    "James Madison",
    "Patrick Henry",
    "Benjamin Franklin",
    "Thomas Jefferson",
    "George Washington",
    "1776",
    "1789",
    "1791",
  ],
  "the-1800s": [
    "The Revolutionary War",
    "World War I",
    "The Spanish-American War",
    "The Louisiana Purchase",
    "The Great Depression",
  ],
  "recent-american-history": [
    "The Cold War",
    "World War I",
    "The Vietnam War",
    "The Korean War",
    "Woodrow Wilson",
    "Theodore Roosevelt",
    "Harry Truman",
  ],
  geography: [
    "Atlantic (Ocean)",
    "Pacific (Ocean)",
    "Gulf of Mexico",
    "Missouri (River)",
    "Mississippi (River)",
    "Rio Grande",
    "New York City",
    "Philadelphia",
  ],
  symbols: [
    "One for each original colony",
    "One for each President",
    "America the Beautiful",
    "God Bless America",
  ],
  holidays: [
    "Flag Day",
    "Tax Day",
    "Election Day",
    "Groundhog Day",
    "Boxing Day",
  ],
};

export interface MultipleChoiceQuestion extends CivicsQuestion {
  correctAnswer: string;
  choices: string[];
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function toMultipleChoice(question: CivicsQuestion, seed = 1): MultipleChoiceQuestion {
  const correctAnswer = question.answers[0];
  const pool = distractorPools[question.category] ?? [];
  const otherRealAnswers = question.answers.slice(1);
  const candidates = [...otherRealAnswers, ...pool].filter(
    (a) => a.toLowerCase() !== correctAnswer.toLowerCase()
  );
  const uniqueCandidates = Array.from(new Set(candidates));
  const distractors = seededShuffle(uniqueCandidates, seed + question.number).slice(0, 3);
  const choices = seededShuffle([correctAnswer, ...distractors], seed + question.number * 7);

  return { ...question, correctAnswer, choices };
}
