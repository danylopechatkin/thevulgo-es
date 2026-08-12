import { requireAdmin } from "@/lib/admin-auth";
import WorkersClient from "../components/WorkersClient";
export const dynamic = "force-dynamic";
export default async function WorkersPage() {
  await requireAdmin();
  return <WorkersClient />;
}
