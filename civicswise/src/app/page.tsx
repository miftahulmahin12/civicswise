import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { TestVersions } from "@/components/home/test-versions";
import { FreeVsPremium } from "@/components/home/free-vs-premium";
import { TrustSection } from "@/components/home/trust-section";
import { FaqPreview } from "@/components/home/faq-preview";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "CivicsWise — Practice the U.S. citizenship civics test",
  description:
    "Free practice for the U.S. naturalization civics test: the 2025 128-question test, the 2008 100-question test, and 65/20 special consideration.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TestVersions />
      <FreeVsPremium />
      <TrustSection />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
