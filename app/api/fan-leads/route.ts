import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const PHOTO_BUCKET = "fan-lead-photos";
const MAX_PHOTOS = 4;
const MAX_PHOTO_BYTES = 800_000;
const prices: Record<number, number> = { 1: 45, 2: 85, 3: 125 };

const clean = (value: unknown, max: number) => String(value || "").trim().slice(0, max);
const escapeHtml = (value: string) => value.replace(/[&<>"]/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
})[character] || character);

function validPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

async function ensurePhotoBucket(supabase: SupabaseClient) {
  const { data } = await supabase.storage.getBucket(PHOTO_BUCKET);
  if (data) return;
  const { error } = await supabase.storage.createBucket(PHOTO_BUCKET, {
    public: false,
    fileSizeLimit: MAX_PHOTO_BYTES,
    allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
  });
  if (error && !/already exists/i.test(error.message)) throw error;
}

async function uploadPhotos(
  supabase: SupabaseClient,
  photos: unknown,
  submissionKey: string,
) {
  if (!Array.isArray(photos) || photos.length === 0) return [];
  if (photos.length > MAX_PHOTOS) throw new Error("Too many photos");
  await ensurePhotoBucket(supabase);

  const urls: string[] = [];
  for (const [index, photo] of photos.entries()) {
    const dataUrl = clean(photo, 1_200_000);
    const match = dataUrl.match(/^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/);
    if (!match) throw new Error("Invalid photo");
    const bytes = Buffer.from(match[2], "base64");
    if (!bytes.length || bytes.length > MAX_PHOTO_BYTES) throw new Error("Photo too large");
    const extension = match[1] === "image/png" ? "png" : match[1] === "image/webp" ? "webp" : "jpg";
    const path = `${new Date().toISOString().slice(0, 10)}/${submissionKey}-${index + 1}.${extension}`;
    const { error } = await supabase.storage.from(PHOTO_BUCKET).upload(path, bytes, {
      contentType: match[1],
      upsert: true,
    });
    if (error) throw error;
    const { data, error: signError } = await supabase.storage
      .from(PHOTO_BUCKET)
      .createSignedUrl(path, 60 * 60 * 24 * 365);
    if (signError || !data?.signedUrl) throw signError || new Error("Could not sign photo");
    urls.push(data.signedUrl);
  }
  return urls;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website, 200)) return Response.json({ success: true });

    const fullName = clean(body.fullName, 160);
    const phone = clean(body.phone, 80);
    const email = clean(body.email, 240);
    const area = clean(body.area, 160);
    const installationType = clean(body.installationType, 120);
    const fanPurchased = clean(body.fanPurchased, 80);
    const contactTime = clean(body.contactTime, 80);
    const notes = clean(body.notes, 2000);
    const submissionKey = clean(body.submissionKey, 80).replace(/[^a-zA-Z0-9-]/g, "");
    const locale = body.locale === "en" ? "en" : "es";
    const fanCount = Number(body.fanCount);
    const price = prices[fanCount];

    if (!fullName || !phone || !area || !price || !submissionKey || body.privacyAccepted !== true) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }
    if (!validPhone(phone)) {
      return Response.json({ success: false, error: "Invalid phone" }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, error: "Invalid email" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const duplicateSince = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { data: duplicate } = await supabase
      .from("leads")
      .select("id")
      .eq("phone", phone)
      .eq("source", "website-fan-form")
      .gte("created_at", duplicateSince)
      .limit(1)
      .maybeSingle();
    if (duplicate) return Response.json({ success: true, leadId: duplicate.id, duplicate: true });

    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const { data: usersData, error: usersError } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const adminUser = usersData?.users.find((user) => user.email?.trim().toLowerCase() === adminEmail);
    if (usersError || !adminUser) {
      console.error("Fan lead admin lookup failed", usersError);
      return Response.json({ success: false, error: "Could not save the request" }, { status: 500 });
    }

    let photoUrls: string[] = [];
    try {
      photoUrls = await uploadPhotos(supabase, body.photos, submissionKey);
    } catch (error) {
      console.error("Fan lead photo upload failed", error);
      return Response.json({ success: false, error: "Could not upload photos" }, { status: 400 });
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
      photoUrls.length && `Fotos:\n${photoUrls.join("\n")}`,
      `Consentimiento de privacidad: aceptado ${new Date().toISOString()}`,
      "Origen: formulario corto de ventiladores",
    ].filter(Boolean).join("\n");

    const { data: lead, error: leadError } = await supabase.from("leads").insert({
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
    }).select("id").single();
    if (leadError) {
      console.error("Fan lead insert failed", leadError);
      return Response.json({ success: false, error: "Could not save the request" }, { status: 500 });
    }

    let adminEmailSent = false;
    let clientEmailSent = !email;
    const emailErrors: string[] = [];
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const photosHtml = photoUrls.length
        ? `<p><b>Fotos:</b></p>${photoUrls.map((url, index) => `<p><a href="${escapeHtml(url)}">Abrir foto ${index + 1}</a></p>`).join("")}`
        : "<p><b>Fotos:</b> —</p>";
      const adminResult = await resend.emails.send({
        from: "TheVulgo <info@thevulgo.es>",
        to: ["info@thevulgo.es"],
        replyTo: email || "info@thevulgo.es",
        subject: `Nueva solicitud: ${fanCount} ventilador${fanCount === 1 ? "" : "es"} — ${fullName}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#111"><div style="background:#facc15;padding:22px;border-radius:18px 18px 0 0"><div style="font-size:12px;font-weight:700;letter-spacing:1.4px">NUEVO LEAD · VENTILADORES</div><h1 style="margin:8px 0 0;font-size:26px">${escapeHtml(serviceSummary)}</h1></div><div style="border:1px solid #e5e7eb;border-top:0;padding:24px;border-radius:0 0 18px 18px"><p><b>Cliente:</b> ${escapeHtml(fullName)}</p><p><b>Teléfono / WhatsApp:</b> ${escapeHtml(phone)}</p><p><b>Email:</b> ${escapeHtml(email || "—")}</p><p><b>Zona:</b> ${escapeHtml(area)}</p><p><b>Situación actual:</b> ${escapeHtml(installationType || "—")}</p><p><b>Ventilador comprado:</b> ${escapeHtml(fanPurchased || "—")}</p><p><b>Contacto:</b> ${escapeHtml(contactTime || "—")}</p><p><b>Comentario:</b><br>${escapeHtml(notes || "—").replace(/\n/g, "<br>")}</p>${photosHtml}<p style="margin-top:24px"><a href="https://www.thevulgo.es/admin/leads" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:13px 18px;border-radius:12px;font-weight:700">Abrir Leads en CRM</a></p></div></div>`,
      });
      adminEmailSent = !adminResult.error;
      if (adminResult.error) emailErrors.push(`Admin email: ${adminResult.error.message}`);

      if (email) {
        const clientResult = await resend.emails.send({
          from: "TheVulgo <info@thevulgo.es>",
          to: [email],
          replyTo: "info@thevulgo.es",
          subject: locale === "es" ? "Hemos recibido tu solicitud de instalación" : "We received your installation request",
          html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#111"><div style="background:#facc15;padding:24px;border-radius:18px 18px 0 0"><h1 style="margin:0;font-size:26px">THEVULGO</h1></div><div style="border:1px solid #e5e7eb;border-top:0;padding:26px;border-radius:0 0 18px 18px"><h2>${locale === "es" ? `Gracias, ${escapeHtml(fullName)}` : `Thank you, ${escapeHtml(fullName)}`}</h2><p>${locale === "es" ? "Hemos recibido tu solicitud y te contactaremos por WhatsApp o teléfono para confirmar los detalles." : "We received your request and will contact you by WhatsApp or phone to confirm the details."}</p><div style="background:#fafafa;border-radius:14px;padding:18px;margin:20px 0"><b>${escapeHtml(serviceSummary)}</b><br>${escapeHtml(area)}</div><p>${locale === "es" ? "No necesitas realizar ningún pago ahora." : "You do not need to make any payment now."}</p><p>THEVULGO · +34 610 076 942 · info@thevulgo.es</p></div></div>`,
        });
        clientEmailSent = !clientResult.error;
        if (clientResult.error) emailErrors.push(`Client email: ${clientResult.error.message}`);
      }
    } else {
      emailErrors.push("RESEND_API_KEY is missing");
    }

    if (!adminEmailSent || !clientEmailSent) {
      const warning = `\n\n⚠ Email delivery problem: ${emailErrors.join("; ")}`;
      await supabase.from("leads").update({
        next_action: "Проверить email-уведомление и связаться с клиентом",
        notes: `${details}${warning}`,
      }).eq("id", lead.id);
    }

    return Response.json({
      success: true,
      leadId: lead.id,
      adminEmailSent,
      clientEmailSent,
      notificationWarning: !adminEmailSent,
    });
  } catch (error) {
    console.error("Fan lead request failed", error);
    return Response.json({ success: false, error: "Could not send the request" }, { status: 500 });
  }
}
