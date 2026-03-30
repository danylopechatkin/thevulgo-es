import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

function makeReferralCode(fullName: string) {
  const safe = (fullName || "CLIENT")
    .trim()
    .split(" ")
    .filter(Boolean);

  const lastName = safe.length > 1 ? safe[safe.length - 1] : safe[0] || "CLIENT";

  return `${lastName.toUpperCase()}10`;
}

function formatMadridFromUTC(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
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
      }
    );

    const {
      data: { user },
    } = await authSupabase.auth.getUser();

    if (!user || user.email !== process.env.ADMIN_EMAIL) {
      return Response.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { orderId } = await req.json();

    if (!orderId) {
      return Response.json(
        { success: false, error: "Missing orderId" },
        { status: 400 }
      );
    }

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single();

    if (orderError || !order) {
      return Response.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    const referralCode = makeReferralCode(order.full_name || "CLIENT");
    const referralLink = `https://thevulgo.es/estimate?ref=${encodeURIComponent(referralCode)}`;
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(referralLink)}`;

    const servicesHtml = Array.isArray(order.services)
      ? order.services
          .map(
            (item: any) => `
<tr>
  <td style="padding:10px 15px;font-size:13px;color:#000;">
    ${item.label} (${item.qty} × €${item.price})
  </td>
  <td style="padding:10px 15px;text-align:right;font-size:13px;font-weight:700;color:#000;">
    €${Number(item.subtotal || 0).toFixed(2)}
  </td>
</tr>
`
          )
          .join("")
      : "";

    if (order.email) {
      const emailResult = await resend.emails.send({
        from: "TheVulgo <info@thevulgo.es>",
        to: [order.email],
        replyTo: "info@thevulgo.es",
        subject: "Your order is complete — TheVulgo",
        html: `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 0;font-family:Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#000;padding:20px 30px;color:#fff;font-weight:800;font-size:20px;">
            THEVULGO · Valencia
          </td>
        </tr>

        <tr>
          <td style="padding:30px;">
            <div style="font-size:24px;font-weight:800;color:#000;">Order completed</div>
            <div style="margin-top:10px;font-size:14px;color:#666;line-height:1.7;">
              Hi ${order.full_name || "client"}, thank you for choosing THEVULGO.
              Your service has been completed successfully.
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding:0 30px 30px 30px;">
            <table width="100%" style="background:#fffbea;border:1px solid #facc15;border-radius:12px;">
              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">Order</td>
                <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                  ${order.order_number ? `TVG-${String(order.order_number).padStart(4, "0")}` : order.id}
                </td>
              </tr>

              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">Category</td>
                <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                  ${order.category || "—"}
                </td>
              </tr>

              ${
                order.scheduled_at
                  ? `
              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">Schedule</td>
                <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                  ${formatMadridFromUTC(order.scheduled_at)}
                </td>
              </tr>
              `
                  : ""
              }

              ${servicesHtml}

              <tr>
                <td style="padding:15px;font-size:13px;color:#555;">Net</td>
                <td style="padding:15px;text-align:right;font-size:13px;">
                  €${Number(order.subtotal || 0).toFixed(2)}
                </td>
              </tr>

              <tr>
                <td style="padding:15px;font-size:13px;color:#555;">IVA (21%)</td>
                <td style="padding:15px;text-align:right;font-size:13px;">
                  €${Number(order.iva || 0).toFixed(2)}
                </td>
              </tr>

              <tr>
                <td style="padding:15px;border-top:1px solid #ddd;font-weight:800;">Total</td>
                <td style="padding:15px;border-top:1px solid #ddd;text-align:right;font-weight:800;">
                  €${Number(order.total || 0).toFixed(2)}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:0 30px 30px 30px;">
            <table width="100%" style="background:#fff8db;border:1px solid #facc15;border-radius:14px;">
              <tr>
                <td style="padding:20px;">
                  <div style="font-size:18px;font-weight:800;color:#000;">Share with a friend</div>
                  <div style="margin-top:10px;font-size:14px;color:#555;line-height:1.7;">
                    Your personal referral code:
                  </div>
                  <div style="margin-top:8px;font-size:28px;font-weight:800;color:#000;">
                    ${referralCode}
                  </div>
                  <div style="margin-top:12px;font-size:14px;color:#555;line-height:1.7;">
                    Send this code to a friend. They get <b>10% off</b> their first order.
                    You also get <b>10% off</b> your next service.
                  </div>
                  <div style="margin-top:18px;">
                    <img src="${qrImageUrl}" alt="Referral QR code" width="160" height="160" style="display:block;border-radius:10px;" />
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background:#fafafa;padding:20px 30px;font-size:12px;color:#777;line-height:1.6;">
            Thank you for choosing THEVULGO.<br/>
            Clear pricing. No surprises.<br/>
            Valencia & nearby · Fast response
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`,
      });

      console.log("📧 COMPLETED EMAIL RESULT:", {
        orderId: order.id,
        success: !emailResult.error,
        error: emailResult.error,
      });

      if (emailResult.error) {
        return Response.json(
          { success: false, error: "Failed to send completed email" },
          { status: 500 }
        );
      }
    }

    const completedAt = new Date().toISOString();

    const { error: updateError } = await supabase
      .from("orders")
      .update({
        status: "done",
        completed_email_sent: true,
        referral_code: referralCode,
        completed_at: completedAt,
      })
      .eq("id", order.id);

    if (updateError) {
      return Response.json(
        { success: false, error: "Failed to update order" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      referralCode,
      completedAt,
    });
  } catch (error: any) {
    console.error("❌ COMPLETE ORDER ERROR:", {
      message: error?.message,
      stack: error?.stack,
    });

    return Response.json(
      { success: false, error: "Failed to complete order" },
      { status: 500 }
    );
  }
}