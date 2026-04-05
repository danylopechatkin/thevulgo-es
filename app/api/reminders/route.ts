import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import {
  getMadridNow,
  formatMadridDateTime,
} from "@/lib/time";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*")
      .eq("status", "new")
      .eq("reminder_sent", false);

    if (error) {
      return Response.json(
        { success: false, error: "Failed to load orders" },
        { status: 500 }
      );
    }

    
    const sent: string[] = [];

    for (const order of orders || []) {
      if (!order.scheduled_at || !order.email) continue;

      const scheduledDate = new Date(order.scheduled_at);
      const now = new Date();
      const diffMs = scheduledDate.getTime() - Date.now();
      const diffHours = diffMs / (1000 * 60 * 60);

      console.log("⏰ REMINDER CHECK:", {
  orderId: order.id,
  now,
  scheduledDate,
  diffHours,
});

      if (diffHours > 0 && diffHours <= 12) {
        const formatted = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Madrid",
  dateStyle: "medium",
  timeStyle: "short",
}).format(scheduledDate);

        const emailResult = await resend.emails.send({
          from: "TheVulgo <info@thevulgo.es>",
          to: [order.email],
          replyTo: "info@thevulgo.es",
          subject: "Reminder: your service is scheduled soon — TheVulgo",
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
                        <div style="font-size:22px;font-weight:800;color:#000;">
                          Reminder: your service is coming up
                        </div>

                        <div style="margin-top:10px;font-size:14px;color:#666;line-height:1.6;">
                          Hi ${order.full_name || "client"}, this is a reminder that your service is scheduled within the next 12 hours.
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 30px 20px 30px;">
                        <table width="100%" style="background:#fffbea;border:1px solid #facc15;border-radius:12px;">
                          <tr>
                            <td style="padding:15px;font-size:12px;color:#666;">Category</td>
                            <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                              ${order.category || "—"}
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:15px;font-size:12px;color:#666;">Schedule</td>
                            <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                              ${formatted}
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:15px;font-size:12px;color:#666;">Address</td>
                            <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                              ${order.city || ""}, ${order.area || ""}, ${order.address || ""}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 30px 30px 30px;">
                        <div style="font-size:14px;color:#555;line-height:1.6;">
                          If anything changed, please reply to this email or contact us as soon as possible.
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="background:#fafafa;padding:20px 30px;font-size:12px;color:#777;line-height:1.6;">
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

        console.log("📧 REMINDER EMAIL RESULT:", {
          orderId: order.id,
          success: !emailResult.error,
          error: emailResult.error,
        });

        if (!emailResult.error) {
          await supabase
            .from("orders")
            .update({
              reminder_sent: true,
              status: "in_progress",
            })
            .eq("id", order.id);

          sent.push(order.id);
        }
      }
    }

    return Response.json({
      success: true,
      sentCount: sent.length,
      sentOrders: sent,
    });
  } catch (error: any) {
    console.error("❌ REMINDER JOB ERROR:", {
      message: error?.message,
      stack: error?.stack,
    });

    return Response.json(
      { success: false, error: "Reminder job failed" },
      { status: 500 }
    );
  }
}