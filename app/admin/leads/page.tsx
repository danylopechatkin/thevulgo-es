import { requireAdmin } from "@/lib/admin-auth";
import LeadsClient from "../components/LeadsClient";

export const dynamic = "force-dynamic";
export default async function LeadsPage() {
  await requireAdmin();
  return <LeadsClient mode="leads" />;
}
