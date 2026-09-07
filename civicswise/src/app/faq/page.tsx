import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqBrowser } from "@/components/faq/faq-browser";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers to common questions about the U.S. civics test, test versions, the 65/20 test, and how CivicsWise works.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions people ask before their interview"
        description="Search or browse by topic. If something's missing, the official USCIS citizenship resources are always linked from our footer."
        primaryHref="/practice/free"
        primaryLabel="Start practicing"
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <FaqBrowser />
      </section>
    </>
  );
}
