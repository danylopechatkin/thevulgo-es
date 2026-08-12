import { getAdminSession } from "@/lib/admin-auth";
import {
  sendWorkerAssignmentEmail,
  sendWorkerUnassignmentEmail,
} from "@/lib/emails";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { workerSupportsCity } from "@/lib/crmCities";
const schema = z.object({
  orderId: z.string().uuid(),
  workerId: z.string().uuid(),
  replaceExisting: z.boolean().default(false),
});
const resendSchema = z.object({ assignmentId: z.string().uuid() });
const unassignSchema = z.object({ assignmentId: z.string().uuid() });

export async function GET() {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const database = getSupabaseAdmin();
  const { data, error } = await database
    .from("worker_assignments")
    .select(
      "id, order_id, worker_id, access_token, status, response_status, worker_share, assigned_at, email_link_viewed_at, accepted_at, declined_at, decline_reason, worker_email_status, worker_email_delivery_status, worker_notified_at, worker_email_last_event_at, worker_email_delivered_at, worker_email_opened_at, worker_email_error, response_email_kind, response_email_status, response_email_sent_at, response_email_last_event_at, response_email_delivered_at, response_email_opened_at, response_email_error, access_revoked_at, worker_profiles(full_name, email)",
    )
    .order("assigned_at", { ascending: false })
    .limit(500);
  return error
    ? Response.json({ error: error.message }, { status: 500 })
    : Response.json({ assignments: data || [] });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json({ error: "Invalid assignment" }, { status: 400 });
  const database = getSupabaseAdmin();
  const { data: order, error: orderError } = await database
    .from("orders")
    .select(
      "order_number, full_name, address, area, city, postal_code, scheduled_at, category, services, total",
    )
    .eq("id", parsed.data.orderId)
    .single();
  if (orderError)
    return Response.json({ error: orderError.message }, { status: 500 });
  const { data: worker, error: workerError } = await database
    .from("worker_profiles")
    .select("user_id, email, full_name, contractor_status, primary_city, service_cities")
    .eq("user_id", parsed.data.workerId)
    .eq("contractor_status", "active")
    .maybeSingle();
  if (workerError || !worker)
    return Response.json(
      { error: workerError?.message || "Worker is not active" },
      { status: 400 },
    );
  if (!workerSupportsCity(worker.primary_city, worker.service_cities, order.city)) {
    return Response.json(
      { error: `${worker.full_name} is not assigned to ${order.city}. Update the worker city first.` },
      { status: 409 },
    );
  }
  const { data: currentAssignment } = await database
    .from("worker_assignments")
    .select("id, worker_id, response_status, worker_profiles(full_name, email)")
    .eq("order_id", parsed.data.orderId)
    .is("access_revoked_at", null)
    .in("response_status", ["pending", "accepted"])
    .maybeSingle();
  if (currentAssignment) {
    if (
      !parsed.data.replaceExisting ||
      currentAssignment.worker_id === parsed.data.workerId
    )
      return Response.json(
        {
          error:
            currentAssignment.worker_id === parsed.data.workerId
              ? "This order is already assigned to this worker."
              : "This order already has an active contractor assignment.",
        },
        { status: 409 },
      );

    const revokedAt = new Date().toISOString();
    const { error: revokeError } = await database
      .from("worker_assignments")
      .update({ access_revoked_at: revokedAt })
      .eq("id", currentAssignment.id)
      .is("access_revoked_at", null);
    if (revokeError)
      return Response.json({ error: revokeError.message }, { status: 500 });

    const previousWorker = Array.isArray(currentAssignment.worker_profiles)
      ? currentAssignment.worker_profiles[0]
      : currentAssignment.worker_profiles;
    await Promise.all([
      database.from("worker_activity_events").insert({
        worker_id: currentAssignment.worker_id,
        event_type: "job_reassigned",
        detail: `Access to order TVG-ES-${String(order.order_number).padStart(5, "0")} was closed because the job was reassigned.`,
        metadata: {
          assignment_id: currentAssignment.id,
          order_id: parsed.data.orderId,
          replacement_worker_id: parsed.data.workerId,
        },
      }),
      database.from("order_change_history").insert({
        order_id: parsed.data.orderId,
        order_number: order.order_number,
        changed_by: session.user.id,
        change_type: "updated",
        new_data: {
          crm_event: "worker_reassigned",
          previous_assignment_id: currentAssignment.id,
          previous_worker_id: currentAssignment.worker_id,
          previous_worker_name: previousWorker?.full_name || null,
          previous_worker_email: previousWorker?.email || null,
          replacement_worker_id: parsed.data.workerId,
          event_at: revokedAt,
        },
      }),
    ]);
    if (previousWorker) {
      try {
        const emailId = await sendWorkerUnassignmentEmail({
          workerId: currentAssignment.worker_id,
          workerName: previousWorker.full_name,
          workerEmail: previousWorker.email,
          assignmentId: currentAssignment.id,
          orderNumber: Number(order.order_number),
          reason: "reassigned",
        });
        await Promise.all([
          database.from("worker_activity_events").insert({
            worker_id: currentAssignment.worker_id,
            event_type: "job_unassignment_email_sent",
            detail: `Assignment-removal email for TVG-ES-${String(order.order_number).padStart(5, "0")} accepted by Resend.`,
            metadata: { assignment_id: currentAssignment.id, email_id: emailId },
          }),
          database.from("order_change_history").insert({
            order_id: parsed.data.orderId,
            order_number: order.order_number,
            changed_by: session.user.id,
            change_type: "updated",
            new_data: {
              crm_event: "worker_unassignment_email_sent",
              assignment_id: currentAssignment.id,
              worker_id: currentAssignment.worker_id,
              worker_name: previousWorker.full_name,
              email_id: emailId,
              event_at: new Date().toISOString(),
            },
          }),
        ]);
      } catch (cause) {
        const message = cause instanceof Error ? cause.message : "Email failed";
        await database.from("order_change_history").insert({
          order_id: parsed.data.orderId,
          order_number: order.order_number,
          changed_by: session.user.id,
          change_type: "updated",
          new_data: {
            crm_event: "worker_unassignment_email_failed",
            assignment_id: currentAssignment.id,
            worker_id: currentAssignment.worker_id,
            worker_name: previousWorker.full_name,
            error: message,
            event_at: new Date().toISOString(),
          },
        });
      }
    }
  }
  const workerShare = Number((Number(order.total) * 0.5).toFixed(2));
  const { data: previousSameWorkerAssignment } = await database
    .from("worker_assignments")
    .select("id")
    .eq("order_id", parsed.data.orderId)
    .eq("worker_id", parsed.data.workerId)
    .not("access_revoked_at", "is", null)
    .order("assigned_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  const assignmentWrite = previousSameWorkerAssignment
    ? database
        .from("worker_assignments")
        .update({
          access_token: randomUUID(),
          status: "assigned",
          worker_share: workerShare,
          assigned_at: new Date().toISOString(),
          en_route_at: null,
          arrived_at: null,
          started_at: null,
          completed_at: null,
          completion_notes: "",
          response_status: "pending",
          email_link_viewed_at: null,
          accepted_at: null,
          declined_at: null,
          response_updated_at: null,
          decline_reason: "",
          worker_email_status: "pending",
          worker_email_id: null,
          worker_email_error: null,
          worker_notified_at: null,
          worker_email_delivery_status: null,
          worker_email_last_event_at: null,
          worker_email_delivered_at: null,
          worker_email_opened_at: null,
          worker_email_bounced_at: null,
          response_email_kind: null,
          response_email_id: null,
          response_email_status: null,
          response_email_error: null,
          response_email_sent_at: null,
          response_email_last_event_at: null,
          response_email_delivered_at: null,
          response_email_opened_at: null,
          response_email_bounced_at: null,
          access_revoked_at: null,
        })
        .eq("id", previousSameWorkerAssignment.id)
        .select("id, access_token")
        .single()
    : database
        .from("worker_assignments")
        .insert({
          order_id: parsed.data.orderId,
          worker_id: parsed.data.workerId,
          worker_share: workerShare,
        })
        .select("id, access_token")
        .single();
  const { data, error } = await assignmentWrite;
  if (error) {
    if (currentAssignment && parsed.data.replaceExisting)
      await database
        .from("worker_assignments")
        .update({ access_revoked_at: null })
        .eq("id", currentAssignment.id);
    return Response.json({ error: error.message }, { status: 500 });
  }
  const link = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.thevulgo.es"}/worker/jobs/${data.access_token}`;
  const assignedAt = new Date().toISOString();
  await Promise.all([
    database.from("worker_activity_events").insert({
      worker_id: worker.user_id,
      event_type: "job_assigned",
      detail: `Order TVG-ES-${String(order.order_number).padStart(5, "0")} assigned to ${worker.full_name}.`,
      metadata: {
        assignment_id: data.id,
        order_id: parsed.data.orderId,
        order_number: order.order_number,
        worker_share: workerShare,
      },
    }),
    database.from("order_change_history").insert({
      order_id: parsed.data.orderId,
      order_number: order.order_number,
      changed_by: session.user.id,
      change_type: "updated",
      new_data: {
        crm_event: "worker_assigned",
        assignment_id: data.id,
        worker_id: worker.user_id,
        worker_name: worker.full_name,
        worker_email: worker.email,
        response_status: "pending",
        worker_share: workerShare,
        assignment_reactivated: Boolean(previousSameWorkerAssignment),
        event_at: assignedAt,
      },
    }),
  ]);
  let emailWarning = "";
  try {
    const emailId = await sendWorkerAssignmentEmail({
      workerId: worker.user_id,
      workerName: worker.full_name,
      workerEmail: worker.email,
      jobLink: link,
      orderNumber: order.order_number,
      customerName: order.full_name,
      address: order.address,
      area: order.area,
      city: order.city,
      postalCode: order.postal_code,
      scheduledAt: order.scheduled_at,
      category: order.category,
      services: Array.isArray(order.services) ? order.services : [],
      total: Number(order.total),
      workerShare,
    });
    await database
      .from("worker_assignments")
      .update({
        worker_email_status: "sent",
        worker_email_id: emailId,
        worker_notified_at: new Date().toISOString(),
        worker_email_error: null,
      })
      .eq("id", data.id);
    await Promise.all([
      database.from("worker_activity_events").insert({
        worker_id: worker.user_id,
        event_type: "job_email_sent",
        detail: `Assignment email for TVG-ES-${String(order.order_number).padStart(5, "0")} accepted by Resend.`,
        metadata: {
          assignment_id: data.id,
          order_id: parsed.data.orderId,
          email_id: emailId,
        },
      }),
      database.from("order_change_history").insert({
        order_id: parsed.data.orderId,
        order_number: order.order_number,
        changed_by: session.user.id,
        change_type: "updated",
        new_data: {
          crm_event: "worker_assignment_email_sent",
          assignment_id: data.id,
          worker_name: worker.full_name,
          worker_email: worker.email,
          email_id: emailId,
          event_at: new Date().toISOString(),
        },
      }),
    ]);
  } catch (cause) {
    emailWarning =
      cause instanceof Error
        ? cause.message
        : "Worker email could not be delivered";
    await database
      .from("worker_assignments")
      .update({
        worker_email_status: "failed",
        worker_email_error: emailWarning,
      })
      .eq("id", data.id);
    await Promise.all([
      database.from("worker_activity_events").insert({
        worker_id: worker.user_id,
        event_type: "job_email_failed",
        detail: `Assignment email for TVG-ES-${String(order.order_number).padStart(5, "0")} failed: ${emailWarning}`,
        metadata: {
          assignment_id: data.id,
          order_id: parsed.data.orderId,
        },
      }),
      database.from("order_change_history").insert({
        order_id: parsed.data.orderId,
        order_number: order.order_number,
        changed_by: session.user.id,
        change_type: "updated",
        new_data: {
          crm_event: "worker_assignment_email_failed",
          assignment_id: data.id,
          worker_name: worker.full_name,
          worker_email: worker.email,
          error: emailWarning,
          event_at: new Date().toISOString(),
        },
      }),
    ]);
  }
  return Response.json({
    link,
    emailWarning,
    assignment: {
      id: data.id,
      order_id: parsed.data.orderId,
      worker_id: worker.user_id,
      access_token: data.access_token,
      status: "assigned",
      response_status: "pending",
      worker_share: workerShare,
      assigned_at: assignedAt,
      worker_email_status: emailWarning ? "failed" : "sent",
      worker_notified_at: emailWarning ? null : assignedAt,
      access_revoked_at: null,
      worker_profiles: {
        full_name: worker.full_name,
        email: worker.email,
      },
    },
  });
}

export async function DELETE(request: Request) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = unassignSchema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json({ error: "Invalid assignment" }, { status: 400 });

  const database = getSupabaseAdmin();
  const { data: assignment, error } = await database
    .from("worker_assignments")
    .select(
      "id, order_id, worker_id, access_revoked_at, worker_profiles(full_name, email), orders(order_number)",
    )
    .eq("id", parsed.data.assignmentId)
    .maybeSingle();
  if (error || !assignment)
    return Response.json(
      { error: error?.message || "Assignment not found" },
      { status: 404 },
    );
  if (assignment.access_revoked_at)
    return Response.json({ ok: true, alreadyUnassigned: true });

  const revokedAt = new Date().toISOString();
  const { error: revokeError } = await database
    .from("worker_assignments")
    .update({ access_revoked_at: revokedAt })
    .eq("id", assignment.id)
    .is("access_revoked_at", null);
  if (revokeError)
    return Response.json({ error: revokeError.message }, { status: 500 });

  const relatedOrder = Array.isArray(assignment.orders)
    ? assignment.orders[0]
    : assignment.orders;
  const workerProfile = Array.isArray(assignment.worker_profiles)
    ? assignment.worker_profiles[0]
    : assignment.worker_profiles;
  const orderNumber = Number(relatedOrder?.order_number || 0);
  await Promise.all([
    database.from("worker_activity_events").insert({
      worker_id: assignment.worker_id,
      event_type: "job_unassigned",
      detail: `Assignment for TVG-ES-${String(orderNumber).padStart(5, "0")} was removed by an administrator.`,
      metadata: {
        assignment_id: assignment.id,
        order_id: assignment.order_id,
      },
    }),
    database.from("order_change_history").insert({
      order_id: assignment.order_id,
      order_number: orderNumber,
      changed_by: session.user.id,
      change_type: "updated",
      new_data: {
        crm_event: "worker_unassigned",
        assignment_id: assignment.id,
        worker_id: assignment.worker_id,
        worker_name: workerProfile?.full_name || null,
        worker_email: workerProfile?.email || null,
        event_at: revokedAt,
      },
    }),
  ]);

  let emailWarning = "";
  if (workerProfile) {
    try {
      const emailId = await sendWorkerUnassignmentEmail({
        workerId: assignment.worker_id,
        workerName: workerProfile.full_name,
        workerEmail: workerProfile.email,
        assignmentId: assignment.id,
        orderNumber,
        reason: "unassigned",
      });
      await Promise.all([
        database.from("worker_activity_events").insert({
          worker_id: assignment.worker_id,
          event_type: "job_unassignment_email_sent",
          detail: `Assignment-removal email for TVG-ES-${String(orderNumber).padStart(5, "0")} accepted by Resend.`,
          metadata: { assignment_id: assignment.id, email_id: emailId },
        }),
        database.from("order_change_history").insert({
          order_id: assignment.order_id,
          order_number: orderNumber,
          changed_by: session.user.id,
          change_type: "updated",
          new_data: {
            crm_event: "worker_unassignment_email_sent",
            assignment_id: assignment.id,
            worker_id: assignment.worker_id,
            worker_name: workerProfile.full_name,
            email_id: emailId,
            event_at: new Date().toISOString(),
          },
        }),
      ]);
    } catch (cause) {
      emailWarning =
        cause instanceof Error ? cause.message : "Removal email failed";
      await database.from("order_change_history").insert({
        order_id: assignment.order_id,
        order_number: orderNumber,
        changed_by: session.user.id,
        change_type: "updated",
        new_data: {
          crm_event: "worker_unassignment_email_failed",
          assignment_id: assignment.id,
          worker_id: assignment.worker_id,
          worker_name: workerProfile.full_name,
          error: emailWarning,
          event_at: new Date().toISOString(),
        },
      });
    }
  }

  return Response.json({
    ok: true,
    assignmentId: assignment.id,
    emailWarning: emailWarning || null,
  });
}

export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = resendSchema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json({ error: "Invalid assignment" }, { status: 400 });

  const database = getSupabaseAdmin();
  const { data: assignment, error: assignmentError } = await database
    .from("worker_assignments")
    .select(
      "id, order_id, worker_id, access_token, worker_share, response_status, access_revoked_at",
    )
    .eq("id", parsed.data.assignmentId)
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

  const [orderResult, workerResult] = await Promise.all([
    database
      .from("orders")
      .select(
        "order_number, full_name, address, area, city, postal_code, scheduled_at, category, services, total",
      )
      .eq("id", assignment.order_id)
      .single(),
    database
      .from("worker_profiles")
      .select("user_id, email, full_name")
      .eq("user_id", assignment.worker_id)
      .single(),
  ]);
  const order = orderResult.data;
  const worker = workerResult.data;
  if (orderResult.error || !order)
    return Response.json(
      { error: orderResult.error?.message || "Order not found" },
      { status: 404 },
    );
  if (workerResult.error || !worker)
    return Response.json(
      { error: workerResult.error?.message || "Worker not found" },
      { status: 404 },
    );

  const link = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.thevulgo.es"}/worker/jobs/${assignment.access_token}`;
  const eventAt = new Date().toISOString();
  try {
    const emailId = await sendWorkerAssignmentEmail({
      workerId: worker.user_id,
      workerName: worker.full_name,
      workerEmail: worker.email,
      jobLink: link,
      orderNumber: order.order_number,
      customerName: order.full_name,
      address: order.address,
      area: order.area,
      city: order.city,
      postalCode: order.postal_code,
      scheduledAt: order.scheduled_at,
      category: order.category,
      services: Array.isArray(order.services) ? order.services : [],
      total: Number(order.total),
      workerShare: Number(assignment.worker_share),
    });
    const { error: updateError } = await database
      .from("worker_assignments")
      .update({
        worker_email_status: "sent",
        worker_email_id: emailId,
        worker_email_delivery_status: "sent",
        worker_email_last_event_at: eventAt,
        worker_email_delivered_at: null,
        worker_email_opened_at: null,
        worker_email_bounced_at: null,
        worker_notified_at: eventAt,
        worker_email_error: null,
      })
      .eq("id", assignment.id);
    if (updateError) throw new Error(updateError.message);
    await Promise.all([
      database.from("worker_activity_events").insert({
        worker_id: worker.user_id,
        event_type: "job_email_resent",
        detail: `Assignment email for TVG-ES-${String(order.order_number).padStart(5, "0")} resent by an administrator.`,
        metadata: {
          assignment_id: assignment.id,
          order_id: assignment.order_id,
          email_id: emailId,
        },
      }),
      database.from("order_change_history").insert({
        order_id: assignment.order_id,
        order_number: order.order_number,
        changed_by: session.user.id,
        change_type: "updated",
        new_data: {
          crm_event: "worker_assignment_email_resent",
          assignment_id: assignment.id,
          worker_name: worker.full_name,
          worker_email: worker.email,
          email_id: emailId,
          event_at: eventAt,
        },
      }),
    ]);
    return Response.json({ ok: true, link });
  } catch (cause) {
    const error =
      cause instanceof Error
        ? cause.message
        : "Worker email could not be delivered";
    await database
      .from("worker_assignments")
      .update({
        worker_email_status: "failed",
        worker_email_error: error,
      })
      .eq("id", assignment.id);
    await Promise.all([
      database.from("worker_activity_events").insert({
        worker_id: worker.user_id,
        event_type: "job_email_failed",
        detail: `Assignment email for TVG-ES-${String(order.order_number).padStart(5, "0")} failed during resend: ${error}`,
        metadata: {
          assignment_id: assignment.id,
          order_id: assignment.order_id,
        },
      }),
      database.from("order_change_history").insert({
        order_id: assignment.order_id,
        order_number: order.order_number,
        changed_by: session.user.id,
        change_type: "updated",
        new_data: {
          crm_event: "worker_assignment_email_failed",
          assignment_id: assignment.id,
          worker_name: worker.full_name,
          worker_email: worker.email,
          error,
          event_at: new Date().toISOString(),
        },
      }),
    ]);
    return Response.json({ error }, { status: 502 });
  }
}
