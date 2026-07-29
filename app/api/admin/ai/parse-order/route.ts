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
  postalCode: z.string().nullable(),
  apartmentNumber: z.string().nullable(),
  addressDetails: z.string().nullable(),

  preferredDate: z.string().nullable(),
  preferredTime: z.string().nullable(),

  notes: z.string().nullable(),

  services: z.array(ServiceSchema),

  missingFields: z.array(z.string()),
  warnings: z.array(z.string()),
});

type ParsedOrder = z.infer<typeof ParsedOrderSchema>;

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

function cleanNullableString(value: string | null): string | null {
  if (value === null) {
    return null;
  }

  const cleaned = value.trim();

  if (!cleaned) {
    return null;
  }

  const normalized = cleaned
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/^\/+/, "");

  const invalidValues = new Set([
    "null",
    "undefined",
    "none",
    "n/a",
    "na",
    "unknown",
    "notprovided",
    "notavailable",
  ]);

  if (invalidValues.has(normalized)) {
    return null;
  }

  return cleaned;
}

function normalizeParsedOrder(parsed: ParsedOrder): ParsedOrder {
  const normalized: ParsedOrder = {
    ...parsed,

    fullName: cleanNullableString(parsed.fullName),
    phone: cleanNullableString(parsed.phone),
    email: cleanNullableString(parsed.email),

    city: cleanNullableString(parsed.city),
    area: cleanNullableString(parsed.area),
    houseAddress: cleanNullableString(parsed.houseAddress),
    postalCode: cleanNullableString(parsed.postalCode),
    apartmentNumber: cleanNullableString(parsed.apartmentNumber),
    addressDetails: cleanNullableString(parsed.addressDetails),

    preferredDate: cleanNullableString(parsed.preferredDate),
    preferredTime: cleanNullableString(parsed.preferredTime),

    notes: cleanNullableString(parsed.notes),

    services: parsed.services.map((service) => ({
      label:
        cleanNullableString(service.label) ||
        "Servicio manual",
      price: service.price,
      qty:
        Number.isFinite(service.qty) && service.qty > 0
          ? service.qty
          : 1,
    })),

    missingFields: Array.from(
      new Set(
        parsed.missingFields
          .map((field) => field.trim())
          .filter(Boolean)
      )
    ),

    warnings: Array.from(
      new Set(
        parsed.warnings
          .map((warning) => warning.trim())
          .filter(Boolean)
      )
    ),
  };

  if (normalized.area) {
    normalized.missingFields = normalized.missingFields.filter(
      (field) => field.toLowerCase() !== "area"
    );
  }

  if (!normalized.area) {
    const alreadyMissing = normalized.missingFields.some(
      (field) => field.toLowerCase() === "area"
    );

    if (!alreadyMissing) {
      normalized.missingFields.push("area");
    }
  }

  if (!normalized.postalCode) {
    normalized.missingFields = normalized.missingFields.filter(
      (field) =>
        !["postalcode", "postal code"].includes(
          field.toLowerCase()
        )
    );
  }

  return normalized;
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

1. Never invent a client name, phone, email, street address, date, time or price.

2. Use null when information is missing.

3. Never return strings such as:
   "null", "/null", "undefined", "none", "unknown" or "n/a".
   Return actual null instead.

4. Resolve relative dates such as:
   today, tomorrow, hoy, mañana and weekdays
   using the Madrid date above.

5. preferredDate must be YYYY-MM-DD or null.

6. preferredTime must be HH:mm in 24-hour format or null.

7. General periods such as:
   morning, afternoon, evening,
   mañana, tarde, noche
   are not exact times.
   Do not invent an exact time from these expressions.
   Use null for preferredTime and add preferredTime to missingFields.

8. Default city to Valencia only when no other city is given.

9. Extract the Spanish postal code when present.
   postalCode must contain only the five-digit postal code,
   for example "46004".
   If no postal code is present, use null.

10. Determine the area, neighbourhood or district when it can be identified
    confidently from one or more of the following:
    - the complete street address;
    - the Spanish postal code;
    - an area explicitly stated by the client;
    - a well-known street and city combination.

11. For Valencia addresses, prefer the commonly used district or neighbourhood
    name that is useful for organising handyman orders.

12. Examples of acceptable Valencia areas include:
    - Ciutat Vella
    - L'Eixample
    - Extramurs
    - Campanar
    - La Saïdia
    - El Pla del Real
    - L'Olivereta
    - Patraix
    - Jesús
    - Quatre Carreres
    - Poblats Marítims
    - Camins al Grau
    - Algirós
    - Benimaclet
    - Rascanya
    - Benicalap
    - Pobles del Nord
    - Pobles de l'Oest
    - Pobles del Sud
    - Russafa
    - El Carmen
    - Cabanyal
    - Malvarrosa

13. Use a neighbourhood name such as Russafa, El Carmen or Cabanyal
    when that is more natural and useful than the larger administrative district.

14. Do not invent an area when the address or postal code is insufficient,
    incomplete or ambiguous.
    In that case:
    - area must be null;
    - add "area" to missingFields;
    - add a concise warning when useful.

15. If both an address and postal code are provided, use both together
    to determine the area.

16. If the address and postal code appear inconsistent:
    - do not choose one arbitrarily;
    - set area to null;
    - add a warning describing the inconsistency.

17. Preserve international phone prefixes when present.

18. The stated price is the service price entered by the administrator.

19. Do not add IVA.

20. Do not calculate IVA.

21. Do not change a stated price.

22. If no price is stated, use null.

23. "2 ventiladores por 85 euros" means:
    one service line,
    label describing installation of 2 fans,
    price 85,
    qty 1.

24. Do not convert a package price into a price per unit.

25. Put useful installation details into notes.

26. Keep notes concise.

27. missingFields should contain important information that still needs
    to be provided before the order can be created.

28. Do not add postalCode to missingFields unless the postal code is genuinely
    necessary to understand an otherwise incomplete address.

29. warnings should list uncertainty, conflicting information
    or anything requiring administrator review.

30. Return at least one service.

31. If the service is unclear, use:
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

    const normalizedOrder = normalizeParsedOrder(parsed);

    return NextResponse.json({
      success: true,
      order: normalizedOrder,
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