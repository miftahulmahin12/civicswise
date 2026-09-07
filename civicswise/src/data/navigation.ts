export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const practiceLinks: NavLink[] = [
  { label: "Free practice test", href: "/practice/free", description: "20 questions, instant results" },
  { label: "128 question bank", href: "/128-civics-questions", description: "Browse and search every question" },
  { label: "65/20 practice", href: "/65-20-test", description: "For applicants 65+ with 20 years residency" },
];

export const learnLinks: NavLink[] = [
  { label: "2025 civics test", href: "/2025-civics-test", description: "The current test, explained" },
  { label: "2008 civics test", href: "/2008-civics-test", description: "The earlier 100-question version" },
  { label: "Study guide", href: "/study-guide", description: "A complete plan to get ready" },
  { label: "FAQ", href: "/faq", description: "Answers to common questions" },
];

export const primaryNav: NavLink[] = [
  { label: "Practice", href: "/practice/free" },
  { label: "Question bank", href: "/128-civics-questions" },
  { label: "Study guide", href: "/study-guide" },
  { label: "Premium", href: "/premium" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Practice",
    links: [
      { label: "Free practice test", href: "/practice/free" },
      { label: "128 question bank", href: "/128-civics-questions" },
      { label: "65/20 practice", href: "/65-20-test" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "2025 civics test", href: "/2025-civics-test" },
      { label: "2008 civics test", href: "/2008-civics-test" },
      { label: "Study guide", href: "/study-guide" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "American Government", href: "/categories/american-government" },
      { label: "American History", href: "/categories/founding-fathers" },
      { label: "Geography", href: "/categories/geography" },
      { label: "Symbols & Holidays", href: "/categories/symbols" },
    ],
  },
  {
    title: "CivicsWise",
    links: [
      { label: "Premium", href: "/premium" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
];
