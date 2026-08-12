import { sendWorkerAssignmentResponseEmail } from "@/lib/emails";
import { getWorkerSession } from "@/lib/worker-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";
const schema = z.object({
  status: z
    .enum([
      "assigned",
      "en_route",
      "arrived",
      "in_progress",
      "completed",
      "issue_reported",
    ])
    .optional(),
  completionNotes: z.string().max(2000).optional(),
  responseStatus: z.enum(["accepted", "declined"]).optional(),
  emailLinkViewed: z.boolean().optional(),
  activityEvent: z
    .enum(["job_page_viewed", "route_opened", "whatsapp_contact_opened"])
    .optional(),
});
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getWorkerSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json({ error: "Invalid update" }, { status: 400 });
  const { id } = await params;
  const admin = getSupabaseAdmin();
  const { data: assignment } = await admin
    .from("worker_assignments")
    .select(
      "id, order_id, worker_id, access_token, status, completion_notes, response_status, worker_share, email_link_viewed_at, access_revoked_at, worker_profiles(full_name, email), orders(order_number, scheduled_at, address, area, city, postal_code, total)",
    )
    .eq("id", id)
    .eq("worker_id", session.user.id)
    .maybeSingle();
  if (!assignment)
    return Response.json({ error: "Assignment not found" }, { status: 404 });
  const input = parsed.data;
  const order = Array.isArray(assignment.orders)
    ? assignment.orders[0]
    : assignment.orders;
  const worker = Array.isArray(assignment.worker_profiles)
    ? assignment.worker_profiles[0]
    : assignment.worker_profiles;
  const orderLabel = `TVG-ES-${String(order?.order_number || "").padStart(5, "0")}`;
  const now = new Date().toISOString();
  if (input.activityEvent) {
    if (
      assignment.access_revoked_at &&
      input.activityEvent !== "job_page_viewed"
    )
      return Response.json(
        { error: "This assignment is no longer active." },
        { status: 409 },
      );
    const activity = {
      job_page_viewed: {
        eventType: "job_page_viewed",
        crmEvent: "worker_job_page_viewed",
        detail: `${orderLabel} viewed in the protected contractor portal.`,
      },
      route_opened: {
        eventType: "job_route_opened",
        crmEvent: "worker_route_opened",
        detail: `Google Maps route opened for ${orderLabel}.`,
      },
      whatsapp_contact_opened: {
        eventType: "job_whatsapp_opened",
        crmEvent: "worker_whatsapp_opened",
        detail: `THEVULGO WhatsApp contact opened from ${orderLabel}.`,
      },
    }[input.activityEvent];
    await Promise.all([
      admin.from("worker_activity_events").insert({
        worker_id: assignment.worker_id,
        event_type: activity.eventType,
        detail: activity.detail,
        metadata: {
          assignment_id: assignment.id,
          order_id: assignment.order_id,
          order_number: order?.order_number,
        },
      }),
      admin.from("order_change_history").insert({
        order_id: assignment.order_id,
        order_number: order?.order_number,
        change_type: "updated",
        new_data: {
          crm_event: activity.crmEvent,
          assignment_id: assignment.id,
          worker_id: assignment.worker_id,
          event_at: now,
        },
      }),
    ]);
  }
  if (input.responseStatus) {
    if (
      assignment.response_status !== "pending" &&
      assignment.response_status !== input.responseStatus
    )
      return Response.json(
        { error: "This assignment response has already been recorded." },
        { status: 409 },
      );
    const responseAlreadyRecorded =
      assignment.response_status === input.responseStatus;
    const { data: responseEmailState } = responseAlreadyRecorded
      ? await admin
          .from("worker_assignments")
          .select("response_email_id")
          .eq("id", assignment.id)
          .maybeSingle()
      : { data: null };
    if (responseAlreadyRecorded && responseEmailState?.response_email_id)
      return Response.json({ ok: true, responseStatus: input.responseStatus });

    if (!responseAlreadyRecorded) {
      const responseUpdate =
        input.responseStatus === "accepted"
          ? {
              response_status: "accepted",
              email_link_viewed_at: assignment.email_link_viewed_at || now,
              accepted_at: now,
              declined_at: null,
              response_updated_at: now,
            }
          : {
              response_status: "declined",
              email_link_viewed_at: assignment.email_link_viewed_at || now,
              declined_at: now,
              accepted_at: null,
              response_updated_at: now,
              access_revoked_at: now,
            };
      const { data: responded, error: responseError } = await admin
        .from("worker_assignments")
        .update(responseUpdate)
        .eq("id", id)
        .eq("response_status", "pending")
        .select("id")
        .maybeSingle();
      if (responseError)
        return Response.json({ error: responseError.message }, { status: 500 });
      if (!responded)
        return Response.json({
          ok: true,
          responseStatus: input.responseStatus,
        });

      const eventType =
        input.responseStatus === "accepted" ? "job_accepted" : "job_declined";
      const detail =
        input.responseStatus === "accepted"
          ? `${orderLabel} accepted by the contractor.`
          : `${orderLabel} declined by the contractor and released for reassignment.`;
      await Promise.all([
        admin.from("worker_activity_events").insert({
          worker_id: assignment.worker_id,
          event_type: eventType,
          detail,
          metadata: {
            assignment_id: assignment.id,
            order_id: assignment.order_id,
            order_number: order?.order_number,
          },
        }),
        admin.from("order_change_history").insert({
          order_id: assignment.order_id,
          order_number: order?.order_number,
          change_type: "updated",
          new_data: {
            crm_event:
              input.responseStatus === "accepted"
                ? "worker_assignment_accepted"
                : "worker_assignment_declined",
            assignment_id: assignment.id,
            worker_id: assignment.worker_id,
            response_status: input.responseStatus,
            event_at: now,
          },
        }),
      ]);
    }
    let emailWarning = "";
    if (order && worker) {
      try {
        const jobLink = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.thevulgo.es"}/worker/jobs/${assignment.access_token}`;
        const emailId = await sendWorkerAssignmentResponseEmail({
          workerId: assignment.worker_id,
          workerName: worker.full_name,
          workerEmail: worker.email,
          response: input.responseStatus,
          jobLink,
          orderNumber: order.order_number,
          scheduledAt: order.scheduled_at,
          address: order.address,
          area: order.area,
          city: order.city,
          postalCode: order.postal_code,
          total: Number(order.total),
          workerShare: Number(assignment.worker_share),
        });
        const emailAt = new Date().toISOString();
        const { error: responseEmailUpdateError } = await admin
          .from("worker_assignments")
          .update({
            response_email_kind: input.responseStatus,
            response_email_id: emailId,
            response_email_status: "sent",
            response_email_error: null,
            response_email_sent_at: emailAt,
            response_email_last_event_at: emailAt,
            response_email_delivered_at: null,
            response_email_opened_at: null,
            response_email_bounced_at: null,
          })
          .eq("id", assignment.id);
        if (responseEmailUpdateError)
          emailWarning =
            "Confirmation email was sent, but delivery tracking needs the latest database migration.";
        await Promise.all([
          admin.from("worker_activity_events").insert({
            worker_id: assignment.worker_id,
            event_type: `job_${input.responseStatus}_confirmation_email_sent`,
            detail: `${orderLabel} ${input.responseStatus} confirmation email accepted by Resend.`,
            metadata: {
              assignment_id: assignment.id,
              order_id: assignment.order_id,
              order_number: order.order_number,
              response_status: input.responseStatus,
              email_id: emailId,
            },
          }),
          admin.from("order_change_history").insert({
            order_id: assignment.order_id,
            order_number: order.order_number,
            change_type: "updated",
            new_data: {
              crm_event: "worker_response_email_sent",
              assignment_id: assignment.id,
              worker_id: assignment.worker_id,
              worker_name: worker.full_name,
              response_status: input.responseStatus,
              email_id: emailId,
              event_at: emailAt,
            },
          }),
          ...(responseEmailUpdateError
            ? [
                admin.from("worker_activity_events").insert({
                  worker_id: assignment.worker_id,
                  event_type: "job_response_email_tracking_unavailable",
                  detail: `${orderLabel} confirmation email was sent, but delivery tracking is waiting for the latest database migration.`,
                  metadata: {
                    assignment_id: assignment.id,
                    order_id: assignment.order_id,
                    order_number: order.order_number,
                    response_status: input.responseStatus,
                    email_id: emailId,
                  },
                }),
                admin.from("order_change_history").insert({
                  order_id: assignment.order_id,
                  order_number: order.order_number,
                  change_type: "updated",
                  new_data: {
                    crm_event: "worker_response_email_tracking_unavailable",
                    assignment_id: assignment.id,
                    worker_id: assignment.worker_id,
                    worker_name: worker.full_name,
                    response_status: input.responseStatus,
                    email_id: emailId,
                    event_at: emailAt,
                  },
                }),
              ]
            : []),
        ]);
      } catch (cause) {
        emailWarning =
          cause instanceof Error
            ? cause.message
            : "Response confirmation email could not be sent";
        await admin
          .from("worker_assignments")
          .update({
            response_email_kind: input.responseStatus,
            response_email_status: "failed",
            response_email_error: emailWarning,
          })
          .eq("id", assignment.id);
        await Promise.all([
          admin.from("worker_activity_events").insert({
            worker_id: assignment.worker_id,
            event_type: `job_${input.responseStatus}_confirmation_email_failed`,
            detail: `${orderLabel} response was saved, but its confirmation email failed: ${emailWarning}`,
            metadata: {
              assignment_id: assignment.id,
              order_id: assignment.order_id,
              order_number: order.order_number,
              response_status: input.responseStatus,
            },
          }),
          admin.from("order_change_history").insert({
            order_id: assignment.order_id,
            order_number: order.order_number,
            change_type: "updated",
            new_data: {
              crm_event: "worker_response_email_failed",
              assignment_id: assignment.id,
              worker_id: assignment.worker_id,
              worker_name: worker.full_name,
              response_status: input.responseStatus,
              error: emailWarning,
              event_at: new Date().toISOString(),
            },
          }),
        ]);
      }
    }
    return Response.json({
      ok: true,
      responseStatus: input.responseStatus,
      emailWarning,
    });
  }

  if (input.emailLinkViewed && !assignment.email_link_viewed_at) {
    const { data: viewed } = await admin
      .from("worker_assignments")
      .update({ email_link_viewed_at: now })
      .eq("id", id)
      .is("email_link_viewed_at", null)
      .select("id")
      .maybeSingle();
    if (viewed)
      await Promise.all([
        admin.from("worker_activity_events").insert({
          worker_id: assignment.worker_id,
          event_type: "job_email_link_opened",
          detail: `${orderLabel} protected assignment link opened by the contractor.`,
          metadata: {
            assignment_id: assignment.id,
            order_id: assignment.order_id,
            order_number: order?.order_number,
          },
        }),
        admin.from("order_change_history").insert({
          order_id: assignment.order_id,
          order_number: order?.order_number,
          change_type: "updated",
          new_data: {
            crm_event: "worker_assignment_link_opened",
            assignment_id: assignment.id,
            worker_id: assignment.worker_id,
            event_at: now,
          },
        }),
      ]);
  }
  if (input.status && assignment.response_status !== "accepted")
    return Response.json(
      { error: "Accept this assignment before updating job progress." },
      { status: 409 },
    );
  if (input.status === "completed") {
    const { count } = await admin
      .from("worker_job_photos")
      .select("id", { count: "exact", head: true })
      .eq("assignment_id", id)
      .eq("photo_type", "after");
    if (!count)
      return Response.json(
        {
          error:
            "Upload at least one after-work photo before completing the job.",
        },
        { status: 400 },
      );
  }
  const updates: Record<string, unknown> = {};
  if (input.status) updates.status = input.status;
  if (input.completionNotes !== undefined)
    updates.completion_notes = input.completionNotes;
  if (Object.keys(updates).length) {
    const { error } = await admin
      .from("worker_assignments")
      .update(updates)
      .eq("id", id);
    if (error) return Response.json({ error: error.message }, { status: 500 });
    const events: PromiseLike<unknown>[] = [];
    if (input.status && input.status !== assignment.status) {
      events.push(
        admin.from("worker_activity_events").insert({
          worker_id: assignment.worker_id,
          event_type: "job_status_changed",
          detail: `${orderLabel} status changed from ${assignment.status.replaceAll("_", " ")} to ${input.status.replaceAll("_", " ")}.`,
          metadata: {
            assignment_id: assignment.id,
            order_id: assignment.order_id,
            order_number: order?.order_number,
            previous_status: assignment.status,
            status: input.status,
          },
        }),
        admin.from("order_change_history").insert({
          order_id: assignment.order_id,
          order_number: order?.order_number,
          change_type: "updated",
          new_data: {
            crm_event: "worker_job_status_changed",
            assignment_id: assignment.id,
            worker_id: assignment.worker_id,
            previous_status: assignment.status,
            status: input.status,
            event_at: now,
          },
        }),
      );
    }
    if (
      input.completionNotes !== undefined &&
      input.completionNotes !== assignment.completion_notes
    ) {
      events.push(
        admin.from("worker_activity_events").insert({
          worker_id: assignment.worker_id,
          event_type: "job_completion_note_updated",
          detail: `${orderLabel} completion or issue note updated.`,
          metadata: {
            assignment_id: assignment.id,
            order_id: assignment.order_id,
            order_number: order?.order_number,
          },
        }),
        admin.from("order_change_history").insert({
          order_id: assignment.order_id,
          order_number: order?.order_number,
          change_type: "updated",
          new_data: {
            crm_event: "worker_completion_note_updated",
            assignment_id: assignment.id,
            worker_id: assignment.worker_id,
            note: input.completionNotes,
            event_at: now,
          },
        }),
      );
    }
    if (events.length) await Promise.all(events);
  }
  return Response.json({ ok: true });
}
