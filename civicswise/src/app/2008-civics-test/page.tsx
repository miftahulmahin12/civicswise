import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { StatPills } from "@/components/marketing/stat-pills";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "The 2008 civics test, explained",
  description:
    "How the earlier 100-question U.S. naturalization civics test works, and how it differs from the 2025 version.",
};

export default function CivicsTest2008Page() {
  return (
    <>
      <PageHero
        eyebrow="Earlier version"
        title="The 2008 civics test"
        description="Some applicants, depending on filing date and USCIS policy at interview time, are tested on this earlier 100-question version instead of the 2025 test."
        primaryHref="/practice/free"
        primaryLabel="Practice with sample questions"
        secondaryHref="/2025-civics-test"
        secondaryLabel="Compare to the 2025 test"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <StatPills
          items={[
            { label: "Total question bank", value: "100 questions" },
            { label: "Asked at interview", value: "Up to 10" },
            { label: "Needed to pass", value: "6 correct" },
            { label: "Format", value: "Spoken interview" },
          ]}
        />
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            title="How the 2008 test differs from 2025"
            description="The core idea is the same — an officer asks civics questions out loud — but the numbers and some question wording are different."
          />
          <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface shadow-[var(--shadow-soft)]">
            <div className="grid grid-cols-3 gap-4 border-b border-line px-6 py-4 text-sm font-medium text-ink-faint sm:px-8">
              <span>Detail</span>
              <span>2008 test</span>
              <span>2025 test</span>
            </div>
            {[
              ["Question bank size", "100 questions", "128 questions"],
              ["Questions asked", "Up to 10", "Up to 20"],
              ["Correct answers needed", "6", "12"],
              ["Format", "Oral interview", "Oral interview"],
            ].map(([label, a, b]) => (
              <div
                key={label}
                className="grid grid-cols-3 gap-4 border-b border-line px-6 py-4 text-sm text-ink last:border-b-0 sm:px-8"
              >
                <span className="text-ink-soft">{label}</span>
                <span>{a}</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="paper-card flex flex-col gap-3 rounded-[var(--radius-lg)] p-7">
            <Badge variant="outline" className="w-fit">
              Good to know
            </Badge>
            <h3 className="font-display text-xl font-medium text-ink">
              Which version applies to you isn't something to guess at
            </h3>
            <p className="text-sm leading-relaxed text-ink-faint">
              Your USCIS appointment notice and interview guidance will confirm which test
              version you'll take. If you're unsure, check the official USCIS citizenship
              resources or ask at your interview.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
