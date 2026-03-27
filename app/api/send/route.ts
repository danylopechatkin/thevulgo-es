import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const adminResult = await resend.emails.send({
      from: "TheVulgo <onboarding@resend.dev>",
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
        <p><b>Total:</b> €${data.total}</p>
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

    console.log("ADMIN RESULT:", JSON.stringify(adminResult, null, 2));

    let clientResult = null;

    if (data.email) {
      clientResult = await resend.emails.send({
        from: "TheVulgo <onboarding@resend.dev>",
        to: [data.email],
        replyTo: "info@thevulgo.es",
        subject: "We received your request — TheVulgo",
        html: `
          <h2>Thank you for your request</h2>
          <p>Hello ${data.fullName},</p>
          <p>We received your estimate request and will contact you soon.</p>
          <p><b>Category:</b> ${data.category || "—"}</p>
          <p><b>Estimated total:</b> €${data.total}</p>
          <p><b>Preferred date:</b> ${data.preferredDate || "—"}</p>
          <p><b>Preferred time:</b> ${data.preferredTime || "—"}</p>
          <br />
          <p>TheVulgo Valencia</p>
          <p>info@thevulgo.es</p>
        `,
      });

      console.log("CLIENT RESULT:", JSON.stringify(clientResult, null, 2));
    }

    return Response.json({
      success: true,
      adminResult,
      clientResult,
    });
  } catch (error) {
    console.error("SEND ERROR:", error);
    return Response.json({ error: "Error sending email" }, { status: 500 });
  }
}