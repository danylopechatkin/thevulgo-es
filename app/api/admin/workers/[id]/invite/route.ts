import { getAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { issueWorkerInvitation } from "@/lib/worker-invitations";

export async function POST(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const admin = getSupabaseAdmin();
  const { data: worker, error } = await admin
    .from("worker_profiles")
    .select("user_id, full_name, email, phone, residential_address")
    .eq("user_id", id)
    .maybeSingle();
  if (error || !worker)
    return Response.json(
      { error: error?.message || "Worker not found" },
      { status: 404 },
    );

  const { data: authUser, error: authError } =
    await admin.auth.admin.getUserById(id);
  if (authError || !authUser.user)
    return Response.json(
      { error: authError?.message || "Worker login was not found" },
      { status: 404 },
    );
  await admin.auth.admin.updateUserById(id, { email_confirm: true });

  try {
    const invitation = await issueWorkerInvitation(worker);
    return Response.json({ ok: true, ...invitation });
  } catch (inviteError) {
    return Response.json(
      {
        error:
          inviteError instanceof Error
            ? inviteError.message
            : "Could not send invitation",
      },
      { status: 500 },
    );
  }
}
