import { ClipboardList, Repeat, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";

const steps = [
  {
    icon: ClipboardList,
    title: "Pick a starting point",
    body: "Take a free 20-question practice test, browse the full question bank, or jump straight to the 65/20 list if it applies to you.",
  },
  {
    icon: Repeat,
    title: "Practice in short sessions",
    body: "Answer questions, get instant feedback, and see explanations for anything you miss — a few minutes a day is enough to build real recall.",
  },
  {
    icon: TrendingUp,
    title: "Watch your weak spots close",
    body: "Your dashboard tracks accuracy by category, so you always know which topics still need attention before interview day.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="A study loop built for one goal: passing the interview"
          description="No accounts required to start. CivicsWise works the way you'd actually prepare — a little practice, honest feedback, then more practice where it counts."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="paper-card flex h-full flex-col gap-4 rounded-[var(--radius-lg)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-lg font-medium text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-faint">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
