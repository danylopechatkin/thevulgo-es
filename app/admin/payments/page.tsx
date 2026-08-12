import { requireAdmin } from "@/lib/admin-auth";
import PaymentsClient from "../components/PaymentsClient";
export const dynamic = "force-dynamic";
export default async function PaymentsPage() { await requireAdmin(); return <PaymentsClient />; }
