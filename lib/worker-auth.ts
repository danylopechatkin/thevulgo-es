import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getWorkerSession() {
  const store = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => store.getAll(), setAll: () => {} } },
  );
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) return null;
  const { data: worker } = await supabase
    .from("worker_profiles")
    .select(
      "user_id, email, full_name, phone, contractor_status, payout_percent",
    )
    .eq("user_id", user.id)
    .maybeSingle();
  if (!worker || worker.contractor_status !== "active") return null;
  return { user, worker, supabase };
}

export async function requireWorker() {
  const session = await getWorkerSession();
  if (!session) redirect("/worker-login");
  return session;
}
