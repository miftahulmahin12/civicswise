"use client";

import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollReveal({
  children,
  className,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced || !ref.current) return;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(ref.current, {
          opacity: 0,
          y,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        });
      });
    })();

    return () => ctx?.revert();
  }, [prefersReduced, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
