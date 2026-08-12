import { getAdminSession } from "@/lib/admin-auth";
import { sendWorkerAccountRemovedEmail } from "@/lib/emails";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const force = new URL(request.url).searchParams.get("force") === "true";
  const admin = getSupabaseAdmin();
  const { data: worker, error: workerError } = await admin
    .from("worker_profiles")
    .select("user_id, full_name, email")
    .eq("user_id", id)
    .maybeSingle();
  if (workerError || !worker)
    return Response.json(
      { error: workerError?.message || "Worker not found" },
      { status: 404 },
    );

  const { count, error: assignmentError } = await admin
    .from("worker_assignments")
    .select("id", { count: "exact", head: true })
    .eq("worker_id", id);
  if (assignmentError)
    return Response.json({ error: assignmentError.message }, { status: 500 });
  if (count && count > 0 && !force)
    return Response.json(
      {
        error:
          "This worker has assigned-job history. Use the Worker database to review and confirm complete deletion.",
        requiresForce: true,
        assignmentCount: count,
      },
      { status: 409 },
    );

  const { data: documents, error: documentError } = await admin
    .from("worker_documents")
    .select("storage_path")
    .eq("worker_id", id);
  if (documentError)
    return Response.json({ error: documentError.message }, { status: 500 });

  const paths = (documents || [])
    .map((document) => document.storage_path)
    .filter(Boolean);
  if (paths.length) {
    const { error: storageError } = await admin.storage
      .from("worker-private-documents")
      .remove(paths);
    if (storageError)
      return Response.json({ error: storageError.message }, { status: 500 });
  }

  // Notify the worker before their Auth email is replaced or their user is
  // deleted. An email delivery problem must never block secure access removal.
  let removalEmail: { emailId: string | null; error: string | null } = {
    emailId: null,
    error: null,
  };
  try {
    removalEmail = await sendWorkerAccountRemovedEmail({
      workerId: worker.user_id,
      fullName: worker.full_name,
      email: worker.email,
    });
  } catch (error) {
    removalEmail.error =
      error instanceof Error ? error.message : "Could not send removal email";
  }

  let affectedOrders = 0;
  if (force && count) {
    const { data: assignments, error: assignmentsError } = await admin
      .from("worker_assignments")
      .select("id, order_id, status, orders(order_number)")
      .eq("worker_id", id);
    if (assignmentsError)
      return Response.json(
        { error: assignmentsError.message },
        { status: 500 },
      );

    const history = (assignments || []).map((assignment) => {
      const joined = assignment.orders as
        { order_number?: number } | Array<{ order_number?: number }> | null;
      const order = Array.isArray(joined) ? joined[0] : joined;
      return {
        order_id: assignment.order_id,
        order_number: order?.order_number || null,
        changed_by: session.user.id,
        change_type: "updated",
        new_data: {
          crm_event: "worker_access_archived",
          worker_id: worker.user_id,
          worker_name: worker.full_name,
          worker_email: worker.email,
          previous_assignment_id: assignment.id,
          previous_assignment_status: assignment.status,
        },
      };
    });
    if (history.length) {
      const { error: historyError } = await admin
        .from("order_change_history")
        .insert(history);
      if (historyError)
        return Response.json({ error: historyError.message }, { status: 500 });
    }

    await admin.from("worker_activity_events").insert({
      worker_id: worker.user_id,
      event_type: removalEmail.error
        ? "account_removal_email_failed"
        : "account_removal_email_sent",
      detail: removalEmail.error
        ? `Contractor-access removal email could not be delivered: ${removalEmail.error}`
        : `Contractor-access removal email sent to ${worker.email}.`,
      metadata: {
        email_id: removalEmail.emailId,
        worker_email: worker.email,
      },
    });

    const { error: revokeError } = await admin
      .from("worker_assignments")
      .update({ access_revoked_at: new Date().toISOString() })
      .eq("worker_id", id);
    if (revokeError)
      return Response.json(
        { error: revokeError.message },
        { status: 500 },
      );
    affectedOrders = history.length;

    // A contractor with job history is archived instead of physically deleted.
    // This keeps orders, assignment history, payouts, messages and job photos intact.
    const archivedEmail = `archived+${id}@deleted.thevulgo.es`;
    const { error: authArchiveError } = await admin.auth.admin.updateUserById(
      id,
      {
        email: archivedEmail,
        email_confirm: true,
        ban_duration: "876000h",
        user_metadata: {
          full_name: "Archived contractor",
          account_type: "archived_spain_contractor",
        },
      },
    );
    if (authArchiveError)
      return Response.json(
        { error: authArchiveError.message },
        { status: 500 },
      );
    const { error: profileArchiveError } = await admin
      .from("worker_profiles")
      .update({
        email: archivedEmail,
        full_name: "Archived contractor",
        phone: "",
        contractor_status: "deactivated",
      })
      .eq("user_id", id);
    if (profileArchiveError)
      return Response.json(
        { error: profileArchiveError.message },
        { status: 500 },
      );

    return Response.json({
      ok: true,
      archived: true,
      deletedWorker: { id: worker.user_id, name: worker.full_name },
      affectedOrders,
      removalEmailSent: Boolean(removalEmail.emailId && !removalEmail.error),
      removalEmailError: removalEmail.error,
    });
  }

  const { error: deleteError } = await admin.auth.admin.deleteUser(id);
  if (deleteError)
    return Response.json({ error: deleteError.message }, { status: 500 });

  return Response.json({
    ok: true,
    deletedWorker: { id: worker.user_id, name: worker.full_name },
    affectedOrders,
    removalEmailSent: Boolean(removalEmail.emailId && !removalEmail.error),
    removalEmailError: removalEmail.error,
  });
}
