import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const clean = (value: unknown, max: number) =>
  String(value || "").trim().slice(0, max);

const escapeHtml = (value: string) =>
  value.replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  })[character] || character);

const prices: Record<number, number> = { 1: 45, 2: 85, 3: 125 };

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (clean(body.website, 200)) {
      return Response.json({ success: true });
    }

    const fullName = clean(body.fullName, 160);
    const phone = clean(body.phone, 80);
    const email = clean(body.email, 240);
    const area = clean(body.area, 160);
    const installationType = clean(body.installationType, 120);
    const fanPurchased = clean(body.fanPurchased, 40);
    const contactTime = clean(body.contactTime, 80);
    const notes = clean(body.notes, 2000);
    const locale = body.locale === "en" ? "en" : "es";
    const fanCount = Number(body.fanCount);
    const price = prices[fanCount];

    if (!fullName || !phone || !area || !price) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const { data: usersData, error: usersError } =
      await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const adminUser = usersData?.users.find(
      (user) => user.email?.trim().toLowerCase() === adminEmail,
    );

    if (usersError || !adminUser) {
      console.error("Fan lead admin lookup failed", usersError);
      return Response.json(
        { success: false, error: "Could not save the request" },
        { status: 500 },
      );
    }

    const serviceSummary = locale === "es"
      ? `${fanCount} ${fanCount === 1 ? "ventilador" : "ventiladores"} de techo — ${price} €`
      : `${fanCount} ceiling ${fanCount === 1 ? "fan" : "fans"} — €${price}`;
    const details = [
      `Zona: ${area}`,
      installationType && `Instalación: ${installationType}`,
      fanPurchased && `Ventilador comprado: ${fanPurchased}`,
      contactTime && `Mejor momento para contactar: ${contactTime}`,
      notes && `Comentario: ${notes}`,
      "Origen: formulario corto de ventiladores",
    ].filter(Boolean).join("\n");

    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .insert({
        created_by: adminUser.id,
        full_name: fullName,
        phone,
        email,
        service_summary: serviceSummary,
        category: "Ceiling Fans",
        status: "new",
        next_action: "Contactar al cliente y confirmar la instalación",
        potential_value: price,
        notes: details,
        source: "website-fan-form",
      })
      .select("id")
      .single();

    if (leadError) {
      console.error("Fan lead insert failed", leadError);
      return Response.json(
        { success: false, error: "Could not save the request" },
        { status: 500 },
      );
    }

    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const result = await resend.emails.send({
        from: "TheVulgo <info@thevulgo.es>",
        to: ["info@thevulgo.es"],
        replyTo: email || "info@thevulgo.es",
        subject: `Nueva solicitud: ${fanCount} ventilador${fanCount === 1 ? "" : "es"} — ${fullName}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#111">
            <div style="background:#facc15;padding:22px;border-radius:18px 18px 0 0">
              <div style="font-size:12px;font-weight:700;letter-spacing:1.4px">NUEVO LEAD · VENTILADORES</div>
              <h1 style="margin:8px 0 0;font-size:26px">${escapeHtml(serviceSummary)}</h1>
            </div>
            <div style="border:1px solid #e5e7eb;border-top:0;padding:24px;border-radius:0 0 18px 18px">
              <p><b>Cliente:</b> ${escapeHtml(fullName)}</p>
              <p><b>Teléfono / WhatsApp:</b> ${escapeHtml(phone)}</p>
              <p><b>Email:</b> ${escapeHtml(email || "—")}</p>
              <p><b>Zona:</b> ${escapeHtml(area)}</p>
              <p><b>Situación actual:</b> ${escapeHtml(installationType || "—")}</p>
              <p><b>Ventilador comprado:</b> ${escapeHtml(fanPurchased || "—")}</p>
              <p><b>Contacto:</b> ${escapeHtml(contactTime || "—")}</p>
              <p><b>Comentario:</b><br>${escapeHtml(notes || "—").replace(/\n/g, "<br>")}</p>
              <p style="margin-top:24px"><a href="https://www.thevulgo.es/admin/leads" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:13px 18px;border-radius:12px;font-weight:700">Abrir Leads en CRM</a></p>
            </div>
          </div>
        `,
      });
      emailSent = !result.error;
      if (result.error) console.error("Fan lead email failed", result.error);
    }

    return Response.json({ success: true, leadId: lead.id, emailSent });
  } catch (error) {
    console.error("Fan lead request failed", error);
    return Response.json(
      { success: false, error: "Could not send the request" },
      { status: 500 },
    );
  }
}
