import type { Category } from "@/types/question";

export const categories: Category[] = [
  {
    slug: "american-government",
    name: "American Government",
    shortName: "Government",
    description:
      "The structure and purpose of the federal government, from the Constitution to the three branches.",
    section: "Government",
    questionCount: 57,
  },
  {
    slug: "system-of-government",
    name: "System of Government",
    shortName: "System",
    description: "How power is organized and checked across federal, state, and local government.",
    section: "Government",
    questionCount: 21,
  },
  {
    slug: "principles-of-democracy",
    name: "Principles of American Democracy",
    shortName: "Principles",
    description: "The core ideas the United States government is built on, including the Constitution itself.",
    section: "Government",
    questionCount: 12,
  },
  {
    slug: "rights-and-responsibilities",
    name: "Rights and Responsibilities",
    shortName: "Rights",
    description: "What citizens are entitled to, and what citizenship asks of them in return.",
    section: "Government",
    questionCount: 10,
  },
  {
    slug: "american-history-colonial",
    name: "Colonial Period and Independence",
    shortName: "Colonial Era",
    description: "Life before the Revolution and the events that led to American independence.",
    section: "History",
    questionCount: 13,
  },
  {
    slug: "founding-fathers",
    name: "Founding Fathers",
    shortName: "Founders",
    description: "The people who wrote the founding documents and led the early republic.",
    section: "History",
    questionCount: 8,
  },
  {
    slug: "the-1800s",
    name: "The 1800s",
    shortName: "1800s",
    description: "Westward expansion, the Civil War, and the country's growing pains.",
    section: "History",
    questionCount: 8,
  },
  {
    slug: "recent-american-history",
    name: "Recent American History",
    shortName: "Modern History",
    description: "The 20th century onward, including world wars and the civil rights movement.",
    section: "History",
    questionCount: 9,
  },
  {
    slug: "geography",
    name: "Geography",
    shortName: "Geography",
    description: "Borders, rivers, states, and the physical shape of the country.",
    section: "Civics & Integrated",
    questionCount: 8,
  },
  {
    slug: "symbols",
    name: "Symbols",
    shortName: "Symbols",
    description: "The flag, the anthem, and the imagery that represents the nation.",
    section: "Civics & Integrated",
    questionCount: 3,
  },
  {
    slug: "holidays",
    name: "Holidays",
    shortName: "Holidays",
    description: "The federal holidays that mark the American calendar.",
    section: "Civics & Integrated",
    questionCount: 2,
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
