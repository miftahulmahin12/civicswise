export const mockUser = {
  name: "Amara Osei",
  interviewDate: "November 18, 2026",
  streakDays: 6,
};

export const mockOverview = {
  questionsAnswered: 214,
  accuracy: 81,
  testsCompleted: 11,
  lastScore: { correct: 15, total: 20 },
};

export const mockCategoryPerformance = [
  { category: "System of Government", accuracy: 92, questions: 38 },
  { category: "Principles of Democracy", accuracy: 88, questions: 24 },
  { category: "Rights & Responsibilities", accuracy: 84, questions: 20 },
  { category: "Founding Fathers", accuracy: 76, questions: 18 },
  { category: "The 1800s", accuracy: 68, questions: 16 },
  { category: "Recent American History", accuracy: 61, questions: 14 },
  { category: "Geography", accuracy: 74, questions: 12 },
];

export const mockWeakQuestions = [
  { question: "Who is the Chief Justice of the United States now?", missCount: 4 },
  { question: "Name one U.S. territory.", missCount: 3 },
  { question: "What did the Emancipation Proclamation do?", missCount: 3 },
  { question: "Who was President during the Great Depression and World War II?", missCount: 2 },
];

export const mockRecentResults = [
  { date: "Sep 4", score: "15/20", passed: true },
  { date: "Sep 2", score: "13/20", passed: true },
  { date: "Aug 30", score: "11/20", passed: false },
  { date: "Aug 28", score: "14/20", passed: true },
];

export const mockRecommendedActions = [
  {
    title: "Review Recent American History",
    body: "Your lowest-accuracy category — 8 questions to revisit.",
    href: "/categories/recent-american-history",
  },
  {
    title: "Take a full 20-question test",
    body: "It's been 2 days since your last complete practice test.",
    href: "/practice/free",
  },
  {
    title: "Check your dynamic answers",
    body: "Your interview is in 11 weeks — worth a refresh closer to the date.",
    href: "/128-civics-questions",
  },
];
