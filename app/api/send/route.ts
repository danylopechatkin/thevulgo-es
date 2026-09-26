import { calculatePublicTotal } from "@/lib/public-pricing";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { isAvailableCity, marketFromCity } from "@/lib/cities";
import { madridLocalDateTimeToUtc } from "@/lib/time";
import {
  formatTechnicalProjectSummary,
  type TechnicalProjectDetails,
} from "@/lib/technicalConfigurator";

function getServerClients() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!resendApiKey || !supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error("Order server configuration is missing");
  }

  return {
    resend: new Resend(resendApiKey),
    supabaseAdmin: createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }),
  };
}

type OrderService = {
  label?: string;
  price: number;
  qty: number;
  subtotal?: number;
  photo_paths?: string[];
  project_details?: Record<string, unknown> & {
    category?: string;
    requiresReview?: boolean;
  };
};

type SendRequestData = {
  [key: string]: unknown;
  addressDetails?: string;
  analyticsSessionId?: string;
  apartmentNumber?: string;
  area?: string;
  attributionPagePath?: string;
  attributionService?: string;
  attributionSource?: string;
  category?: string;
  city?: string;
  ctaId?: string;
  deviceType?: string;
  displayedPrice?: number | string;
  email?: string;
  firstTouch?: { source?: string };
  flexibleSchedule?: boolean;
  fullName?: string;
  gclid?: string;
  houseAddress?: string;
  landingPage?: string;
  lastTouch?: { source?: string };
  locale?: string;
  notes?: string;
  phone?: string;
  preferredDate?: string;
  preferredTime?: string;
  promoId?: string;
  selectedPrice?: number | string;
  serviceCategory?: string;
  serviceId?: string;
  services?: OrderService[];
  sourceUrl?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmMedium?: string;
  utmSource?: string;
  utmTerm?: string;
  visitorId?: string;
};

const HANDYMAN_PHOTO_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);
const HANDYMAN_PHOTO_BUCKET = "worker-job-photos";

function formatMadridFromUTC(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

export async function POST(req: Request) {
  try {
    const { resend, supabaseAdmin } = getServerClients();
    const contentType = req.headers.get("content-type") || "";
    let data: SendRequestData;
    let photoFiles: File[] = [];
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const payload = formData.get("payload");
      if (typeof payload !== "string") {
        return Response.json(
          { success: false, error: "Invalid request payload" },
          { status: 400 },
        );
      }
      data = JSON.parse(payload) as SendRequestData;
      photoFiles = formData
        .getAll("photos")
        .filter((entry): entry is File => entry instanceof File);
    } else {
      data = (await req.json()) as SendRequestData;
    }

    const locale = data.locale === "es" ? "es" : "en";
    const isEs = locale === "es";
    const isHandymanQuickRequest =
      data.attributionSource === "handyman_quick_request";
    const isHomepageQuickRequest =
      data.attributionSource === "homepage_quick_request";
    const isQuickQuoteRequest =
      isHandymanQuickRequest || isHomepageQuickRequest;
    if (
      photoFiles.length > 5 ||
      photoFiles.some(
        (file) =>
          !HANDYMAN_PHOTO_TYPES.has(file.type) || file.size > 6 * 1024 * 1024,
      )
    ) {
      return Response.json(
        { success: false, error: "Use up to 5 JPG, PNG or WebP photos of 6 MB each." },
        { status: 400 },
      );
    }
    const city = String(data.city || "").trim();

    if (!isAvailableCity(city)) {
      return Response.json(
        { success: false, error: "Unsupported city" },
        { status: 400 },
      );
    }
    const market = marketFromCity(city);

    const requestId = crypto.randomUUID();
    console.log("Order request received", { requestId, locale, servicesCount: Array.isArray(data.services) ? data.services.length : 0 });

    if (!data.fullName || typeof data.fullName !== "string") {
      return Response.json(
        { success: false, error: "Invalid name" },
        { status: 400 },
      );
    }

    if (!Array.isArray(data.services) || data.services.length === 0) {
      return Response.json(
        { success: false, error: "No services selected" },
        { status: 400 },
      );
    }

    if (
      !isHomepageQuickRequest &&
      (!data.preferredDate || !data.preferredTime)
    ) {
      return Response.json(
        { success: false, error: "Missing date or time" },
        { status: 400 },
      );
    }

    if (
      !data.city ||
      !data.houseAddress ||
      (!isQuickQuoteRequest && !data.area)
    ) {
      return Response.json(
        { success: false, error: "Missing address data" },
        { status: 400 },
      );
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return Response.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    let preferredDate: string | null = null;
    let preferredTime: string | null = null;
    let scheduledAt: string | null = null;

    if (!isHomepageQuickRequest) {
      preferredDate = String(data.preferredDate).trim();
      preferredTime = String(data.preferredTime).trim().slice(0, 5);

      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(preferredDate) ||
        !/^\d{2}:\d{2}$/.test(preferredTime)
      ) {
        return Response.json(
          { success: false, error: "Invalid date or time" },
          { status: 400 },
        );
      }

      scheduledAt = madridLocalDateTimeToUtc(preferredDate, preferredTime);

      const { data: existingOrder, error: slotCheckError } = await supabaseAdmin
        .from("orders")
        .select("id")
        .eq("preferred_date", preferredDate)
        .eq("preferred_time", preferredTime)
        .eq("city", city)
        .limit(1)
        .maybeSingle();

      if (slotCheckError) {
        console.error("❌ AVAILABILITY CHECK ERROR:", slotCheckError);
        return Response.json(
          { success: false, error: "Could not check availability" },
          { status: 500 },
        );
      }

      if (existingOrder) {
        return Response.json(
          {
            success: false,
            error: "This time is already booked",
            code: "SLOT_TAKEN",
          },
          { status: 409 },
        );
      }
    }

    const photoPaths: string[] = [];
    if (isQuickQuoteRequest && photoFiles.length) {
      const extensionByType: Record<string, string> = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp",
      };
      for (const file of photoFiles) {
        const path = `customer-requests/${requestId}/${crypto.randomUUID()}.${extensionByType[file.type]}`;
        const { error: photoError } = await supabaseAdmin.storage
          .from(HANDYMAN_PHOTO_BUCKET)
          .upload(path, file, { contentType: file.type, upsert: false });
        if (photoError) {
          if (photoPaths.length) {
            await supabaseAdmin.storage
              .from(HANDYMAN_PHOTO_BUCKET)
              .remove(photoPaths);
          }
          console.error("Handyman photo upload failed", {
            requestId,
            error: photoError.message,
          });
          return Response.json(
            { success: false, error: "Could not upload photos" },
            { status: 500 },
          );
        }
        photoPaths.push(path);
      }
    }

    let subtotal: number;
    try {
      subtotal = calculatePublicTotal(data.services);
      data.services = data.services.map(
        (service: { price: number; qty: number }, index: number) => ({
          ...service,
          subtotal: calculatePublicTotal([service]),
          ...(index === 0 && photoPaths.length ? { photo_paths: photoPaths } : {}),
        }),
      );
    } catch {
      return Response.json(
        { success: false, error: "Invalid service price or quantity" },
        { status: 400 },
      );
    }
    const iva = 0;
    const total = subtotal;

    console.log("Saving order", { requestId, subtotal, total, locale });

    const { data: insertedOrder, error: orderInsertError } = await supabaseAdmin
      .from("orders")
      .insert([
        {
          full_name: data.fullName || "",
          email: data.email || "",
          phone: data.phone || "",
          city,
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
          preferred_date: preferredDate,
          preferred_time: preferredTime,
          scheduled_at: scheduledAt,
          notes: data.notes || "",
          email_sent: false,
          reminder_sent: false,
          completed_email_sent: false,
          referral_code: null,
          locale,
          analytics_session_id: data.analyticsSessionId || null,
          landing_page: data.landingPage || null,
          utm_source: data.utmSource || null,
          utm_medium: data.utmMedium || null,
          utm_campaign: data.utmCampaign || null,
          utm_term: data.utmTerm || null,
          utm_content: data.utmContent || null,
          visitor_id: data.visitorId || null,
          gclid: data.gclid || null,
          first_touch_source: data.firstTouch?.source || null,
          last_touch_source: data.lastTouch?.source || null,
          attribution_confidence: data.analyticsSessionId ? "session_matched" : "unknown",
          service_category: data.serviceCategory || null,
          service_id: data.serviceId || null,
          cta_id: data.ctaId || null,
          device_type: data.deviceType || null,
          promo_id: data.promoId || null,
          displayed_price: Number.isFinite(Number(data.displayedPrice)) ? Number(data.displayedPrice) : null,
          selected_price: Number.isFinite(Number(data.selectedPrice)) ? Number(data.selectedPrice) : subtotal,
          final_price: total,
          attribution_source:
            data.attributionSource === "tv_mini_calculator" ||
            isQuickQuoteRequest
              ? data.attributionSource
              : "calculator",
          attribution_service: data.attributionService || data.category || null,
          attribution_page_path:
            typeof data.attributionPagePath === "string" &&
            data.attributionPagePath.startsWith("/")
              ? data.attributionPagePath.slice(0, 300)
              : `/${locale}/estimate`,
        },
      ])
      .select("id")
      .single();

    if (orderInsertError) {
      if (photoPaths.length) {
        await supabaseAdmin.storage
          .from(HANDYMAN_PHOTO_BUCKET)
          .remove(photoPaths);
      }
      console.error("❌ SUPABASE INSERT ERROR:", orderInsertError);

      if (orderInsertError.code === "23505") {
        return Response.json(
          {
            success: false,
            error: "This time is already booked",
            code: "SLOT_TAKEN",
          },
          { status: 409 },
        );
      }

      return Response.json(
        { success: false, error: "Failed to save order to CRM" },
        { status: 500 },
      );
    }

    console.log("Order saved", {
      requestId,
      orderId: insertedOrder?.id,
    });

    const labels = {
      clientSubject:
        isQuickQuoteRequest
          ? isEs
            ? `Solicitud recibida | THEVULGO ${city}`
            : `Request received | THEVULGO ${city}`
          : data.attributionSource === "tv_mini_calculator"
          ? isEs
            ? "Solicitud de montaje de TV recibida — THEVULGO"
            : "TV mounting request received — THEVULGO"
          : isEs
            ? `Hemos recibido tu solicitud en ${city} — THEVULGO`
            : `We received your ${city} request — THEVULGO`,

      requestTitle: isEs ? "Solicitud recibida" : "Request received",

      requestText:
        isHomepageQuickRequest
          ? isEs
            ? `Hola ${data.fullName}, hemos recibido tu solicitud desde la web. Revisaremos los detalles y te escribiremos por WhatsApp para confirmar el presupuesto.`
            : `Hi ${data.fullName}, we received your website request. We will review the details and message you on WhatsApp to confirm the quote.`
          : isHandymanQuickRequest
          ? isEs
            ? `Hola ${data.fullName}, hemos recibido tu solicitud de servicio de manitas. Revisaremos los detalles y te escribiremos por WhatsApp para confirmar el presupuesto y la visita.`
            : `Hi ${data.fullName}, we received your handyman service request. We will review the details and message you on WhatsApp to confirm the quote and visit.`
          : data.attributionSource === "tv_mini_calculator"
          ? isEs
            ? `Hola ${data.fullName}, hemos recibido tu solicitud de montaje de TV. Revisaremos los detalles y te escribiremos por WhatsApp para confirmar la instalación.`
            : `Hi ${data.fullName}, we received your TV mounting request. We will review the details and message you on WhatsApp to confirm the installation.`
          : isEs
            ? `Hola ${data.fullName}, hemos recibido tu solicitud para ${city}. Te contactaremos pronto para confirmar los detalles.`
            : `Hi ${data.fullName}, we received your request for ${city}. We will contact you shortly to confirm the details.`,

      category: isEs ? "Categoría" : "Category",
      subtotal: "Subtotal",
      total: "Total",
      address: isEs ? "Dirección" : "Address",
      schedule: isEs ? "Horario" : "Schedule",
      notes: isQuickQuoteRequest
        ? isEs
          ? "Trabajo solicitado"
          : "Requested work"
        : isEs
          ? "Notas"
          : "Notes",
      noNotes: isEs ? "Sin notas adicionales" : "No additional notes",

      referralTitle: isEs
        ? "Comparte THEVULGO y recibe recompensa"
        : "Share THEVULGO & Get rewarded",

      referralText1: isEs
        ? "Cuando completemos tu pedido, recibirás tu código personal de recomendación."
        : "After we complete your order, you’ll receive your personal referral code.",

      referralText2: isEs
        ? "Compártelo con un amigo — recibirá un 10% de descuento en su primer servicio."
        : "Share it with a friend — they get 10% off their first service.",

      referralText3: isEs
        ? "Cuando reserve, tú también recibirás un 10% de descuento en tu próximo trabajo."
        : "Once they book, you also get 10% off your next job.",

      footer: isEs
        ? `${isQuickQuoteRequest ? "No se realizará ningún cobro hasta confirmar contigo el trabajo y el precio.<br/>" : ""}Solicitud recibida. Te escribiremos por WhatsApp.<br/>${city} · Respuesta rápida`
        : `${isQuickQuoteRequest ? "No payment will be taken until we confirm the work and price with you.<br/>" : ""}Request received. We will message you on WhatsApp.<br/>${city} · Fast response`,
    };

    const servicesHtml = (Array.isArray(data.services) ? data.services : [])
      .map(
        (item: OrderService) => `
<tr>
  <td style="padding:10px 15px;font-size:13px;color:#000;">
    ${item.label}${item.price > 0 ? ` (${item.qty} × €${item.price})` : ""}
  </td>
  <td style="padding:10px 15px;text-align:right;font-size:13px;font-weight:700;color:#000;">
    ${item.price > 0 ? `€${Number(item.subtotal || 0).toFixed(2)}` : (isEs ? "Presupuesto personalizado" : "Custom project quote")}
  </td>
</tr>
`,
      )
      .join("");
    const technicalProjectCandidate = (Array.isArray(data.services) ? data.services : []).find(
      (item: OrderService) => item.project_details,
    )?.project_details;
    const technicalProject = technicalProjectCandidate?.category && ["cctv", "networking", "fiber", "access-control", "intercom", "alarms", "commercial"].includes(technicalProjectCandidate.category)
      ? (technicalProjectCandidate as TechnicalProjectDetails)
      : undefined;
    const technicalSummary = technicalProject
      ? formatTechnicalProjectSummary(technicalProject, locale)
      : [];
    const technicalDetailsHtml = technicalProject
      ? `<div style="margin:20px 0;padding:18px;border:1px solid #facc15;border-radius:12px;background:#fffbea;">
          <div style="font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#8a6500;">${isEs ? "Detalles técnicos" : "Technical project"}</div>
          ${technicalProject.requiresReview ? `<div style="margin-top:8px;font-weight:900;color:#9a3412;">${isEs ? "REVISIÓN DEL PROYECTO NECESARIA" : "PROJECT REVIEW REQUIRED"}</div>` : ""}
          <ul style="margin:10px 0 0;padding-left:20px;line-height:1.7;">${technicalSummary.map((line) => `<li>${line}</li>`).join("")}</ul>
          <div style="margin-top:10px;font-size:12px;color:#666;">${isEs ? "Equipamiento y materiales por presupuestar." : "Equipment and materials quoted separately."}</div>
        </div>`
      : "";

    const signedPhotoUrls = (
      await Promise.all(
        photoPaths.map(async (path) => {
          const { data: signed } = await supabaseAdmin.storage
            .from(HANDYMAN_PHOTO_BUCKET)
            .createSignedUrl(path, 60 * 60 * 24 * 30);
          return signed?.signedUrl || null;
        }),
      )
    ).filter((url): url is string => Boolean(url));

    const adminResult = await resend.emails.send({
      from: "TheVulgo <info@thevulgo.es>",
      to: ["info@thevulgo.es"],
      replyTo: "info@thevulgo.es",
      subject: isHomepageQuickRequest
        ? `[${city}] Nueva solicitud desde la web — ${data.fullName}`
        : isHandymanQuickRequest
        ? `[${city}] Nueva solicitud de Manitas — ${data.fullName}`
        : `[${city}] ${data.attributionSource === "tv_mini_calculator" ? "TV mini-calculator" : "New estimate"} request from ${data.fullName}`,
      html: isQuickQuoteRequest
        ? `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 12px;font-family:Arial,sans-serif;color:#171717;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 28px rgba(0,0,0,.08);">
  <tr>
    <td style="background:#080808;padding:24px 28px;color:#ffffff;">
      <div style="font-size:12px;font-weight:800;letter-spacing:.12em;color:#ffcc00;text-transform:uppercase;">THEVULGO · ${city}</div>
      <div style="margin-top:7px;font-size:24px;font-weight:800;">Nueva solicitud · Manitas</div>
    </td>
  </tr>
  <tr>
    <td style="padding:26px 28px 10px;">
      <div style="font-size:20px;font-weight:800;">${data.fullName}</div>
      <div style="margin-top:8px;font-size:14px;line-height:1.7;color:#444;">
        <div><strong>WhatsApp:</strong> ${data.phone || "—"}</div>
        ${data.email ? `<div><strong>Email:</strong> ${data.email}</div>` : ""}
        <div><strong>Dirección:</strong> ${data.houseAddress || "—"}, ${city}</div>
      </div>
    </td>
  </tr>
  <tr>
    <td style="padding:18px 28px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbea;border:1px solid #facc15;border-radius:12px;">
        <tr><td style="padding:18px;">
          <div style="font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#8a6500;">Trabajo solicitado</div>
          <div style="margin-top:9px;font-size:15px;line-height:1.6;color:#222;">${data.notes || "—"}</div>
        </td></tr>
      </table>
    </td>
  </tr>
  ${signedPhotoUrls.length ? `<tr><td style="padding:4px 28px 20px;"><div style="font-size:15px;font-weight:800;">Fotos del trabajo</div><div style="margin-top:8px;line-height:1.8;">${signedPhotoUrls.map((url, index) => `<a href="${url}" style="display:block;color:#171717;font-size:14px;font-weight:700;text-decoration:underline;text-decoration-color:#facc15;text-underline-offset:3px;">Ver foto ${index + 1}</a>`).join("")}</div></td></tr>` : ""}
  ${insertedOrder?.id ? `<tr><td style="padding:0 28px 18px;font-size:12px;color:#777;">CRM order ID: ${insertedOrder.id}</td></tr>` : ""}
  <tr>
    <td style="border-top:1px solid #eeeeee;background:#fafafa;padding:16px 28px;font-size:11px;line-height:1.7;color:#888;">
      <strong>Detalles técnicos</strong><br/>
      Idioma: ${locale} · Mercado: ${market} · Funnel: ${data.attributionSource || "homepage_quick_request"}<br/>
      Source URL: ${data.sourceUrl || "—"}
    </td>
  </tr>
</table>
</td></tr>
</table>
        `
        : `
        <h2>New Request</h2>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Phone:</b> ${data.phone || "—"}</p>
        <p><b>Email:</b> ${data.email || "—"}</p>
        <p><b>Language:</b> ${locale}</p>
        <p><b>Source URL:</b> ${data.sourceUrl || "—"}</p>
        <p><b>Market:</b> ${market}</p>
        <p><b>Category:</b> ${data.category || "—"}</p>
        <p><b>Funnel:</b> ${data.attributionSource || "calculator"}</p>
        <p><b>City:</b> ${city}</p>
        ${isQuickQuoteRequest ? "" : `<p><b>Area:</b> ${data.area || "—"}</p>`}
        <p><b>Address:</b> ${data.houseAddress || "—"}</p>
        ${isQuickQuoteRequest ? "" : `<p><b>Apartment:</b> ${data.apartmentNumber || "—"}</p><p><b>Extra details:</b> ${data.addressDetails || "—"}</p>`}
        ${isHomepageQuickRequest ? "" : `<p><b>Preferred date:</b> ${data.preferredDate || "—"}</p><p><b>Preferred time:</b> ${data.preferredTime || "—"}</p>${isHandymanQuickRequest ? `<p><b>Flexible schedule:</b> ${data.flexibleSchedule ? "Yes" : "No"}</p>` : ""}<p><b>Scheduled UTC:</b> ${scheduledAt || "—"}</p>`}
        ${isQuickQuoteRequest ? "" : `<p><b>Notes:</b> ${data.notes || "—"}</p>`}
        <p><b>Total:</b> ${isQuickQuoteRequest || technicalProject?.requiresReview ? "Pending quote" : `€${total.toFixed(2)}`}</p>
        ${technicalDetailsHtml}
        ${insertedOrder?.id ? `<p><b>CRM order ID:</b> ${insertedOrder.id}</p>` : ""}
        ${signedPhotoUrls.length ? `<h3>Fotos del trabajo</h3><ul>${signedPhotoUrls.map((url, index) => `<li><a href="${url}">Ver foto ${index + 1}</a></li>`).join("")}</ul>` : ""}
        ${
          isQuickQuoteRequest
            ? `<h3>Trabajo</h3><p>${data.notes || "—"}</p>`
            : `<h3>Selected services</h3><ul>${(
                Array.isArray(data.services) ? data.services : []
              )
                .map(
                  (item: OrderService) =>
                    `<li>${item.label} × ${item.qty} — ${item.price > 0 ? `€${Number(item.subtotal || 0).toFixed(2)}` : (isEs ? "Presupuesto personalizado" : "Custom project quote")}</li>`,
                )
                .join("")}</ul>`
        }
      `,
    });

    console.log("📧 ADMIN EMAIL RESULT:", {
      success: !adminResult.error,
      id: adminResult.data?.id,
      error: adminResult.error ? "delivery_failed" : null,
    });

    if (adminResult.error) {
      return Response.json(
        { success: false, error: "Admin email failed" },
        { status: 500 },
      );
    }

    let clientResult = null;

    if (data.email) {
      clientResult = await resend.emails.send({
        from: "TheVulgo <info@thevulgo.es>",
        to: [data.email],
        replyTo: "info@thevulgo.es",
        subject: labels.clientSubject,
        html: `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 0;font-family:Arial,sans-serif;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
<tr>
<td style="background:#000;padding:20px 30px;color:#fff;font-weight:800;font-size:20px;">
THEVULGO · ${city}
</td>
</tr>

<tr>
<td style="padding:30px;">
<div style="font-size:22px;font-weight:800;color:#000;">
${labels.requestTitle}
</div>

<div style="margin-top:10px;font-size:14px;color:#666;">
${labels.requestText}
</div>
</td>
</tr>

<tr>
<td style="padding:0 30px 30px 30px;">
<table width="100%" style="background:#fffbea;border:1px solid #facc15;border-radius:12px;">
<tr>
<td style="padding:15px;font-size:12px;color:#666;">${labels.category}</td>
<td style="padding:15px;text-align:right;font-weight:700;color:#000;">
${data.category || "—"}
</td>
</tr>

${isQuickQuoteRequest ? "" : servicesHtml}

${technicalProject ? `<tr><td colspan="2" style="padding:0 15px 15px;">${technicalDetailsHtml}</td></tr>` : ""}

${isQuickQuoteRequest ? "" : `<tr>
<td style="padding:15px;border-top:1px solid #ddd;font-weight:800;">
${labels.total}
</td>
<td style="padding:15px;border-top:1px solid #ddd;text-align:right;font-weight:800;">
${technicalProject?.requiresReview ? (isEs ? "Presupuesto personalizado" : "Custom project quote") : `€${total.toFixed(2)}`}
</td>
</tr>`}
</table>
</td>
</tr>

<tr>
<td style="padding:0 30px 20px 30px;">
<div style="font-size:12px;color:#666;">${labels.address}</div>
${
  isQuickQuoteRequest
    ? `<div style="font-weight:700;">${data.houseAddress || ""}, ${city}</div>`
    : `<div style="font-weight:700;">${city}, ${data.area || ""}</div><div style="font-size:13px;color:#555;">${data.houseAddress || ""} ${data.apartmentNumber || ""}</div>`
}
</td>
</tr>

${isHomepageQuickRequest ? "" : `<tr>
<td style="padding:0 30px 20px 30px;">
<div style="font-size:12px;color:#666;">${labels.schedule}</div>
<div style="font-weight:700;">
${scheduledAt ? formatMadridFromUTC(scheduledAt) : "—"}
${isHandymanQuickRequest && data.flexibleSchedule ? `<br/><span style="font-size:12px;color:#666;">${isEs ? "Horario flexible" : "Flexible schedule"}</span>` : ""}
</div>
</td>
</tr>`}

<tr>
<td style="padding:0 30px 30px 30px;">
<div style="font-size:12px;color:#666;">${labels.notes}</div>
<div style="font-size:13px;color:#555;">
${data.notes || labels.noNotes}
</div>
${isQuickQuoteRequest && photoPaths.length ? `<div style="margin-top:8px;font-size:13px;font-weight:700;">${isEs ? "Fotos recibidas" : "Photos received"}: ${photoPaths.length}</div>` : ""}
</td>
</tr>

${isQuickQuoteRequest ? "" : `<tr>
<td style="padding:0 30px 30px 30px;">
<table width="100%" style="background:#fff8db;border:1px solid #facc15;border-radius:14px;">
<tr>
<td style="padding:20px;">
<div style="font-size:18px;font-weight:800;">
${labels.referralTitle}
</div>

<div style="font-size:14px;color:#555;line-height:1.6;">
${labels.referralText1}
</div>

<div style="margin-top:10px;font-size:14px;color:#555;line-height:1.6;">
${labels.referralText2}
</div>

<div style="margin-top:10px;font-size:14px;color:#555;line-height:1.6;">
${labels.referralText3}
</div>
</td>
</tr>
</table>
</td>
</tr>`}

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

      console.log("📧 CLIENT EMAIL RESULT:", {
        success: !clientResult?.error,
        id: clientResult?.data?.id,
        error: clientResult?.error ? "delivery_failed" : null,
      });

      if (clientResult?.error) {
        return Response.json(
          { success: false, error: "Client email failed" },
          { status: 500 },
        );
      }
    }

    if (insertedOrder?.id) {
      await supabaseAdmin
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
      locale,
    });

    return Response.json({
      success: true,
      orderId: insertedOrder?.id || null,
      adminEmailId: adminResult.data?.id || null,
      clientEmailId: clientResult?.data?.id || null,
    });
  } catch (error: unknown) {
    const caughtError = error instanceof Error ? error : null;
    console.error("❌ SEND API ERROR:", {
      message: caughtError?.message,
    });

    return Response.json(
      { success: false, error: "Error sending email" },
      { status: 500 },
    );
  }
}
