import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UpgradeDialog } from "@/components/premium/upgrade-dialog";

export const metadata: Metadata = {
  title: "Premium",
  description:
    "Compare CivicsWise Free and Premium plans: unlimited mock interviews, spaced-repetition review, and downloadable study materials.",
};

const featureRows: [string, boolean, boolean][] = [
  ["Free practice tests", true, true],
  ["Full 128-question bank access", true, true],
  ["65/20 focused practice", true, true],
  ["Category accuracy on your dashboard", true, true],
  ["Unlimited timed mock interviews", false, true],
  ["Spaced-repetition review queue", false, true],
  ["Downloadable study sheets (PDF)", false, true],
  ["Priority updates to dynamic answers", false, true],
  ["Email reminders before your interview", false, true],
];

export default function PremiumPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium"
        title="Everything you need for the last mile of studying"
        description="Free gets you a real, complete way to prepare. Premium adds the tools people use in their final two weeks before an interview."
        primaryHref="/practice/free"
        primaryLabel="Try Free first"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="paper-card flex flex-col gap-6 rounded-[var(--radius-xl)] p-8">
            <div>
              <Badge variant="outline">Free</Badge>
              <p className="mt-3 font-display text-4xl font-medium text-ink">$0</p>
              <p className="text-sm text-ink-faint">No account or card required</p>
            </div>
            <ul className="flex flex-col gap-2.5 text-sm text-ink-soft">
              {featureRows
                .filter(([, free]) => free)
                .map(([label]) => (
                  <li key={label} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-teal-700" />
                    {label}
                  </li>
                ))}
            </ul>
            <Button asChild variant="outline" className="mt-auto">
              <a href="/practice/free">Start practicing free</a>
            </Button>
          </div>

          <div className="glass-surface relative flex flex-col gap-6 rounded-[var(--radius-xl)] border-2 !border-brass-500 p-8">
            <Badge variant="brass" className="absolute -top-3 left-8">
              Most popular
            </Badge>
            <div>
              <Badge variant="outline">Premium</Badge>
              <p className="mt-3 font-display text-4xl font-medium text-ink">
                $7.99<span className="text-base font-normal text-ink-faint"> / month</span>
              </p>
              <p className="text-sm text-ink-faint">or $59 billed annually</p>
            </div>
            <ul className="flex flex-col gap-2.5 text-sm text-ink-soft">
              {featureRows.map(([label, , premium]) => (
                <li key={label} className="flex items-center gap-2">
                  {premium ? (
                    <Check className="h-4 w-4 text-brass-700" />
                  ) : (
                    <Minus className="h-4 w-4 text-ink-faint" />
                  )}
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-2 sm:flex-row">
              <UpgradeDialog
                plan="monthly"
                trigger={
                  <Button variant="brass" className="flex-1">
                    Upgrade monthly
                  </Button>
                }
              />
              <UpgradeDialog
                plan="annual"
                trigger={
                  <Button variant="outline" className="flex-1">
                    Upgrade annually
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            title="What Premium actually changes day to day"
            description="It's not a paywall on the real test content — it's built for the final stretch of studying."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="paper-card rounded-[var(--radius-lg)] p-6 text-center">
              <p className="font-display text-lg font-medium text-ink">Mock interviews</p>
              <p className="mt-2 text-sm text-ink-faint">
                Timed, full-length sessions that feel closer to interview day pressure.
              </p>
            </div>
            <div className="paper-card rounded-[var(--radius-lg)] p-6 text-center">
              <p className="font-display text-lg font-medium text-ink">Spaced repetition</p>
              <p className="mt-2 text-sm text-ink-faint">
                Questions you've missed resurface automatically until they stick.
              </p>
            </div>
            <div className="paper-card rounded-[var(--radius-lg)] p-6 text-center">
              <p className="font-display text-lg font-medium text-ink">Printable sheets</p>
              <p className="mt-2 text-sm text-ink-faint">
                Download category summaries to study offline or share with a study partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
