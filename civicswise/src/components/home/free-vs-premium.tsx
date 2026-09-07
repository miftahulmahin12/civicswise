import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Button } from "@/components/ui/button";

const rows: [string, boolean, boolean][] = [
  ["Free practice tests", true, true],
  ["Full 128-question bank access", true, true],
  ["65/20 focused practice", true, true],
  ["Category-by-category accuracy", true, true],
  ["Unlimited timed mock interviews", false, true],
  ["Spaced-repetition review of missed questions", false, true],
  ["Downloadable study sheets", false, true],
  ["Priority updates to dynamic answers", false, true],
];

export function FreeVsPremium() {
  return (
    <section className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Free covers the real test. Premium covers your last mile."
            description="You can prepare and pass using CivicsWise for free. Premium exists for people who want a faster, more guided path."
            className="max-w-xl"
          />
          <Button asChild variant="brass" size="lg" className="w-fit">
            <Link href="/premium">Compare plans in detail</Link>
          </Button>
        </div>

        <ScrollReveal className="mt-12">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface shadow-[var(--shadow-soft)]">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-line px-6 py-4 text-sm font-medium text-ink-faint sm:gap-8 sm:px-8">
              <span>Feature</span>
              <span className="w-16 text-center sm:w-24">Free</span>
              <span className="w-16 text-center sm:w-24">Premium</span>
            </div>
            {rows.map(([feature, free, premium]) => (
              <div
                key={feature}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-line px-6 py-4 text-sm text-ink last:border-b-0 sm:gap-8 sm:px-8"
              >
                <span>{feature}</span>
                <span className="flex w-16 justify-center sm:w-24">
                  {free ? (
                    <Check className="h-4 w-4 text-teal-700" />
                  ) : (
                    <Minus className="h-4 w-4 text-ink-faint" />
                  )}
                </span>
                <span className="flex w-16 justify-center sm:w-24">
                  {premium ? (
                    <Check className="h-4 w-4 text-brass-700" />
                  ) : (
                    <Minus className="h-4 w-4 text-ink-faint" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
