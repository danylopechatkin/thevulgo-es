import { getAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { issueWorkerInvitation } from "@/lib/worker-invitations";
import { z } from "zod";
const schema = z.object({
  firstName: z.string().trim().min(1).max(60),
  lastName: z.string().trim().min(1).max(60),
  email: z.string().email(),
  phone: z.string().max(40).default(""),
  primaryCity: z.enum(["Valencia", "Madrid", "Barcelona", "Alicante"]),
  residentialAddress: z.string().trim().max(300).default(""),
  notes: z.string().trim().max(2000).default(""),
  sendInvite: z.boolean().default(true),
});
export async function GET() {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const service = getSupabaseAdmin();
  const [workers, orders, activity, assignments] = await Promise.all([
    service
      .from("worker_profiles")
      .select("*")
      .order("created_at", { ascending: false }),
    service
      .from("orders")
      .select("id, order_number, full_name, total, status")
      .in("status", ["new", "confirmed", "in_progress"])
      .order("created_at", { ascending: false })
      .limit(100),
    service
      .from("worker_activity_events")
      .select("id, worker_id, event_type, detail, metadata, created_at")
      .order("created_at", { ascending: false })
      .limit(500),
    service
      .from("worker_assignments")
      .select(
        "id, order_id, worker_id, status, worker_share, assigned_at, completed_at, response_status, email_link_viewed_at, accepted_at, declined_at, worker_email_status, worker_email_delivery_status, worker_notified_at, worker_email_last_event_at, worker_email_delivered_at, worker_email_opened_at, response_email_kind, response_email_status, response_email_sent_at, response_email_last_event_at, response_email_delivered_at, response_email_opened_at, orders(order_number, category, preferred_date, preferred_time, scheduled_at, total, status, payment_received_at, payment_method, area, city)",
      )
      .order("assigned_at", { ascending: false })
      .limit(250),
  ]);
  const error = workers.error || orders.error;
  return error
    ? Response.json({ error: error.message }, { status: 500 })
    : Response.json({
        workers: workers.data || [],
        orders: orders.data || [],
        activity: activity.error ? [] : activity.data || [],
        assignments: assignments.error ? [] : assignments.data || [],
      });
}
export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json({ error: "Invalid worker profile" }, { status: 400 });
  const input = parsed.data;
  const admin = getSupabaseAdmin();
  const authResult = await admin.auth.admin.createUser({
    email: input.email,
    email_confirm: true,
    user_metadata: {
      full_name: `${input.firstName} ${input.lastName}`,
      account_type: "spain_independent_contractor",
    },
  });
  if (authResult.error || !authResult.data.user)
    return Response.json(
      {
        error: authResult.error?.message || "Could not create worker profile",
      },
      { status: 500 },
    );
  const baseProfile = {
    user_id: authResult.data.user.id,
    email: input.email.toLowerCase(),
    full_name: `${input.firstName} ${input.lastName}`,
    phone: input.phone,
    primary_city: input.primaryCity,
    service_cities: [input.primaryCity],
    contractor_status: "invited",
    identity_retention_until: null,
  };
  const managedProfile = {
    ...baseProfile,
    legal_first_name: input.firstName,
    legal_last_name: input.lastName,
    residential_address: input.residentialAddress,
    admin_onboarding_notes: input.notes,
    profile_completed_at: new Date().toISOString(),
    created_by_admin: session.user.id,
  };
  let { error } = await admin.from("worker_profiles").upsert(managedProfile);
  if (
    error &&
    /column|schema cache|legal_first_name|admin_onboarding_notes/i.test(
      error.message,
    )
  ) {
    ({ error } = await admin.from("worker_profiles").upsert(baseProfile));
  }
  if (error) {
    await admin.auth.admin.deleteUser(authResult.data.user.id);
    return Response.json({ error: error.message }, { status: 500 });
  }

  await admin.from("worker_activity_events").insert({
    worker_id: authResult.data.user.id,
    event_type: "profile_created",
    detail: `Private worker profile created by ${session.user.email || "a CRM administrator"}.`,
    metadata: { invite_requested: input.sendInvite, city: input.primaryCity },
  });

  if (input.sendInvite) {
    try {
      await issueWorkerInvitation({
        user_id: authResult.data.user.id,
        full_name: baseProfile.full_name,
        email: baseProfile.email,
        phone: baseProfile.phone,
        residential_address: input.residentialAddress,
      });
    } catch (inviteError) {
      return Response.json(
        {
          error:
            inviteError instanceof Error
              ? `Profile created, but the invitation failed: ${inviteError.message}`
              : "Profile created, but the invitation failed",
          profileCreated: true,
        },
        { status: 502 },
      );
    }
  }

  return Response.json({ ok: true, inviteSent: input.sendInvite });
}
