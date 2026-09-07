"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/layout/brand-mark";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AdminSidebar, adminSections, type AdminSectionId } from "./admin-sidebar";
import {
  AuditLogSection,
  CategoriesSection,
  OverviewSection,
  PdfImportSection,
  PracticePoolsSection,
  QuestionsSection,
  ReviewQueueSection,
  SettingsSection,
  SubscriptionsSection,
  UsersSection,
} from "./admin-sections";

const sectionComponents: Record<AdminSectionId, React.ComponentType> = {
  overview: OverviewSection,
  questions: QuestionsSection,
  categories: CategoriesSection,
  pools: PracticePoolsSection,
  import: PdfImportSection,
  review: ReviewQueueSection,
  users: UsersSection,
  subscriptions: SubscriptionsSection,
  audit: AuditLogSection,
  settings: SettingsSection,
};

export function AdminShell() {
  const [active, setActive] = useState<AdminSectionId>("overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  const ActiveSection = sectionComponents[active];
  const activeLabel = adminSections.find((s) => s.id === active)?.label ?? "";

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl">
      <aside className="hidden w-64 shrink-0 border-r border-line px-4 py-8 lg:block">
        <div className="mb-8 px-2">
          <BrandMark />
          <p className="mt-1 text-xs text-ink-faint">Admin console (preview)</p>
        </div>
        <AdminSidebar active={active} onSelect={setActive} />
      </aside>

      <div className="flex-1 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
                Sections
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="mb-8 mt-2">
                <BrandMark />
              </div>
              <AdminSidebar
                active={active}
                onSelect={(id) => {
                  setActive(id);
                  setMobileOpen(false);
                }}
              />
            </SheetContent>
          </Sheet>
        </div>

        <h1 className="font-display text-2xl font-medium text-ink">{activeLabel}</h1>
        <div className="mt-6">
          <ActiveSection />
        </div>
      </div>
    </div>
  );
}
