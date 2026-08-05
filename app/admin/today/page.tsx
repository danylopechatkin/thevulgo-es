import { requireAdmin } from "@/lib/adminAuth";
import LeadsClient from "../components/LeadsClient";

export default async function TodayPage() {
  await requireAdmin();
  return <LeadsClient mode="today" />;
}
