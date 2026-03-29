import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

function formatMadridFromUTC(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("📩 NEW ORDER REQUEST:", {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      date: data.preferredDate,
      time: data.preferredTime,
      scheduledUTC: data.scheduledAt,
      servicesCount: Array.isArray(data.services) ? data.services.length : 0,
    });

    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const userAgent = req.headers.get("user-agent") || "unknown";
    const timestamp = new Date().toISOString();

    console.log("📥 NEW REQUEST:", {
      time: timestamp,
      ip,
      userAgent,
      name: data.fullName,
      email: data.email,
      servicesCount: Array.isArray(data.services) ? data.services.length : 0,
    });

    // BASIC VALIDATION
    if (!data.fullName || typeof data.fullName !== "string") {
      return Response.json(
        { success: false, error: "Invalid name" },
        { status: 400 }
      );
    }

    if (!Array.isArray(data.services) || data.services.length === 0) {
      return Response.json(
        { success: false, error: "No services selected" },
        { status: 400 }
      );
    }

    if (!data.preferredDate || !data.preferredTime) {
      return Response.json(
        { success: false, error: "Missing date or time" },
        { status: 400 }
      );
    }

    if (!data.city || !data.area || !data.houseAddress) {
      return Response.json(
        { success: false, error: "Missing address data" },
        { status: 400 }
      );
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return Response.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const subtotal = Number(data.subtotal || 0);
    const iva = Number(data.iva || 0);
    const total = Number(data.total || 0);

    console.log("💾 SAVING TO DB:", {
      scheduled_at: data.scheduledAt,
      subtotal,
      iva,
      total,
    });

    const { data: insertedOrder, error: orderInsertError } = await supabase
      .from("orders")
      .insert([
        {
          full_name: data.fullName || "",
          email: data.email || "",
          phone: data.phone || "",
          city: data.city || "",
          area: data.area || "",
          address: data.houseAddress || "",
          apartment: data.apartmentNumber || "",
          address_details: data.addressDetails || "",
          category: data.category || "",
          services: Array.isArray(data.services) ? data.services : [],
          subtotal,
          iva,
          total,
          status: "new",
          preferred_date: data.preferredDate || null,
          preferred_time: data.preferredTime || "",
          scheduled_at: data.scheduledAt || null,
          notes: data.notes || "",
          email_sent: false,
          reminder_sent: false,
          completed_email_sent: false,
          referral_code: null,
        },
      ])
      .select("id")
      .single();

    if (orderInsertError) {
      console.error("❌ SUPABASE INSERT ERROR:", orderInsertError);

      return Response.json(
        { success: false, error: "Failed to save order to CRM" },
        { status: 500 }
      );
    }

    console.log("✅ ORDER SAVED:", {
      orderId: insertedOrder?.id,
    });

    const servicesHtml = (Array.isArray(data.services) ? data.services : [])
      .map(
        (item: any) => `
<tr>
  <td style="padding:10px 15px;font-size:13px;color:#000;">
    ${item.label} (${item.qty} × €${item.price})
  </td>
  <td style="padding:10px 15px;text-align:right;font-size:13px;font-weight:700;color:#000;">
    €${item.subtotal}
  </td>
</tr>
`
      )
      .join("");

    // ADMIN EMAIL
    const adminResult = await resend.emails.send({
      from: "TheVulgo <info@thevulgo.es>",
      to: ["info@thevulgo.es"],
      replyTo: "info@thevulgo.es",
      subject: `New estimate request from ${data.fullName}`,
      html: `
        <h2>New Request</h2>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Phone:</b> ${data.phone || "—"}</p>
        <p><b>Email:</b> ${data.email || "—"}</p>
        <p><b>Category:</b> ${data.category || "—"}</p>
        <p><b>City:</b> ${data.city || "—"}</p>
        <p><b>Area:</b> ${data.area || "—"}</p>
        <p><b>Address:</b> ${data.houseAddress || "—"}</p>
        <p><b>Apartment:</b> ${data.apartmentNumber || "—"}</p>
        <p><b>Extra details:</b> ${data.addressDetails || "—"}</p>
        <p><b>Preferred date:</b> ${data.preferredDate || "—"}</p>
        <p><b>Preferred time:</b> ${data.preferredTime || "—"}</p>
        <p><b>Scheduled UTC:</b> ${data.scheduledAt || "—"}</p>
        <p><b>Notes:</b> ${data.notes || "—"}</p>
        <p><b>Subtotal:</b> €${subtotal.toFixed(2)}</p>
        <p><b>IVA (21%):</b> €${iva.toFixed(2)}</p>
        <p><b>Total:</b> €${total.toFixed(2)}</p>
        <h3>Selected services</h3>
        <ul>
          ${(Array.isArray(data.services) ? data.services : [])
            .map(
              (item: any) =>
                `<li>${item.label} × ${item.qty} — €${item.subtotal}</li>`
            )
            .join("")}
        </ul>
      `,
    });

    console.log("📧 ADMIN EMAIL RESULT:", {
      success: !adminResult.error,
      id: adminResult.data?.id,
      error: adminResult.error,
    });

    if (adminResult.error) {
      return Response.json(
        { success: false, error: "Admin email failed" },
        { status: 500 }
      );
    }

    // CLIENT EMAIL
    let clientResult = null;

    if (data.email) {
      clientResult = await resend.emails.send({
        from: "TheVulgo <info@thevulgo.es>",
        to: [data.email],
        replyTo: "info@thevulgo.es",
        subject: "We received your request — TheVulgo",
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
Request received
</div>

<div style="margin-top:10px;font-size:14px;color:#666;">
Hi ${data.fullName}, we received your request. We will contact you shortly.
</div>
</td>
</tr>

<tr>
<td style="padding:0 30px 30px 30px;">
<table width="100%" style="background:#fffbea;border:1px solid #facc15;border-radius:12px;">
<tr>
<td style="padding:15px;font-size:12px;color:#666;">Category</td>
<td style="padding:15px;text-align:right;font-weight:700;color:#000;">
${data.category || "—"}
</td>
</tr>

${servicesHtml}

<tr>
<td style="padding:15px;font-size:13px;color:#555;">
Subtotal
</td>
<td style="padding:15px;text-align:right;font-size:13px;">
€${subtotal.toFixed(2)}
</td>
</tr>

<tr>
<td style="padding:15px;font-size:13px;color:#555;">
IVA (21%)
</td>
<td style="padding:15px;text-align:right;font-size:13px;">
€${iva.toFixed(2)}
</td>
</tr>

<tr>
<td style="padding:15px;border-top:1px solid #ddd;font-weight:800;">
Total
</td>
<td style="padding:15px;border-top:1px solid #ddd;text-align:right;font-weight:800;">
€${total.toFixed(2)}
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="padding:0 30px 20px 30px;">
<div style="font-size:12px;color:#666;">Address</div>
<div style="font-weight:700;">
${data.city || ""}, ${data.area || ""}
</div>
<div style="font-size:13px;color:#555;">
${data.houseAddress || ""} ${data.apartmentNumber || ""}
</div>
</td>
</tr>

<tr>
<td style="padding:0 30px 20px 30px;">
<div style="font-size:12px;color:#666;">Schedule</div>
<div style="font-weight:700;">
${
  data.scheduledAt
    ? formatMadridFromUTC(data.scheduledAt)
    : `${data.preferredDate || ""} ${data.preferredTime || ""}`.trim() || "—"
}
</div>
</td>
</tr>

<tr>
<td style="padding:0 30px 30px 30px;">
<div style="font-size:12px;color:#666;">Notes</div>
<div style="font-size:13px;color:#555;">
${data.notes || "No additional notes"}
</div>
</td>
</tr>

<tr>
<td style="padding:0 30px 30px 30px;">
<table width="100%" style="background:#fff8db;border:1px solid #facc15;border-radius:14px;">
<tr>
<td style="padding:20px;">
<div style="font-size:18px;font-weight:800;">
Share THEVULGO & Get rewarded
</div>

<div style="font-size:14px;color:#555;line-height:1.6;">
  After we complete your order, you’ll receive your personal referral code.
</div>

<div style="margin-top:10px;font-size:14px;color:#555;line-height:1.6;">
  Share it with a friend — they get <b>10% off</b> their first service.
</div>

<div style="margin-top:10px;font-size:14px;color:#555;line-height:1.6;">
  Once they book, <b>you also get 10% off</b> your next job.
</div>

</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="background:#fafafa;padding:20px 30px;font-size:12px;color:#777;line-height:1.6;">
Final total includes IVA (21%).<br/>
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

      console.log("📧 CLIENT EMAIL RESULT:", {
        success: !clientResult?.error,
        id: clientResult?.data?.id,
        error: clientResult?.error,
      });

      if (clientResult?.error) {
        return Response.json(
          { success: false, error: "Client email failed" },
          { status: 500 }
        );
      }
    }

    if (insertedOrder?.id) {
      await supabase
        .from("orders")
        .update({
          email_sent: true,
        })
        .eq("id", insertedOrder.id);
    }

    console.log("🚀 REQUEST COMPLETED:", {
      orderId: insertedOrder?.id,
      adminEmail: adminResult.data?.id,
      clientEmail: clientResult?.data?.id,
    });

    return Response.json({
      success: true,
      adminEmailId: adminResult.data?.id || null,
      clientEmailId: clientResult?.data?.id || null,
    });
  } catch (error: any) {
    console.error("❌ SEND API ERROR:", {
      message: error?.message,
      stack: error?.stack,
    });

    return Response.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}

