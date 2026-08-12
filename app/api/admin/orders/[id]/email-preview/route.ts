import { getAdminSession } from "@/lib/admin-auth";
import {
  renderCompletedOrderEmail,
  renderCustomerOrderConfirmation,
} from "@/lib/emails";
import { orderRowToEmailData } from "@/lib/order-email-data";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const admin = await getAdminSession();
  if (!admin) return new Response("Unauthorized", { status: 401 });

  const { id } = await context.params;
  const database = getSupabaseAdmin();
  const { data: order, error } = await database
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !order) return new Response("Order not found", { status: 404 });

  const replyTo =
    process.env.EMAIL_REPLY_TO || process.env.BUSINESS_NOTIFICATION_EMAIL;
  if (!replyTo)
    return new Response("Email reply address is not configured", {
      status: 503,
    });

  const completed =
    new URL(request.url).searchParams.get("kind") === "completed";
  const storedEmailId = completed
    ? order.completed_email_id
    : order.customer_email_id;
  let html: string | null = null;
  if (storedEmailId && process.env.RESEND_API_KEY) {
    const retrieved = await new Resend(process.env.RESEND_API_KEY).emails.get(
      storedEmailId,
    );
    html = retrieved.data?.html || null;
  }
  if (!html) {
    const emailData = orderRowToEmailData(order, "manual");
    html = completed
      ? renderCompletedOrderEmail(
          { ...emailData, paymentMethod: order.payment_method },
          replyTo,
        ).html
      : renderCustomerOrderConfirmation(emailData, replyTo).html;
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
