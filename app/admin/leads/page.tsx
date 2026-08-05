import { requireAdmin } from "@/lib/adminAuth";
import LeadsClient from "../components/LeadsClient";

export default async function LeadsPage() {
  await requireAdmin();
  return <LeadsClient mode="leads" />;
}
