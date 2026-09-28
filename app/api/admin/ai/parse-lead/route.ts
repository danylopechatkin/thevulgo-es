import { getAdminSession } from "@/lib/admin-auth";
import { buildLeadChanges, LEAD_STATUSES } from "@/lib/leads";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

export const runtime = "nodejs";

const nullableText = z.string().nullable();
const leadProposalSchema = z.object({
  full_name: nullableText,
  phone: nullableText,
  email: nullableText,
  language: z.enum(["es", "en", "ru", "uk", "other", "unknown"]).nullable(),
  market: nullableText,
  city: nullableText,
  area: nullableText,
  postal_code: nullableText,
  address: nullableText,
  apartment: nullableText,
  category: nullableText,
  service_summary: nullableText,
  structured_services: z.array(z.object({
    service_id: nullableText,
    label: z.string(),
    quantity: z.number().nullable(),
    price: z.number().nullable(),
    details: nullableText,
  })),
  requested_date: nullableText,
  requested_time: nullableText,
  quoted_value: z.number().nullable(),
  accepted_value: z.number().nullable(),
  potential_value: z.number().nullable(),
  status: z.enum(LEAD_STATUSES).nullable(),
  next_action: nullableText,
  follow_up_at: nullableText,
  notes: nullableText,
  ai_summary: z.string(),
  ai_missing_fields: z.array(z.string()),
  ai_warnings: z.array(z.string()),
});

export async function POST(request: Request) {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const apiKey = process.env.OPENAI_WHATSAPP_API_KEY;
  if (!apiKey)
    return Response.json(
      { error: "OPENAI_WHATSAPP_API_KEY is not configured" },
      { status: 503 },
    );
  const body = await request.json();
  const text = String(body.text || "").trim();
  const existingLead = body.existingLead && typeof body.existingLead === "object"
    ? body.existingLead
    : null;
  const imageDataUrls = Array.isArray(body.imageDataUrls)
    ? body.imageDataUrls.map(String).filter((value: string) =>
        /^data:image\/(jpeg|png|webp);base64,/i.test(value),
      )
    : [];
  if (!text && !imageDataUrls.length)
    return Response.json({ error: "Paste a conversation or add screenshots" }, { status: 400 });
  if (text.length > 150000 || imageDataUrls.length > 10 || imageDataUrls.reduce((sum: number, item: string) => sum + item.length, 0) > 5000000)
    return Response.json({ error: "The import is too large" }, { status: 400 });

  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date());
  const system = `You extract a commercial lead for THEVULGO Spain from WhatsApp-style conversation data. Today is ${today} in Europe/Madrid.
Never invent a name, phone, email, location, price, date, service, acceptance, status or next action. Never default the city to Valencia. Distinguish customer statements from THEVULGO/business replies. A business quote is quoted_value; accepted_value is present only when the customer clearly accepts it. A requested time is not confirmed. For updates, output only facts explicitly added or corrected by the new conversation; use null for unknown or unchanged scalar fields. Never propose status=converted: conversion happens only after a real order is created. Preserve uncertainty in warnings and list important missing fields. Dates use YYYY-MM-DD, times HH:mm, follow-up ISO datetime when explicitly inferable. Keep source text out of notes unless it is a useful concise business note.`;
  const userText = existingLead
    ? `Existing lead (reference only; do not echo unchanged values):\n${JSON.stringify(existingLead)}\n\nNew conversation/update:\n${text || "See screenshots."}`
    : text || "Extract the lead from these screenshots.";
  const completion = await new OpenAI({ apiKey }).chat.completions.parse({
    model: process.env.OPENAI_WHATSAPP_MODEL || "gpt-4.1-mini",
    temperature: 0,
    response_format: zodResponseFormat(leadProposalSchema, "thevulgo_lead_proposal"),
    messages: [
      { role: "system", content: system },
      {
        role: "user",
        content: imageDataUrls.length
          ? [
              { type: "text", text: userText },
              ...imageDataUrls.map((url: string) => ({
                type: "image_url" as const,
                image_url: { url, detail: "high" as const },
              })),
            ]
          : userText,
      },
    ],
  });
  const raw = completion.choices[0]?.message.parsed;
  if (!raw) return Response.json({ error: "AI did not return a valid lead" }, { status: 502 });
  const proposal = Object.fromEntries(
    Object.entries(raw).filter(([, value]) => value !== null),
  );
  if (proposal.status === "converted") {
    delete proposal.status;
    raw.ai_warnings.push("Converted status was ignored; create an order first.");
  }
  return Response.json({
    proposal,
    changes: existingLead ? buildLeadChanges(existingLead, proposal) : [],
  });
}
