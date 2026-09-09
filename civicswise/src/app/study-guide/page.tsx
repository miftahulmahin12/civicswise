import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, ListChecks, RefreshCcw, Target } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Study guide",
  description:
    "A complete, practical study plan for the U.S. civics test: understanding the test, studying effectively, and reviewing mistakes.",
};

const timeline = [
  {
    week: "3–4 weeks out",
    title: "Learn the shape of the test",
    body: "Read through the 2025 or 2008 test page for your version, and skim the full question bank once so nothing feels unfamiliar.",
  },
  {
    week: "2–3 weeks out",
    title: "Practice in short daily sessions",
    body: "Take a free practice test every day or two. Ten focused minutes beats one long cram session — the goal is repetition, not speed.",
  },
  {
    week: "1–2 weeks out",
    title: "Target your weak categories",
    body: "Use your dashboard's category breakdown to find where you're missing questions, then study that category page specifically.",
  },
  {
    week: "Final days",
    title: "Refresh dynamic answers",
    body: "Recheck questions about current officials right before your interview, since those answers can change closer to your date.",
  },
];

export default function StudyGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Study guide"
        title="A study plan that actually fits how people prepare"
        description="You don't need to memorize 128 questions in one sitting. Here's a realistic path from first practice test to interview day."
        primaryHref="/practice/free"
        primaryLabel="Take your first practice test"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="How the test works, in short"
          description="Before you study content, it helps to understand the shape of what you're preparing for."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="paper-card flex gap-4 rounded-[var(--radius-lg)] p-6">
            <BookOpen className="h-5 w-5 shrink-0 text-teal-700" />
            <div>
              <h3 className="font-display text-base font-medium text-ink">Two test versions</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-faint">
                The 2025 test uses a 128-question bank and asks up to 20 questions. The 2008 test
                uses a 100-question bank and asks up to 10. Confirm which one applies to you.
              </p>
            </div>
          </div>
          <div className="paper-card flex gap-4 rounded-[var(--radius-lg)] p-6">
            <RefreshCcw className="h-5 w-5 shrink-0 text-teal-700" />
            <div>
              <h3 className="font-display text-base font-medium text-ink">Some answers change</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-faint">
                Questions about the President, your governor, or your senators have answers that
                update over time. CivicsWise marks these clearly wherever they appear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            title="A four-step timeline"
            description="Adjust the pacing to however much time you actually have before your interview."
          />
          <div className="relative mt-10 flex flex-col gap-8 border-l border-line pl-8">
            {timeline.map((step) => (
              <div key={step.title} className="relative">
                  <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal-600 bg-paper-dim" />
                  <Badge variant="teal" className="mb-2 w-fit">
                    {step.week}
                  </Badge>
                  <h3 className="font-display text-lg font-medium text-ink">{step.title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-faint">
                    {step.body}
                  </p>
                </div>
                          ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="How to review a mistake"
          description="Missing a question in practice is more useful than getting it right — here's how to make it count."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="paper-card flex flex-col gap-3 rounded-[var(--radius-lg)] p-6">
            <Target className="h-5 w-5 text-teal-700" />
            <h3 className="font-display text-base font-medium text-ink">Read the full answer</h3>
            <p className="text-sm leading-relaxed text-ink-faint">
              Every result screen shows the accepted answer next to your choice — read both, not
              just whether you were right.
            </p>
          </div>
          <div className="paper-card flex flex-col gap-3 rounded-[var(--radius-lg)] p-6">
            <ListChecks className="h-5 w-5 text-teal-700" />
            <h3 className="font-display text-base font-medium text-ink">Revisit the category</h3>
            <p className="text-sm leading-relaxed text-ink-faint">
              Open that question's category page to see related questions and reinforce the
              surrounding context, not just the one fact.
            </p>
          </div>
          <div className="paper-card flex flex-col gap-3 rounded-[var(--radius-lg)] p-6">
            <Calendar className="h-5 w-5 text-teal-700" />
            <h3 className="font-display text-base font-medium text-ink">Come back tomorrow</h3>
            <p className="text-sm leading-relaxed text-ink-faint">
              Spaced repetition works. Missed questions tend to stick after a second and third
              pass on a different day, not the same session.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="primary" size="lg">
            <Link href="/practice/free">
              Put this plan into practice
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
