import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const subtotal = Number(data.subtotal || 0);
const iva = Number(data.iva || 0);
const total = Number(data.total || 0);

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
      services: data.services || [],
      subtotal,
      iva,
      total,
      status: "new",
      preferred_date: data.preferredDate || null,
      preferred_time: data.preferredTime || "",
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
  console.error("SUPABASE INSERT ERROR:", orderInsertError);

  return Response.json(
    { success: false, error: "Failed to save order to CRM" },
    { status: 500 }
  );
}

    // 🔥 SERVICES HTML (для красивого email)
    const servicesHtml = (data.services || [])
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

    // =========================
    // ADMIN EMAIL (оставил простой — тебе так удобнее)
    // =========================
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
        <p><b>Notes:</b> ${data.notes || "—"}</p>
        <p><b>Subtotal:</b> €${subtotal.toFixed(2)}</p>
<p><b>IVA (21%):</b> €${iva.toFixed(2)}</p>
<p><b>Total:</b> €${total.toFixed(2)}</p>
        <h3>Selected services</h3>
        <ul>
          ${(data.services || [])
            .map(
              (item: any) =>
                `<li>${item.label} × ${item.qty} — €${item.subtotal}</li>`
            )
            .join("")}
        </ul>
      `,
    });

    if (adminResult.error) {
      return Response.json(
        { success: false, error: "Admin email failed" },
        { status: 500 }
      );
    }

    // =========================
    // CLIENT EMAIL (🔥 красивый)
    // =========================
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
${data.category}
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
${data.city}, ${data.area}
</div>
<div style="font-size:13px;color:#555;">
${data.houseAddress} ${data.apartmentNumber || ""}
</div>
</td>
</tr>

<tr>
<td style="padding:0 30px 20px 30px;">
<div style="font-size:12px;color:#666;">Schedule</div>
<div style="font-weight:700;">
${data.preferredDate} at ${data.preferredTime}
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

<!-- 🔥 REFERRAL -->
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

      if (clientResult.error) {
        return Response.json(
          { success: false, error: "Client email failed" },
          { status: 500 }
        );
      }
    }

    if (insertedOrder?.id && data.email) {
  await supabase
    .from("orders")
    .update({
      email_sent: true,
    })
    .eq("id", insertedOrder.id);
}

    return Response.json({
      success: true,
      adminEmailId: adminResult.data?.id || null,
      clientEmailId: clientResult?.data?.id || null,
    });
  } catch (error) {
    return Response.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}