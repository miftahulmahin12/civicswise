"use client";

import {
  BarChart3,
  FileUp,
  FolderTree,
  Gauge,
  History,
  LayoutGrid,
  ListChecks,
  Settings,
  ShieldAlert,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const adminSections = [
  { id: "overview", label: "Overview", icon: Gauge },
  { id: "questions", label: "Question bank", icon: ListChecks },
  { id: "categories", label: "Categories", icon: FolderTree },
  { id: "pools", label: "Practice pools", icon: LayoutGrid },
  { id: "import", label: "PDF import", icon: FileUp },
  { id: "review", label: "Review queue", icon: ShieldAlert },
  { id: "users", label: "Users", icon: Users },
  { id: "subscriptions", label: "Subscriptions", icon: BarChart3 },
  { id: "audit", label: "Audit log", icon: History },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

export type AdminSectionId = (typeof adminSections)[number]["id"];

export function AdminSidebar({
  active,
  onSelect,
}: {
  active: AdminSectionId;
  onSelect: (id: AdminSectionId) => void;
}) {
  return (
    <nav aria-label="Admin sections" className="flex flex-col gap-1">
      {adminSections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSelect(section.id)}
          aria-current={active === section.id ? "page" : undefined}
          className={cn(
            "flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium transition-colors",
            active === section.id
              ? "bg-ink text-paper"
              : "text-ink-soft hover:bg-paper-dim hover:text-ink"
          )}
        >
          <section.icon className="h-4 w-4" />
          {section.label}
        </button>
      ))}
    </nav>
  );
}
