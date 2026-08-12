import { requireAdmin } from "@/lib/admin-auth";
import ClientsDatabaseClient from "../components/ClientsDatabaseClient";

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  await requireAdmin();
  return <ClientsDatabaseClient />;
}
