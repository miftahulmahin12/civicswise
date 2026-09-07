import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Badge variant="teal" className="mx-auto w-fit">
          {eyebrow}
        </Badge>
        <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-ink-faint sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="primary">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight />
            </Link>
          </Button>
          {secondaryHref && secondaryLabel && (
            <Button asChild size="lg" variant="outline">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
