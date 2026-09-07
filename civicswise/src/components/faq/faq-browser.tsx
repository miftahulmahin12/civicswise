"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, type FaqItem } from "@/data/faq";

const topics: FaqItem["topic"][] = ["Test format", "Eligibility", "Studying", "Using CivicsWise"];

export function FaqBrowser() {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState<FaqItem["topic"] | "all">("all");

  const filtered = useMemo(() => {
    return faqItems.filter((item) => {
      if (activeTopic !== "all" && item.topic !== activeTopic) return false;
      if (query.trim()) {
        const haystack = `${item.question} ${item.answer}`.toLowerCase();
        if (!haystack.includes(query.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [query, activeTopic]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          className="pl-11"
          aria-label="Search frequently asked questions"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTopic("all")}
          className={
            activeTopic === "all"
              ? "rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-paper"
              : "rounded-full border border-line-strong px-3.5 py-1.5 text-xs font-medium text-ink-soft hover:bg-paper-dim"
          }
        >
          All topics
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTopic(topic)}
            className={
              activeTopic === topic
                ? "rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-paper"
                : "rounded-full border border-line-strong px-3.5 py-1.5 text-xs font-medium text-ink-soft hover:bg-paper-dim"
            }
          >
            {topic}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-[var(--radius-lg)] border border-dashed border-line-strong py-14 text-center">
          <p className="font-display text-lg text-ink">No matches</p>
          <p className="mt-1 text-sm text-ink-faint">Try another search term.</p>
        </div>
      ) : (
        <div className="rounded-[var(--radius-lg)] border border-line bg-surface px-6 shadow-[var(--shadow-soft)] sm:px-8">
          <Accordion type="single" collapsible>
            {filtered.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>
                  <span className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                    <Badge variant="outline">{item.topic}</Badge>
                    <span>{item.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
}
