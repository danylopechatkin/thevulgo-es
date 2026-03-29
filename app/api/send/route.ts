import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

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

    if (adminResult.error) {
      console.error("ADMIN EMAIL ERROR:", adminResult.error);

      return Response.json(
        {
          success: false,
          error: "Admin email failed",
          adminResult,
        },
        { status: 500 }
      );
    }

    let clientResult = null;

    if (data.email) {
      clientResult = await resend.emails.send({
        from: "TheVulgo <info@thevulgo.es>",
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

      if (clientResult.error) {
        console.error("CLIENT EMAIL ERROR:", clientResult.error);

        return Response.json(
          {
            success: false,
            error: "Client email failed",
            adminResult,
            clientResult,
          },
          { status: 500 }
        );
      }
    }

    return Response.json({
      success: true,
      adminEmailId: adminResult.data?.id || null,
      clientEmailId: clientResult?.data?.id || null,
    });
  } catch (error) {
    console.error("SEND ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Error sending email",
      },
      { status: 500 }
    );
  }
}