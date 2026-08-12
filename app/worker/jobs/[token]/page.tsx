import { getWorkerSession } from "@/lib/worker-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { notFound, redirect } from "next/navigation";
import WorkerJobClient from "./WorkerJobClient";
export const dynamic = "force-dynamic";
export default async function WorkerJobPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ decision?: string }>;
}) {
  const { token } = await params;
  const { decision: rawDecision = "" } = await searchParams;
  const decision = ["accept", "decline"].includes(rawDecision)
    ? (rawDecision as "accept" | "decline")
    : null;
  const session = await getWorkerSession();
  if (!session) {
    const next = `/worker/jobs/${token}${decision ? `?decision=${decision}` : ""}`;
    redirect(`/worker-login?next=${encodeURIComponent(next)}`);
  }
  const { worker } = session;
  const admin = getSupabaseAdmin();
  const { data } = await admin
    .from("worker_assignments")
    .select(
      "id, access_token, status, response_status, worker_share, completion_notes, email_link_viewed_at, accepted_at, declined_at, access_revoked_at, orders(id, order_number, full_name, city, area, postal_code, address, apartment, address_details, preferred_date, preferred_time, category, services, notes, total, payment_method)",
    )
    .eq("access_token", token)
    .eq("worker_id", worker.user_id)
    .maybeSingle();
  if (!data) {
    // An email can contain a superseded assignment token after an order is
    // restored or reassigned. Never expose another worker's job: recover only
    // when this authenticated worker has exactly one active pending job.
    if (decision) {
      const { data: activeAssignments } = await admin
        .from("worker_assignments")
        .select("access_token")
        .eq("worker_id", worker.user_id)
        .eq("response_status", "pending")
        .is("access_revoked_at", null)
        .limit(2);
      if (activeAssignments?.length === 1) {
        redirect(
          `/worker/jobs/${activeAssignments[0].access_token}?decision=${decision}`,
        );
      }
    }
    redirect("/worker");
  }
  if (data.access_revoked_at && data.response_status !== "declined")
    redirect("/worker");
  const order = Array.isArray(data.orders) ? data.orders[0] : data.orders;
  if (!order) notFound();
  const { data: messages } = await admin
    .from("worker_job_messages")
    .select(
      "id, message_type, body, email_status, email_delivered_at, created_at",
    )
    .eq("assignment_id", data.id)
    .eq("worker_id", worker.user_id)
    .order("created_at", { ascending: false })
    .limit(100);
  return (
    <WorkerJobClient
      assignment={{
        id: data.id,
        status: data.status,
        responseStatus: data.response_status || "pending",
        workerShare: Number(data.worker_share),
        completionNotes: data.completion_notes || "",
        emailLinkViewedAt: data.email_link_viewed_at,
        acceptedAt: data.accepted_at,
        declinedAt: data.declined_at,
      }}
      decision={decision}
      initialMessages={messages || []}
      order={{
        id: order.id,
        number: order.order_number,
        name: order.full_name,
        city: order.city,
        area: order.area,
        postalCode: order.postal_code,
        address: order.address,
        apartment: order.apartment,
        addressDetails: order.address_details,
        date: order.preferred_date,
        time: order.preferred_time,
        category: order.category,
        services: order.services || [],
        notes: order.notes,
        total: Number(order.total),
        paymentMethod: order.payment_method,
      }}
    />
  );
}
