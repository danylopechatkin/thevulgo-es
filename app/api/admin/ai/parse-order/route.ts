import { getAdminSession } from "@/lib/admin-auth";
import { CATEGORY_MAP } from "@/lib/estimate";
import OpenAI from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

export const runtime = "nodejs";

const categories = Object.values(CATEGORY_MAP) as [string, ...string[]];
const parsedOrder = z.object({
  fullName: z.string().nullable(),
  phone: z.string().nullable(),
  email: z.string().nullable(),
  city: z.string().nullable(),
  area: z.string().nullable(),
  houseAddress: z.string().nullable(),
  postalCode: z.string().nullable(),
  apartmentNumber: z.string().nullable(),
  preferredDate: z.string().nullable(),
  preferredTime: z.string().nullable(),
  category: z.enum(categories),
  notes: z.string().nullable(),
  services: z.array(
    z.object({
      label: z.string(),
      price: z.number().nullable(),
      qty: z.number().int().positive(),
    }),
  ),
  missingFields: z.array(z.string()),
  warnings: z.array(z.string()),
});

export async function POST(request: Request) {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });
  if (!process.env.OPENAI_API_KEY)
    return Response.json(
      { error: "OPENAI_API_KEY is not configured" },
      { status: 503 },
    );
  const body = await request.json();
  const text = String(body.text || "").trim();
  const imageDataUrls = Array.isArray(body.imageDataUrls)
    ? body.imageDataUrls
        .map(String)
        .filter((value: string) =>
          /^data:image\/(jpeg|png|webp);base64,/i.test(value),
        )
    : [];
  if (!text && !imageDataUrls.length)
    return Response.json(
      { error: "Paste a WhatsApp message or add a screenshot" },
      { status: 400 },
    );
  if (
    text.length > 100000 ||
    imageDataUrls.length > 6 ||
    imageDataUrls.reduce((sum: number, item: string) => sum + item.length, 0) >
      4000000
  )
    return Response.json({ error: "The import is too large" }, { status: 400 });
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-IE", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  const completion = await new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }).chat.completions.parse({
    model: "gpt-4.1-mini",
    temperature: 0,
    response_format: zodResponseFormat(parsedOrder, "canadian_handyman_order"),
    messages: [
      {
        role: "system",
        content: `Extract a Spanish handyman order for THEVULGO Spain. Today in Europe/Madrid is ${date}. Never invent contact details, addresses, date, time or price. Input may be English, Russian, Ukrainian or Spanish. Use YYYY-MM-DD date and HH:mm 24-hour time, otherwise null. Default city to Valencia only if no city is supplied. Spanish postal codes contain exactly 5 digits. Use Spanish neighbourhoods only when clear. Never output Ceiling Fans or fan services: choose Electrical or Repairs if a request is otherwise valid. Services must have price null when price is not explicitly stated. Return concise notes, missingFields and warnings.`,
      },
      {
        role: "user",
        content: imageDataUrls.length
          ? [
              {
                type: "text",
                text:
                  text ||
                  "Read this WhatsApp screenshot and extract order details.",
              },
              ...imageDataUrls.map((url: string) => ({
                type: "image_url" as const,
                image_url: { url, detail: "low" as const },
              })),
            ]
          : text,
      },
    ],
  });
  const order = completion.choices[0]?.message.parsed;
  if (!order)
    return Response.json(
      { error: "AI did not return a valid order" },
      { status: 502 },
    );
  return Response.json({ order });
}
