import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { sendCompletedOrderEmail } from "@/lib/emails";
import { marketFromCity } from "@/lib/cities";
import { orderRowToEmailData } from "@/lib/order-email-data";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

function makeReferralCode(fullName: string, orderNumber: number) {
  const parts = (fullName || "CLIENT").trim().split(/\s+/).filter(Boolean);
  const surname = parts.at(-1) || "CLIENT";
  const safe = surname
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase() || "CLIENT";
  return `${safe}10-${String(orderNumber).padStart(5, "0")}`;
}

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const authSupabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set() {},
          remove() {},
        },
      },
    );
    const {
      data: { user },
    } = await authSupabase.auth.getUser();
    if (!user || user.email !== process.env.ADMIN_EMAIL) {
      return Response.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { orderId } = await req.json();
    if (!orderId) {
      return Response.json(
        { success: false, error: "Missing orderId" },
        { status: 400 },
      );
    }

    const database = getSupabaseAdmin();
    const { data: order, error: orderError } = await database
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single();
    if (orderError || !order) {
      return Response.json(
        { success: false, error: "Order not found" },
        { status: 404 },
      );
    }

    const completedAt = order.completed_at || new Date().toISOString();
    const referralCode =
      order.referral_code ||
      makeReferralCode(order.full_name || "CLIENT", Number(order.order_number));

    // Save completion first. A mail-provider failure must never lose the job state.
    const { error: completionError } = await database
      .from("orders")
      .update({
        status: "completed",
        completed_at: completedAt,
        referral_code: referralCode,
        completed_email_status: order.email
          ? order.completed_email_id
            ? order.completed_email_status || "sent"
            : "sending"
          : "not_required",
        completed_email_sent: Boolean(order.completed_email_id),
        completed_email_error: null,
      })
      .eq("id", order.id);
    if (completionError) {
      return Response.json(
        { success: false, error: "Failed to update order" },
        { status: 500 },
      );
    }

    // Idempotent retry: once an email id is stored, never send a duplicate.
    if (!order.email || order.completed_email_id) {
      return Response.json({
        success: true,
        referralCode,
        completedAt,
        emailId: order.completed_email_id || null,
        alreadySent: Boolean(order.completed_email_id),
      });
    }

    try {
      const locale = String(order.locale || "es").toLowerCase().startsWith("es")
        ? "es"
        : "en";
      const referralLink = new URL(
        `/${locale}/estimate`,
        "https://www.thevulgo.es",
      );
      referralLink.searchParams.set("ref", referralCode);
      referralLink.searchParams.set("market", marketFromCity(order.city));
      const emailId = await sendCompletedOrderEmail({
        ...orderRowToEmailData(order, "manual"),
        paymentMethod: order.payment_method,
        referralCode,
        referralLink: referralLink.toString(),
      });
      const sentAt = new Date().toISOString();
      const { error: emailUpdateError } = await database
        .from("orders")
        .update({
          completed_email_id: emailId,
          completed_email_status: "sent",
          completed_email_sent: true,
          completed_email_delivery_status: "sent",
          completed_email_last_event_at: sentAt,
          completed_email_error: null,
        })
        .eq("id", order.id);
      if (emailUpdateError) throw new Error(emailUpdateError.message);

      return Response.json({
        success: true,
        referralCode,
        completedAt,
        emailId,
      });
    } catch (emailError) {
      const message =
        emailError instanceof Error ? emailError.message : "Email delivery failed";
      await database
        .from("orders")
        .update({
          completed_email_status: "failed",
          completed_email_sent: false,
          completed_email_error: message,
        })
        .eq("id", order.id);
      return Response.json(
        { success: false, error: "Failed to send completed email" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Complete order error", error);
    return Response.json(
      { success: false, error: "Failed to complete order" },
      { status: 500 },
    );
  }
}
