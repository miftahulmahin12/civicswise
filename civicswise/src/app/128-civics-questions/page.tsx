import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/marketing/page-hero";
import { QuestionBankBrowser } from "@/components/categories/question-bank-browser";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "128 civics questions",
  description:
    "Search and filter the full U.S. civics test question bank, with dynamic-answer and 65/20 indicators.",
};

export default function QuestionBankPage() {
  return (
    <>
      <PageHero
        eyebrow="Question bank"
        title="128 civics questions"
        description="Every question is organized by category, with clear indicators for dynamic answers and the 65/20 special consideration list."
        primaryHref="/practice/free"
        primaryLabel="Practice a random set"
      />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <QuestionBankBrowser />
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/study-guide">
              Not sure where to start? Read the study guide
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
