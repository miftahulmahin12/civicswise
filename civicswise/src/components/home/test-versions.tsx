import Link from "next/link";

import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const versions = [
  {
    href: "/2025-civics-test",
    tag: "Current",
    title: "2025 civics test",
    stats: "Draws from 128 questions; the officer asks up to 20 and 12 correct passes",
    body: "The test most applicants take today. Draws from the full 128-question bank, and answers to certain questions change as officeholders change.",
    span: "lg:col-span-2",
    featured: true,
  },
  {
    href: "/2008-civics-test",
    tag: "Earlier version",
    title: "2008 civics test",
    stats: "Draws from 100 questions; the officer asks up to 10 and 6 correct passes",
    body: "Still relevant for some applicants depending on filing date and USCIS policy at the time of the interview.",
    span: "",
  },
  {
    href: "/65-20-test",
    tag: "Special consideration",
    title: "65/20 test",
    stats: "Only 20 marked questions to study, nothing else",
    body: "For applicants 65 or older who have held permanent residency for at least 20 years — a shorter, focused list.",
    span: "",
  },
  {
    href: "/128-civics-questions",
    tag: "Reference",
    title: "Full question bank",
    stats: "Search, filter, and study by category",
    body: "Every question in one browsable place, with dynamic-answer and 65/20 indicators built in.",
    span: "lg:col-span-2",
    featured: false,
  },
];

export function TestVersions() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="Know exactly which test you're studying for"
          description="Not every applicant takes the same version. CivicsWise lays out each one clearly so you can focus your time correctly."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {versions.map((version) => (
            <Link
              key={version.href}
              href={version.href}
              className={cn(
                version.span,
                version.featured
                  ? "group relative glass-surface interactive-lift flex h-full flex-col justify-between gap-6 rounded-[var(--radius-lg)] p-7"
                  : "group flex h-full flex-col justify-between gap-6 rounded-[var(--radius-lg)] border border-line bg-surface p-7 shadow-[var(--shadow-soft)] interactive-lift"
              )}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Badge variant="teal">{version.tag}</Badge>
                </div>
                <h3 className="font-display text-2xl font-medium text-ink">{version.title}</h3>
                <p className="text-sm font-medium text-teal-700">{version.stats}</p>
                <p className="text-sm leading-relaxed text-ink-faint">{version.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
