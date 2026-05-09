import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

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

      const locale = order.locale === "es" ? "es" : "en";
      const isEs = locale === "es";

      const scheduledDate = new Date(order.scheduled_at);
      const now = new Date();
      const diffMs = scheduledDate.getTime() - Date.now();
      const diffHours = diffMs / (1000 * 60 * 60);

      console.log("⏰ REMINDER CHECK:", {
        orderId: order.id,
        now,
        scheduledDate,
        diffHours,
        locale,
      });

      if (diffHours > 0 && diffHours <= 12) {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Madrid",
          dateStyle: "medium",
          timeStyle: "short",
        }).format(scheduledDate);

        const labels = {
          subject: isEs
            ? "Recordatorio: tu servicio está programado pronto — THEVULGO"
            : "Reminder: your service is scheduled soon — THEVULGO",

          title: isEs
            ? "Recordatorio: tu servicio se acerca"
            : "Reminder: your service is coming up",

          greeting: isEs
            ? `Hola ${order.full_name || "cliente"}, te recordamos que tu servicio está programado dentro de las próximas 12 horas.`
            : `Hi ${order.full_name || "client"}, this is a reminder that your service is scheduled within the next 12 hours.`,

          category: isEs ? "Categoría" : "Category",
          schedule: isEs ? "Horario" : "Schedule",
          address: isEs ? "Dirección" : "Address",

          changed: isEs
            ? "Si ha cambiado algo, responde a este email o contáctanos lo antes posible."
            : "If anything changed, please reply to this email or contact us as soon as possible.",

          footer: isEs
            ? "Precio claro. Sin sorpresas.<br/>Valencia y alrededores · Respuesta rápida"
            : "Clear pricing. No surprises.<br/>Valencia & nearby · Fast response",
        };

        const emailResult = await resend.emails.send({
          from: "TheVulgo <info@thevulgo.es>",
          to: [order.email],
          replyTo: "info@thevulgo.es",
          subject: labels.subject,
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
              ${labels.title}
            </div>

            <div style="margin-top:10px;font-size:14px;color:#666;line-height:1.6;">
              ${labels.greeting}
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding:0 30px 20px 30px;">
            <table width="100%" style="background:#fffbea;border:1px solid #facc15;border-radius:12px;">
              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">${labels.category}</td>
                <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                  ${order.category || "—"}
                </td>
              </tr>

              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">${labels.schedule}</td>
                <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                  ${formatted}
                </td>
              </tr>

              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">${labels.address}</td>
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
              ${labels.changed}
            </div>
          </td>
        </tr>

        <tr>
          <td style="background:#fafafa;padding:20px 30px;font-size:12px;color:#777;line-height:1.6;">
            ${labels.footer}
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
          locale,
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