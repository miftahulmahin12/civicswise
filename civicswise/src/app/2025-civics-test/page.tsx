import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, RefreshCcw, ShieldCheck, Timer } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { StatPills } from "@/components/marketing/stat-pills";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Button } from "@/components/ui/button";
import { getSixtyFiveTwentyQuestions, questions } from "@/data/questions";

export const metadata: Metadata = {
  title: "The 2025 civics test, explained",
  description:
    "How the current U.S. naturalization civics test works: 128 questions, up to 20 asked, 12 correct needed to pass.",
};

export default function CivicsTest2025Page() {
  const dynamicCount = questions.filter((q) => q.version.includes("2025") && q.isDynamic).length;
  const sixtyFiveTwentyCount = getSixtyFiveTwentyQuestions().length;

  return (
    <>
      <PageHero
        eyebrow="Current test"
        title="The 2025 civics test"
        description="This is the version most applicants take today. It's built from a bank of 128 questions, and the officer asks up to 20 of them during your interview."
        primaryHref="/practice/free"
        primaryLabel="Practice the 2025 test"
        secondaryHref="/128-civics-questions"
        secondaryLabel="Browse the question bank"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <StatPills
          items={[
            { label: "Total question bank", value: "128 questions" },
            { label: "Asked at interview", value: "Up to 20" },
            { label: "Needed to pass", value: "12 correct" },
            { label: "Dynamic answers", value: `${dynamicCount}+ questions` },
          ]}
        />
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            title="How the interview actually goes"
            description="The civics test is one part of your naturalization interview, and it happens the same way for almost every applicant taking the 2025 version."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <ScrollReveal y={16}>
              <div className="paper-card flex h-full flex-col gap-3 rounded-[var(--radius-lg)] p-6">
                <Timer className="h-5 w-5 text-teal-700" />
                <h3 className="font-display text-lg font-medium text-ink">It's spoken, not written</h3>
                <p className="text-sm leading-relaxed text-ink-faint">
                  A USCIS officer asks questions aloud during your interview and you answer
                  verbally — there's no written exam or multiple choice in the real test.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal y={16}>
              <div className="paper-card flex h-full flex-col gap-3 rounded-[var(--radius-lg)] p-6">
                <ShieldCheck className="h-5 w-5 text-teal-700" />
                <h3 className="font-display text-lg font-medium text-ink">Stops once you pass</h3>
                <p className="text-sm leading-relaxed text-ink-faint">
                  Officers generally stop asking once you've clearly reached 12 correct answers
                  out of the 20 you could be asked.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal y={16}>
              <div className="paper-card flex h-full flex-col gap-3 rounded-[var(--radius-lg)] p-6">
                <RefreshCcw className="h-5 w-5 text-teal-700" />
                <h3 className="font-display text-lg font-medium text-ink">Some answers change</h3>
                <p className="text-sm leading-relaxed text-ink-faint">
                  Questions about current officials update over time. CivicsWise flags these as
                  dynamic so you know to double check them closer to your interview.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="paper-card rounded-[var(--radius-lg)] p-7">
            <h3 className="font-display text-xl font-medium text-ink">
              65/20 special consideration
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-faint">
              If you're 65 or older and have held permanent resident status for at least 20
              years, you only need to study {sixtyFiveTwentyCount} marked questions from the
              general bank instead of the full 128.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/65-20-test">
                See the 65/20 test
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="paper-card rounded-[var(--radius-lg)] p-7">
            <h3 className="font-display text-xl font-medium text-ink">Official USCIS source</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-faint">
              Every question and accepted answer on CivicsWise is based on USCIS's official
              civics test materials. Always confirm details for your specific case with USCIS.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <a href="https://www.uscis.gov/citizenship" target="_blank" rel="noreferrer">
                Visit uscis.gov
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
