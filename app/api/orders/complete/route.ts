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

    const locale = order.locale === "es" ? "es" : "en";
    const isEs = locale === "es";

    const labels = {
      subject: isEs
        ? "Tu pedido está completado — THEVULGO"
        : "Your order is complete — THEVULGO",

      title: isEs ? "Pedido completado" : "Order completed",

      greeting: isEs
        ? `Hola ${order.full_name || "cliente"}, gracias por elegir THEVULGO. Tu servicio se ha completado correctamente.`
        : `Hi ${order.full_name || "client"}, thank you for choosing THEVULGO. Your service has been completed successfully.`,

      order: isEs ? "Pedido" : "Order",
      category: isEs ? "Categoría" : "Category",
      schedule: isEs ? "Horario" : "Schedule",
      net: isEs ? "Base imponible" : "Net",
      total: "Total",

      referralTitle: isEs ? "Comparte con un amigo" : "Share with a friend",
      referralCode: isEs ? "Tu código personal de recomendación:" : "Your personal referral code:",

      referralText: isEs
        ? "Envía este código a un amigo. Recibirá un 10% de descuento en su primer pedido. Tú también recibirás un 10% de descuento en tu próximo servicio."
        : "Send this code to a friend. They get 10% off their first order. You also get 10% off your next service.",

      footer: isEs
        ? "Gracias por elegir THEVULGO.<br/>Precio claro. Sin sorpresas.<br/>Valencia y alrededores · Respuesta rápida"
        : "Thank you for choosing THEVULGO.<br/>Clear pricing. No surprises.<br/>Valencia & nearby · Fast response",
    };

    const referralCode = makeReferralCode(order.full_name || "CLIENT");

    const referralLink =
      locale === "es"
        ? `https://www.thevulgo.es/es/estimate?ref=${encodeURIComponent(referralCode)}`
        : `https://www.thevulgo.es/en/estimate?ref=${encodeURIComponent(referralCode)}`;

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
            <div style="font-size:24px;font-weight:800;color:#000;">
              ${labels.title}
            </div>
            <div style="margin-top:10px;font-size:14px;color:#666;line-height:1.7;">
              ${labels.greeting}
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding:0 30px 30px 30px;">
            <table width="100%" style="background:#fffbea;border:1px solid #facc15;border-radius:12px;">
              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">${labels.order}</td>
                <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                  ${order.order_number ? `TVG-${String(order.order_number).padStart(4, "0")}` : order.id}
                </td>
              </tr>

              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">${labels.category}</td>
                <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                  ${order.category || "—"}
                </td>
              </tr>

              ${
                order.scheduled_at
                  ? `
              <tr>
                <td style="padding:15px;font-size:12px;color:#666;">${labels.schedule}</td>
                <td style="padding:15px;text-align:right;font-weight:700;color:#000;">
                  ${formatMadridFromUTC(order.scheduled_at)}
                </td>
              </tr>
              `
                  : ""
              }

              ${servicesHtml}

              <tr>
                <td style="padding:15px;font-size:13px;color:#555;">${labels.net}</td>
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
                <td style="padding:15px;border-top:1px solid #ddd;font-weight:800;">${labels.total}</td>
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
                  <div style="font-size:18px;font-weight:800;color:#000;">
                    ${labels.referralTitle}
                  </div>
                  <div style="margin-top:10px;font-size:14px;color:#555;line-height:1.7;">
                    ${labels.referralCode}
                  </div>
                  <div style="margin-top:8px;font-size:28px;font-weight:800;color:#000;">
                    ${referralCode}
                  </div>
                  <div style="margin-top:12px;font-size:14px;color:#555;line-height:1.7;">
                    ${labels.referralText}
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
            ${labels.footer}
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
        locale,
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
      locale,
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