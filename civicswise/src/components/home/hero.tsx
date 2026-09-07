"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { HeroDemoCard } from "./hero-demo-card";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-eyebrow]", { opacity: 0, y: 14, duration: 0.5 })
          .from("[data-hero-title]", { opacity: 0, y: 24, duration: 0.7 }, "-=0.25")
          .from("[data-hero-copy]", { opacity: 0, y: 18, duration: 0.6 }, "-=0.35")
          .from("[data-hero-cta]", { opacity: 0, y: 14, duration: 0.5 }, "-=0.3")
          .from(
            "[data-hero-card]",
            { opacity: 0, y: 32, scale: 0.97, duration: 0.8 },
            "-=0.5"
          )
          .from(
            "[data-hero-stat]",
            { opacity: 0, y: 10, duration: 0.4, stagger: 0.08 },
            "-=0.4"
          );
      }, rootRef);
    })();

    return () => ctx?.revert();
  }, [prefersReduced]);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.35]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <span
            data-hero-eyebrow
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
            Built from official USCIS civics-test material
          </span>
          <h1
            data-hero-title
            className="text-balance font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
          >
            Walk into your naturalization interview already knowing the answers.
          </h1>
          <p data-hero-copy className="max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
            CivicsWise is a free practice platform for the U.S. citizenship civics test —
            the current 128-question 2025 test, the earlier 100-question 2008 test, and the
            65/20 special consideration, all in one place.
          </p>
          <div data-hero-cta className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="primary">
              <Link href="/practice/free">
                Start a free practice test
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/2025-civics-test">See how the 2025 test works</Link>
            </Button>
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:max-w-md">
            {[
              ["128", "questions in the current bank"],
              ["12/20", "correct to pass the 2025 test"],
              ["100%", "free to start practicing"],
            ].map(([value, label]) => (
              <div data-hero-stat key={label} className="flex flex-col gap-1">
                <dt className="font-display text-2xl font-medium text-ink">{value}</dt>
                <dd className="text-xs leading-snug text-ink-faint">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-hero-card>
          <HeroDemoCard />
        </div>
      </div>
    </section>
  );
}
