import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="border-t border-line bg-ink-fixed">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-display text-3xl font-medium leading-tight text-paper-fixed sm:text-4xl">
          Your interview date is set. Let's make sure you're ready for it.
        </h2>
        <p className="max-w-xl text-balance text-base leading-relaxed text-paper-fixed/70">
          Start with a free practice test — no account, no payment, just twenty questions and
          honest feedback.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="primary">
            <Link href="/practice/free">
              Start practicing now
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-paper-fixed/30 text-paper-fixed hover:bg-paper-fixed/10"
          >
            <Link href="/study-guide">Read the study guide</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
