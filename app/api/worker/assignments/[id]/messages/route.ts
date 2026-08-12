import { sendWorkerQuestionEmail } from "@/lib/emails";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getWorkerSession } from "@/lib/worker-auth";
import { z } from "zod";

const schema = z.object({
  type: z.enum(["note", "question"]),
  body: z.string().trim().min(1).max(2000),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getWorkerSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json(
      { error: "Write a message up to 2,000 characters." },
      { status: 400 },
    );

  const { id } = await params;
  const admin = getSupabaseAdmin();
  const { data: assignment, error: assignmentError } = await admin
    .from("worker_assignments")
    .select(
      "id, order_id, worker_id, response_status, access_revoked_at, orders(order_number), worker_profiles(full_name, email)",
    )
    .eq("id", id)
    .eq("worker_id", session.user.id)
    .maybeSingle();
  if (assignmentError || !assignment)
    return Response.json(
      { error: assignmentError?.message || "Assignment not found" },
      { status: 404 },
    );
  if (assignment.access_revoked_at || assignment.response_status === "declined")
    return Response.json(
      { error: "This assignment is no longer active." },
      { status: 409 },
    );

  const order = Array.isArray(assignment.orders)
    ? assignment.orders[0]
    : assignment.orders;
  const worker = Array.isArray(assignment.worker_profiles)
    ? assignment.worker_profiles[0]
    : assignment.worker_profiles;
  if (!order || !worker)
    return Response.json(
      { error: "Assignment details are unavailable." },
      { status: 404 },
    );

  const now = new Date().toISOString();
  const emailRequested = parsed.data.type === "question";
  const { data: message, error: messageError } = await admin
    .from("worker_job_messages")
    .insert({
      assignment_id: assignment.id,
      order_id: assignment.order_id,
      worker_id: assignment.worker_id,
      message_type: parsed.data.type,
      body: parsed.data.body,
      email_status: emailRequested ? "pending" : "not_requested",
    })
    .select(
      "id, message_type, body, email_status, email_delivered_at, created_at",
    )
    .single();
  if (messageError)
    return Response.json({ error: messageError.message }, { status: 500 });

  const orderLabel = `TVG-ES-${String(order.order_number).padStart(5, "0")}`;
  const eventType = emailRequested ? "job_question_sent" : "job_note_added";
  const detail = emailRequested
    ? `Question sent from ${orderLabel}: ${parsed.data.body}`
    : `Private note added to ${orderLabel}: ${parsed.data.body}`;
  await Promise.all([
    admin.from("worker_activity_events").insert({
      worker_id: assignment.worker_id,
      event_type: eventType,
      detail,
      metadata: {
        assignment_id: assignment.id,
        order_id: assignment.order_id,
        order_number: order.order_number,
        message_id: message.id,
      },
    }),
    admin.from("order_change_history").insert({
      order_id: assignment.order_id,
      order_number: order.order_number,
      change_type: "updated",
      new_data: {
        crm_event: emailRequested
          ? "worker_question_sent"
          : "worker_note_added",
        assignment_id: assignment.id,
        worker_id: assignment.worker_id,
        worker_name: worker.full_name,
        message_id: message.id,
        message: parsed.data.body,
        event_at: now,
      },
    }),
  ]);

  if (!emailRequested) return Response.json({ message });

  try {
    const emailId = await sendWorkerQuestionEmail({
      workerId: assignment.worker_id,
      workerName: worker.full_name,
      workerEmail: worker.email,
      assignmentId: assignment.id,
      orderNumber: order.order_number,
      question: parsed.data.body,
    });
    const { data: updated, error: updateError } = await admin
      .from("worker_job_messages")
      .update({
        email_id: emailId,
        email_status: "sent",
        email_last_event_at: now,
        email_error: null,
      })
      .eq("id", message.id)
      .select(
        "id, message_type, body, email_status, email_delivered_at, created_at",
      )
      .single();
    if (updateError) throw new Error(updateError.message);
    await admin.from("worker_activity_events").insert({
      worker_id: assignment.worker_id,
      event_type: "job_question_email_sent",
      detail: `${orderLabel} question email accepted by Resend.`,
      metadata: {
        assignment_id: assignment.id,
        order_id: assignment.order_id,
        message_id: message.id,
        email_id: emailId,
      },
    });
    return Response.json({ message: updated });
  } catch (cause) {
    const error =
      cause instanceof Error
        ? cause.message
        : "Question email could not be sent";
    const { data: failed } = await admin
      .from("worker_job_messages")
      .update({ email_status: "failed", email_error: error })
      .eq("id", message.id)
      .select(
        "id, message_type, body, email_status, email_delivered_at, created_at",
      )
      .single();
    await Promise.all([
      admin.from("worker_activity_events").insert({
        worker_id: assignment.worker_id,
        event_type: "job_question_email_failed",
        detail: `${orderLabel} question was saved, but its email failed: ${error}`,
        metadata: {
          assignment_id: assignment.id,
          order_id: assignment.order_id,
          message_id: message.id,
        },
      }),
      admin.from("order_change_history").insert({
        order_id: assignment.order_id,
        order_number: order.order_number,
        change_type: "updated",
        new_data: {
          crm_event: "worker_question_email_failed",
          assignment_id: assignment.id,
          worker_id: assignment.worker_id,
          worker_name: worker.full_name,
          message_id: message.id,
          error,
          event_at: new Date().toISOString(),
        },
      }),
    ]);
    return Response.json(
      {
        error: `Your question was saved, but the email failed: ${error}`,
        message: failed || message,
      },
      { status: 502 },
    );
  }
}
