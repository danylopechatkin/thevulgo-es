import { requireAdmin } from "@/lib/admin-auth";
import WorkerDatabaseClient from "../components/WorkerDatabaseClient";

export const dynamic = "force-dynamic";

export default async function WorkerDatabasePage() {
  await requireAdmin();
  return <WorkerDatabaseClient />;
}
