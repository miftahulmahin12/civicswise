import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSixtyFiveTwentyQuestions } from "@/data/questions";

export const metadata: Metadata = {
  title: "The 65/20 test",
  description:
    "How the 65/20 special consideration works for applicants 65 or older with 20+ years of permanent residency.",
};

export default function SixtyFiveTwentyPage() {
  const list = getSixtyFiveTwentyQuestions();

  return (
    <>
      <PageHero
        eyebrow="Special consideration"
        title="The 65/20 test"
        description="If you're 65 or older and have held permanent resident status for at least 20 years, you can study a shorter, marked list of questions instead of the full bank."
        primaryHref="/practice/free"
        primaryLabel="Practice the 65/20 list"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="paper-card rounded-[var(--radius-lg)] p-7">
            <h3 className="font-display text-lg font-medium text-ink">Who qualifies</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-ink-faint">
              <li>• You're 65 years of age or older at the time you file Form N-400</li>
              <li>• You've held lawful permanent resident status for at least 20 years</li>
              <li>• You've met the standard continuous residence requirements</li>
            </ul>
          </div>
          <div className="paper-card rounded-[var(--radius-lg)] p-7">
            <h3 className="font-display text-lg font-medium text-ink">What changes</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-faint">
              You still take a spoken civics test, but you only need to prepare the {list.length}{" "}
              questions marked with the 65/20 badge, rather than the entire question bank.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            title="The 65/20 question list"
            description="Every question below is also part of the general 128-question bank — they're simply the subset you're responsible for."
          />
          <div className="mt-8 flex flex-col gap-3">
            {list.map((q) => (
              <div
                key={q.id}
                className="flex items-start justify-between gap-4 rounded-[var(--radius-md)] border border-line bg-surface px-5 py-4 shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-medium text-ink">{q.question}</p>
                <Badge variant="brass" className="shrink-0">
                  65/20
                </Badge>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="primary">
              <Link href="/practice/free">
                Start practicing this list
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
