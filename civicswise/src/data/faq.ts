export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  topic: "Test format" | "Studying" | "Eligibility" | "Using CivicsWise";
}

export const faqItems: FaqItem[] = [
  {
    id: "how-many-questions",
    topic: "Test format",
    question: "How many questions are on the U.S. citizenship civics test?",
    answer:
      "It depends on the version you're given. The 2025 civics test draws from a bank of 128 questions, and the officer asks up to 20 of them. The 2008 test draws from 100 questions, and the officer asks up to 10.",
  },
  {
    id: "how-many-correct",
    topic: "Test format",
    question: "How many answers do I need to get right to pass?",
    answer:
      "On the 2025 test you need 12 correct answers out of the 20 you're asked. On the 2008 test you need 6 correct out of 10. Officers generally stop asking once you've clearly reached the passing number.",
  },
  {
    id: "what-is-2025-test",
    topic: "Test format",
    question: "What is the 2025 civics test?",
    answer:
      "It's the current version of the naturalization civics test, built from a bank of 128 questions covering American government, history, and civics. Applicants are asked up to 20 questions and need 12 correct to pass.",
  },
  {
    id: "what-is-65-20",
    topic: "Eligibility",
    question: "What is the 65/20 test?",
    answer:
      "It's a special consideration for applicants who are 65 or older and have held permanent resident status for at least 20 years. They only need to study a shorter list of 20 marked questions from the general question bank.",
  },
  {
    id: "which-version",
    topic: "Eligibility",
    question: "Which version of the test will I take?",
    answer:
      "It depends on when you file Form N-400 and how USCIS is administering the test at the time of your interview. Your appointment notice and USCIS's official guidance will confirm which version applies to you — CivicsWise links directly to that guidance from every test page.",
  },
  {
    id: "is-it-oral",
    topic: "Test format",
    question: "Is the civics test oral or written?",
    answer:
      "The civics test is oral. A USCIS officer asks you questions in person during your naturalization interview and you answer verbally. CivicsWise's practice mode uses multiple choice so you can self-check quickly, but it's worth also practicing saying answers out loud.",
  },
  {
    id: "128-vs-100",
    topic: "Test format",
    question: "What's the difference between the 128 and 100 question versions?",
    answer:
      "They're two different question banks tied to two different test versions. The 100-question bank belongs to the 2008 test, and the 128-question bank belongs to the current 2025 test. Some questions are shared, some are reworded, and some are new.",
  },
  {
    id: "answers-change",
    topic: "Studying",
    question: "Can the answers to some questions change?",
    answer:
      "Yes. Questions about current officials — like the President, your governor, or your U.S. senators — have answers that change over time. CivicsWise marks these as dynamic and points you to the official source so you always study the current answer.",
  },
  {
    id: "how-to-study",
    topic: "Studying",
    question: "What's the best way to study for the civics test?",
    answer:
      "Most learners do well by practicing in short, frequent sessions, focusing extra time on categories where they're missing questions, and reviewing dynamic answers close to their interview date. The CivicsWise study guide walks through a complete plan.",
  },
  {
    id: "free-vs-premium",
    topic: "Using CivicsWise",
    question: "What's the difference between Free and Premium on CivicsWise?",
    answer:
      "Free gives you full access to practice tests and the question bank. Premium adds unlimited timed mock interviews, deeper category analytics, spaced-repetition review of your weak questions, and downloadable study materials.",
  },
  {
    id: "official-source",
    topic: "Using CivicsWise",
    question: "Where does CivicsWise get its questions from?",
    answer:
      "Every question is based on USCIS's official civics test materials. CivicsWise is an independent study tool, not USCIS, and we link back to uscis.gov throughout the site so you can always verify against the primary source.",
  },
  {
    id: "mobile-practice",
    topic: "Using CivicsWise",
    question: "Can I practice on my phone?",
    answer:
      "Yes. The practice experience is built mobile-first, so you can run through questions on a phone or tablet exactly the same way you would on a desktop, including offline-friendly local progress while you're mid-session.",
  },
];
