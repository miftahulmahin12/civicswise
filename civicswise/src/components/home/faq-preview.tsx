import Link from "next/link";

import { SectionHeading } from "@/components/marketing/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/data/faq";

export function FaqPreview() {
  const preview = faqItems.slice(0, 5);

  return (
    <section className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="Frequently asked questions"
          description="The short answers to what people ask before their interview."
        />
        <div className="mt-10 rounded-[var(--radius-lg)] border border-line bg-surface px-6 shadow-[var(--shadow-soft)] sm:px-8">
          <Accordion type="single" collapsible>
            {preview.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/faq">
              See all questions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
