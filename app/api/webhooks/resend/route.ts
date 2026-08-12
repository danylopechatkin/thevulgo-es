import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";
import { z } from "zod";

export const dynamic = "force-dynamic";

const eventSchema = z.object({
  type: z.enum([
    "email.sent",
    "email.delivered",
    "email.delivery_delayed",
    "email.bounced",
    "email.failed",
    "email.suppressed",
    "email.complained",
    "email.opened",
    "email.clicked",
  ]),
  created_at: z.string().datetime(),
  data: z.object({
    email_id: z.string().min(1),
    to: z.array(z.string()).default([]),
    subject: z.string().optional().default(""),
    bounce: z
      .object({
        message: z.string().optional(),
        type: z.string().optional(),
        subType: z.string().optional(),
      })
      .passthrough()
      .optional(),
  }),
});

const failureEvents = new Set([
  "email.bounced",
  "email.failed",
  "email.suppressed",
  "email.complained",
]);

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  const svixId = request.headers.get("svix-id");
  const svixTimestamp = request.headers.get("svix-timestamp");
  const svixSignature = request.headers.get("svix-signature");
  if (!apiKey || !webhookSecret || !svixId || !svixTimestamp || !svixSignature)
    return Response.json({ error: "Invalid webhook" }, { status: 400 });

  let event: z.infer<typeof eventSchema>;
  try {
    const resend = new Resend(apiKey);
    const payload = await request.text();
    const verified = resend.webhooks.verify({
      payload,
      headers: {
        id: svixId,
        timestamp: svixTimestamp,
        signature: svixSignature,
      },
      webhookSecret,
    });
    event = eventSchema.parse(verified);
  } catch {
    return Response.json(
      { error: "Invalid webhook signature" },
      { status: 400 },
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const recipient = event.data.to[0] || null;

    const { data: confirmationOrder } = await supabase
      .from("orders")
      .select(
        "id, email, customer_email_id, customer_email_last_event_at, completed_email_id, completed_email_last_event_at",
      )
      .eq("customer_email_id", event.data.email_id)
      .maybeSingle();
    const { data: completedOrder } = confirmationOrder
      ? { data: null }
      : await supabase
          .from("orders")
          .select(
            "id, email, customer_email_id, customer_email_last_event_at, completed_email_id, completed_email_last_event_at",
          )
          .eq("completed_email_id", event.data.email_id)
          .maybeSingle();
    const order = confirmationOrder || completedOrder;
    const completedMessage = Boolean(completedOrder);
    const { data: invitationWorker } = order
      ? { data: null }
      : await supabase
          .from("worker_profiles")
          .select("user_id, email, onboarding_invite_email_last_event_at")
          .eq("onboarding_invite_email_id", event.data.email_id)
          .maybeSingle();
    const { data: welcomeWorker } =
      order || invitationWorker
        ? { data: null }
        : await supabase
            .from("worker_profiles")
            .select("user_id, email, welcome_email_last_event_at")
            .eq("welcome_email_id", event.data.email_id)
            .maybeSingle();
    const worker = invitationWorker || welcomeWorker;
    const workerMessage = invitationWorker
      ? "invitation"
      : welcomeWorker
        ? "welcome"
        : null;
    const { data: assignment } =
      order || worker
        ? { data: null }
        : await supabase
            .from("worker_assignments")
            .select(
              "id, order_id, worker_id, worker_email_last_event_at, worker_profiles(full_name), orders(order_number)",
            )
            .eq("worker_email_id", event.data.email_id)
            .maybeSingle();
    const { data: responseAssignment } =
      order || worker || assignment
        ? { data: null }
        : await supabase
            .from("worker_assignments")
            .select(
              "id, order_id, worker_id, response_status, response_email_kind, response_email_last_event_at, worker_profiles(full_name), orders(order_number)",
            )
            .eq("response_email_id", event.data.email_id)
            .maybeSingle();
    const { data: workerQuestion } =
      order || worker || assignment || responseAssignment
        ? { data: null }
        : await supabase
            .from("worker_job_messages")
            .select(
              "id, assignment_id, order_id, worker_id, email_last_event_at, worker_profiles(full_name), orders(order_number)",
            )
            .eq("email_id", event.data.email_id)
            .eq("message_type", "question")
            .maybeSingle();
    const { data: paymentRequest } =
      order || worker || assignment || responseAssignment || workerQuestion
        ? { data: null }
        : await supabase
            .from("payment_requests")
            .select(
              "id, order_id, worker_id, assignment_id, email_last_event_at, orders(order_number)",
            )
            .eq("email_id", event.data.email_id)
            .maybeSingle();
    const isCustomer = Boolean(
      order?.email &&
      recipient &&
      order.email.toLowerCase() === recipient.toLowerCase(),
    );
    const eventError =
      event.data.bounce?.message ||
      (failureEvents.has(event.type) ? event.type.replace("email.", "") : null);

    const { error: insertError } = await supabase
      .from("resend_email_events")
      .insert({
        svix_id: svixId,
        email_id: event.data.email_id,
        order_id:
          order?.id ||
          responseAssignment?.order_id ||
          workerQuestion?.order_id ||
          paymentRequest?.order_id ||
          null,
        worker_id:
          worker?.user_id ||
          assignment?.worker_id ||
          responseAssignment?.worker_id ||
          workerQuestion?.worker_id ||
          paymentRequest?.worker_id ||
          null,
        payment_request_id: paymentRequest?.id || null,
        recipient,
        recipient_kind: isCustomer
          ? completedMessage
            ? "customer_completed"
            : "customer_confirmation"
          : workerMessage
            ? `worker_${workerMessage}`
            : assignment
              ? "worker_assignment"
              : responseAssignment
                ? "worker_assignment_response"
                : workerQuestion
                  ? "worker_question_admin"
                  : paymentRequest
                    ? "customer_payment_link"
                  : "copy_or_unknown",
        subject: event.data.subject,
        event_type: event.type,
        event_created_at: event.created_at,
        event_error: eventError,
      });
    if (insertError?.code === "23505")
      return Response.json({ success: true, duplicate: true });
    if (insertError) throw new Error(insertError.message);

    if (order && isCustomer) {
      const eventTime = new Date(event.created_at).getTime();
      const previousEventAt = completedMessage
        ? order.completed_email_last_event_at
        : order.customer_email_last_event_at;
      const previousTime = previousEventAt
        ? new Date(previousEventAt).getTime()
        : 0;
      const update: Record<string, string | null> = {};
      const prefix = completedMessage ? "completed_email" : "customer_email";
      if (eventTime >= previousTime) {
        update[`${prefix}_delivery_status`] = event.type.replace("email.", "");
        update[`${prefix}_last_event_at`] = event.created_at;
      }
      if (event.type === "email.delivered")
        update[`${prefix}_delivered_at`] = event.created_at;
      if (event.type === "email.opened")
        update[`${prefix}_opened_at`] = event.created_at;
      if (event.type === "email.bounced")
        update[`${prefix}_bounced_at`] = event.created_at;
      if (failureEvents.has(event.type)) {
        update[`${prefix}_status`] = "failed";
        update[`${prefix}_delivery_error`] = eventError;
      } else if (event.type === "email.delivered") {
        update[`${prefix}_status`] = "sent";
        update[`${prefix}_delivery_error`] = null;
      }
      if (Object.keys(update).length) {
        const { error: updateError } = await supabase
          .from("orders")
          .update(update)
          .eq("id", order.id);
        if (updateError) throw new Error(updateError.message);
      }
    }

    if (worker && workerMessage) {
      const prefix =
        workerMessage === "invitation"
          ? "onboarding_invite_email"
          : "welcome_email";
      const previousEventAt =
        workerMessage === "invitation"
          ? invitationWorker?.onboarding_invite_email_last_event_at
          : welcomeWorker?.welcome_email_last_event_at;
      const eventTime = new Date(event.created_at).getTime();
      const previousTime = previousEventAt
        ? new Date(previousEventAt).getTime()
        : 0;
      const update: Record<string, string | null> = {};
      if (eventTime >= previousTime) {
        update[`${prefix}_status`] = event.type.replace("email.", "");
        update[`${prefix}_last_event_at`] = event.created_at;
      }
      if (event.type === "email.delivered")
        update[`${prefix}_delivered_at`] = event.created_at;
      if (event.type === "email.opened")
        update[`${prefix}_opened_at`] = event.created_at;
      if (event.type === "email.bounced")
        update[`${prefix}_bounced_at`] = event.created_at;
      if (failureEvents.has(event.type)) update[`${prefix}_error`] = eventError;
      else if (event.type === "email.delivered")
        update[`${prefix}_error`] = null;

      const { error: workerUpdateError } = await supabase
        .from("worker_profiles")
        .update(update)
        .eq("user_id", worker.user_id);
      if (workerUpdateError) throw new Error(workerUpdateError.message);

      await supabase.from("worker_activity_events").insert({
        worker_id: worker.user_id,
        event_type: `${workerMessage}_email_${event.type.replace("email.", "")}`,
        detail: `${workerMessage === "invitation" ? "Password invitation" : "Welcome email"} ${event.type.replace("email.", " ")}${recipient ? ` for ${recipient}` : ""}.`,
        metadata: { email_id: event.data.email_id, resend_event: event.type },
      });
    }

    if (assignment) {
      const eventTime = new Date(event.created_at).getTime();
      const previousTime = assignment.worker_email_last_event_at
        ? new Date(assignment.worker_email_last_event_at).getTime()
        : 0;
      const update: Record<string, string | null> = {};
      if (eventTime >= previousTime) {
        update.worker_email_delivery_status = event.type.replace("email.", "");
        update.worker_email_last_event_at = event.created_at;
      }
      if (event.type === "email.delivered") {
        update.worker_email_status = "sent";
        update.worker_email_delivered_at = event.created_at;
        update.worker_email_error = null;
      }
      if (event.type === "email.opened")
        update.worker_email_opened_at = event.created_at;
      if (event.type === "email.bounced")
        update.worker_email_bounced_at = event.created_at;
      if (failureEvents.has(event.type)) {
        update.worker_email_status = "failed";
        update.worker_email_error = eventError;
      }
      const { error: assignmentUpdateError } = await supabase
        .from("worker_assignments")
        .update(update)
        .eq("id", assignment.id);
      if (assignmentUpdateError) throw new Error(assignmentUpdateError.message);
      await supabase.from("worker_activity_events").insert({
        worker_id: assignment.worker_id,
        event_type: `job_email_${event.type.replace("email.", "")}`,
        detail: `Assigned-job email ${event.type.replace("email.", " ")}.`,
        metadata: {
          assignment_id: assignment.id,
          email_id: event.data.email_id,
          resend_event: event.type,
        },
      });
      const assignmentWorker = Array.isArray(assignment.worker_profiles)
        ? assignment.worker_profiles[0]
        : assignment.worker_profiles;
      const assignmentOrder = Array.isArray(assignment.orders)
        ? assignment.orders[0]
        : assignment.orders;
      await supabase.from("order_change_history").insert({
        order_id: assignment.order_id,
        order_number: assignmentOrder?.order_number,
        change_type: "updated",
        new_data: {
          crm_event: "worker_assignment_email_event",
          assignment_id: assignment.id,
          worker_id: assignment.worker_id,
          worker_name: assignmentWorker?.full_name,
          email_event: event.type.replace("email.", ""),
          email_id: event.data.email_id,
          event_at: event.created_at,
        },
      });
    }

    if (responseAssignment) {
      const eventTime = new Date(event.created_at).getTime();
      const previousTime = responseAssignment.response_email_last_event_at
        ? new Date(responseAssignment.response_email_last_event_at).getTime()
        : 0;
      const update: Record<string, string | null> = {};
      if (eventTime >= previousTime) {
        update.response_email_status = event.type.replace("email.", "");
        update.response_email_last_event_at = event.created_at;
      }
      if (event.type === "email.delivered") {
        update.response_email_delivered_at = event.created_at;
        update.response_email_error = null;
      }
      if (event.type === "email.opened")
        update.response_email_opened_at = event.created_at;
      if (event.type === "email.bounced")
        update.response_email_bounced_at = event.created_at;
      if (failureEvents.has(event.type))
        update.response_email_error = eventError;
      const { error: responseUpdateError } = await supabase
        .from("worker_assignments")
        .update(update)
        .eq("id", responseAssignment.id);
      if (responseUpdateError) throw new Error(responseUpdateError.message);

      const responseWorker = Array.isArray(responseAssignment.worker_profiles)
        ? responseAssignment.worker_profiles[0]
        : responseAssignment.worker_profiles;
      const responseOrder = Array.isArray(responseAssignment.orders)
        ? responseAssignment.orders[0]
        : responseAssignment.orders;
      const responseKind =
        responseAssignment.response_email_kind ||
        responseAssignment.response_status;
      await Promise.all([
        supabase.from("worker_activity_events").insert({
          worker_id: responseAssignment.worker_id,
          event_type: `job_${responseKind}_confirmation_email_${event.type.replace("email.", "")}`,
          detail: `${responseKind} confirmation email for TVG-ES-${String(responseOrder?.order_number || "").padStart(5, "0")} ${event.type.replace("email.", " ")}.`,
          metadata: {
            assignment_id: responseAssignment.id,
            order_id: responseAssignment.order_id,
            response_status: responseKind,
            email_id: event.data.email_id,
            resend_event: event.type,
          },
        }),
        supabase.from("order_change_history").insert({
          order_id: responseAssignment.order_id,
          order_number: responseOrder?.order_number,
          change_type: "updated",
          new_data: {
            crm_event: "worker_response_email_event",
            assignment_id: responseAssignment.id,
            worker_id: responseAssignment.worker_id,
            worker_name: responseWorker?.full_name,
            response_status: responseKind,
            email_event: event.type.replace("email.", ""),
            email_id: event.data.email_id,
            event_at: event.created_at,
          },
        }),
      ]);
    }

    if (workerQuestion) {
      const eventTime = new Date(event.created_at).getTime();
      const previousTime = workerQuestion.email_last_event_at
        ? new Date(workerQuestion.email_last_event_at).getTime()
        : 0;
      const update: Record<string, string | null> = {};
      if (eventTime >= previousTime) {
        update.email_status = event.type.replace("email.", "");
        update.email_last_event_at = event.created_at;
      }
      if (event.type === "email.delivered") {
        update.email_delivered_at = event.created_at;
        update.email_error = null;
      }
      if (event.type === "email.opened")
        update.email_opened_at = event.created_at;
      if (failureEvents.has(event.type)) update.email_error = eventError;
      const { error: questionUpdateError } = await supabase
        .from("worker_job_messages")
        .update(update)
        .eq("id", workerQuestion.id);
      if (questionUpdateError) throw new Error(questionUpdateError.message);

      const questionWorker = Array.isArray(workerQuestion.worker_profiles)
        ? workerQuestion.worker_profiles[0]
        : workerQuestion.worker_profiles;
      const questionOrder = Array.isArray(workerQuestion.orders)
        ? workerQuestion.orders[0]
        : workerQuestion.orders;
      await Promise.all([
        supabase.from("worker_activity_events").insert({
          worker_id: workerQuestion.worker_id,
          event_type: `job_question_email_${event.type.replace("email.", "")}`,
          detail: `Question email for TVG-ES-${String(questionOrder?.order_number || "").padStart(5, "0")} ${event.type.replace("email.", " ")}.`,
          metadata: {
            assignment_id: workerQuestion.assignment_id,
            order_id: workerQuestion.order_id,
            message_id: workerQuestion.id,
            email_id: event.data.email_id,
            resend_event: event.type,
          },
        }),
        supabase.from("order_change_history").insert({
          order_id: workerQuestion.order_id,
          order_number: questionOrder?.order_number,
          change_type: "updated",
          new_data: {
            crm_event: "worker_question_email_event",
            assignment_id: workerQuestion.assignment_id,
            worker_id: workerQuestion.worker_id,
            worker_name: questionWorker?.full_name,
            message_id: workerQuestion.id,
            email_event: event.type.replace("email.", ""),
            email_id: event.data.email_id,
            event_at: event.created_at,
          },
        }),
      ]);
    }

    if (paymentRequest) {
      const eventTime = new Date(event.created_at).getTime();
      const previousTime = paymentRequest.email_last_event_at
        ? new Date(paymentRequest.email_last_event_at).getTime()
        : 0;
      const update: Record<string, string | null> = {};
      if (eventTime >= previousTime) {
        update.email_delivery_status = event.type.replace("email.", "");
        update.email_last_event_at = event.created_at;
      }
      if (event.type === "email.sent") update.email_sent_at = event.created_at;
      if (event.type === "email.delivered") {
        update.email_delivered_at = event.created_at;
        update.email_error = null;
      }
      if (event.type === "email.opened") update.email_opened_at = event.created_at;
      if (event.type === "email.clicked") update.email_clicked_at = event.created_at;
      if (event.type === "email.bounced") update.email_bounced_at = event.created_at;
      if (failureEvents.has(event.type)) update.email_error = eventError;
      const { error: paymentUpdateError } = await supabase
        .from("payment_requests")
        .update(update)
        .eq("id", paymentRequest.id);
      if (paymentUpdateError) throw new Error(paymentUpdateError.message);

      const paymentOrder = Array.isArray(paymentRequest.orders)
        ? paymentRequest.orders[0]
        : paymentRequest.orders;
      await supabase.from("order_change_history").insert({
        order_id: paymentRequest.order_id,
        order_number: paymentOrder?.order_number,
        change_type: "updated",
        new_data: {
          crm_event: "payment_link_email_event",
          payment_request_id: paymentRequest.id,
          email_event: event.type.replace("email.", ""),
          recipient,
          email_id: event.data.email_id,
          event_at: event.created_at,
          error: eventError,
        },
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(
      "Resend webhook processing failed",
      error instanceof Error ? error.message : "Unknown error",
    );
    return Response.json(
      { error: "Webhook processing failed" },
      { status: 500 },
    );
  }
}
