import OpenAI from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const CategorySchema = z.enum([
  "TV Mounting",
  "Electrical",
  "Plumbing",
  "Furniture Assembly",
  "Drywall",
  "Repairs",
  "Doors & Hardware",
  "Smart Home",
  "Kitchen",
  "Bathroom",
  "Move-In Setup",
  "Exterior",
]);

const ServiceSchema = z.object({
  label: z.string(),
  price: z.number().nullable(),
  qty: z.number(),
});

const ParsedOrderSchema = z.object({
  fullName: z.string().nullable(),
  phone: z.string().nullable(),
  email: z.string().nullable(),

  category: CategorySchema,

  city: z.string().nullable(),
  area: z.string().nullable(),
  houseAddress: z.string().nullable(),
  apartmentNumber: z.string().nullable(),
  addressDetails: z.string().nullable(),

  preferredDate: z.string().nullable(),
  preferredTime: z.string().nullable(),

  notes: z.string().nullable(),

  services: z.array(ServiceSchema),

  missingFields: z.array(z.string()),
  warnings: z.array(z.string()),
});

async function isAdminAuthenticated() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {},
      },
    }
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return false;
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const currentEmail = user.email?.trim().toLowerCase();

  return Boolean(
    adminEmail &&
      currentEmail &&
      adminEmail === currentEmail
  );
}

function getMadridContext() {
  const now = new Date();

  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  const weekday = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    weekday: "long",
  }).format(now);

  return {
    date,
    time,
    weekday,
  };
}

export async function POST(request: Request) {
  try {
    const authorized = await isAdminAuthenticated();

    if (!authorized) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "OPENAI_API_KEY is missing",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();
    const text = String(body?.text || "").trim();

    if (!text) {
      return NextResponse.json(
        {
          success: false,
          error: "Order text is required",
        },
        {
          status: 400,
        }
      );
    }

    if (text.length > 15000) {
      return NextResponse.json(
        {
          success: false,
          error: "Order text is too long",
        },
        {
          status: 400,
        }
      );
    }

    const madrid = getMadridContext();

    const completion = await openai.chat.completions.parse({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content: `
You convert informal handyman booking information into structured order data
for THEVULGO, a handyman business in Spain.

CURRENT MADRID DATE AND TIME:
Date: ${madrid.date}
Time: ${madrid.time}
Weekday: ${madrid.weekday}
Timezone: Europe/Madrid

The input may be in Russian, Ukrainian, Spanish or English.
The input may contain copied WhatsApp messages or the administrator's own notes.

STRICT RULES:

1. Never invent a client name, phone, email, address, date, time or price.
2. Use null when information is missing.
3. Resolve relative dates such as today, tomorrow, hoy, mañana and weekdays
   using the Madrid date above.
4. preferredDate must be YYYY-MM-DD or null.
5. preferredTime must be HH:mm in 24-hour format or null.
6. Default city to Valencia only when no other city is given.
7. Do not guess the district or area.
8. Preserve international phone prefixes when present.
9. The stated price is the service price entered by the administrator.
10. Do not add IVA.
11. Do not calculate IVA.
12. Do not change a stated price.
13. If no price is stated, use null.
14. "2 ventiladores por 85 euros" means:
    one service line,
    label describing installation of 2 fans,
    price 85,
    qty 1.
15. Do not convert package price into price per unit.
16. Put useful installation details into notes.
17. Keep notes concise.
18. missingFields should list important missing information.
19. warnings should list uncertainty or contradictions.
20. Return at least one service.
21. If service is unclear, use:
    label: "Servicio manual"
    price: null
    qty: 1

CATEGORY RULES:

- Ceiling fan, lamp, socket, switch or wiring:
  Electrical
- Furniture assembly:
  Furniture Assembly
- TV mounting:
  TV Mounting
- Door, lock, hinge or handle:
  Doors & Hardware
- Wall, plasterboard or drywall:
  Drywall
- Sink, tap, toilet or water:
  Plumbing
- Bathroom installation:
  Bathroom
- General handyman work:
  Repairs
          `.trim(),
        },
        {
          role: "user",
          content: text,
        },
      ],

      response_format: zodResponseFormat(
        ParsedOrderSchema,
        "parsed_handyman_order"
      ),

      temperature: 0,
    });

    const parsed = completion.choices[0]?.message?.parsed;

    if (!parsed) {
      return NextResponse.json(
        {
          success: false,
          error: "AI did not return parsed order data",
        },
        {
          status: 502,
        }
      );
    }

    return NextResponse.json({
      success: true,
      order: parsed,
    });
  } catch (error) {
    console.error("AI PARSE ORDER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unexpected AI parsing error",
      },
      {
        status: 500,
      }
    );
  }
}