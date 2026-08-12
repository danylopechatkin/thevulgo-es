import { requireAdmin } from "@/lib/admin-auth";
import WhatsAppAnalyticsClient from "../components/WhatsAppAnalyticsClient";

export const dynamic = "force-dynamic";

export default async function WhatsAppAnalyticsPage() {
  await requireAdmin();
  return <WhatsAppAnalyticsClient />;
}
