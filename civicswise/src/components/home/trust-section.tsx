import { BadgeCheck, Landmark, RefreshCcw } from "lucide-react";

const points = [
  {
    icon: Landmark,
    title: "Sourced from USCIS",
    body: "Every question and accepted answer is based on the official civics-test material published by U.S. Citizenship and Immigration Services.",
  },
  {
    icon: RefreshCcw,
    title: "Dynamic answers, flagged clearly",
    body: "Questions like “Who is the President now?” have answers that change. CivicsWise marks these so you always know to check the current answer.",
  },
  {
    icon: BadgeCheck,
    title: "Independent, not official",
    body: "CivicsWise is a study tool, not a government service. We link back to uscis.gov throughout the site so you can always verify against the source.",
  },
];

export function TrustSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex flex-col gap-4">
              <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Built on the source you'll actually be tested against.
              </h2>
              <p className="text-balance text-base leading-relaxed text-ink-faint sm:text-lg">
                We don't guess at civics-test content. Everything on CivicsWise traces back to
                official USCIS publications, so what you practice is what you'll be asked.
              </p>
              <a
                href="https://www.uscis.gov/citizenship"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm font-medium text-teal-700 underline underline-offset-4 hover:text-teal-900"
              >
                View official USCIS citizenship resources
              </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-1">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass-100 text-brass-700">
                  <point.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-medium text-ink">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-faint">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
