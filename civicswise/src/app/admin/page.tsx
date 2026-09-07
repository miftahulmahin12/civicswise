import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";

export const metadata: Metadata = {
  title: "Admin",
  description: "CivicsWise content and operations admin console (frontend preview).",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminShell />;
}
