import GrowthAnalyticsClient from "../components/GrowthAnalyticsClient";
import { requireAdmin } from "@/lib/admin-auth";
export const dynamic = "force-dynamic";
export default async function AnalyticsPage() {
  await requireAdmin();
  return <GrowthAnalyticsClient />;
}
