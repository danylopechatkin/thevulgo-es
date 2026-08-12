import { getAdminSession } from "@/lib/admin-auth";
import { sendNewOrderEmails } from "@/lib/emails";
import { calculateTravelDeposit, getTaxRate } from "@/lib/estimate";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { torontoLocalToUtc } from "@/lib/time";
import { z } from "zod";

const serviceSchema = z.object({
  id: z.string().max(120),
  label: z.string().trim().min(1).max(240),
  price: z.number().finite().min(0.01).max(100000),
  qty: z.number().int().min(1).max(100),
});
const schema = z.object({
  full_name: z.string().trim().min(2).max(160),
  phone: z.string().trim().min(7).max(80),
  email: z.union([z.string().trim().email().max(240), z.literal("")]),
  city: z.string().trim().min(2).max(100),
  area: z.string().trim().min(2).max(120),
  address: z.string().trim().min(3).max(240),
  apartment: z.string().trim().max(60).default(""),
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  preferred_time: z.string().regex(/^\d{2}:\d{2}$/),
  category: z.string().trim().min(2).max(120),
  notes: z.string().trim().max(2000).default(""),
  services: z.array(serviceSchema).min(1).max(40),
});

export async function GET() {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await getSupabaseAdmin()
    .from("orders")
    .select("*")
    .order("scheduled_at", { ascending: true });
  return error
    ? Response.json({ error: error.message }, { status: 500 })
    : Response.json({ orders: data || [] });
}

export async function POST(request: Request) {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json(
      {
        error: "Invalid manual order",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  const input = parsed.data;
  if (
    /ceiling.?fan|ventilador/i.test(
      `${input.category} ${input.services.map((service) => service.label).join(" ")}`,
    )
  )
    return Response.json(
      { error: "Ceiling-fan services are not available in Spain" },
      { status: 400 },
    );
  let scheduledAt: string;
  try {
    scheduledAt = torontoLocalToUtc(input.preferred_date, input.preferred_time);
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Invalid appointment",
      },
      { status: 400 },
    );
  }
  const services = input.services.map((service) => ({
    ...service,
    subtotal: Number((service.price * service.qty).toFixed(2)),
    badge: "Manual",
  }));
  const subtotal = Number(
    services.reduce((sum, service) => sum + service.subtotal, 0).toFixed(2),
  );
  const taxRate = getTaxRate(),
    tax = Number((subtotal * taxRate).toFixed(2)),
    total = subtotal + tax,
    deposit = calculateTravelDeposit(total, input.city);
  const database = getSupabaseAdmin();
  const { data, error } = await database
    .from("orders")
    .insert({
      idempotency_key: crypto.randomUUID(),
      full_name: input.full_name,
      phone: input.phone,
      email: input.email,
      country: "Spain",
      city: input.city,
      area: input.area,
      postal_code: "",
      address: input.address,
      apartment: input.apartment,
      preferred_date: input.preferred_date,
      preferred_time: input.preferred_time,
      scheduled_at: scheduledAt,
      timezone: "Europe/Madrid",
      category: input.category,
      services,
      notes: input.notes,
      deposit_required: deposit.required,
      deposit_amount: deposit.amount,
      subtotal,
      tax,
      tax_rate: taxRate,
      total,
      currency: "EUR",
      locale: "en-IE",
      status: "new",
      admin_email_status: "pending",
      customer_email_status: input.email ? "pending" : "not_required",
      reminder_status: input.email ? "pending" : "not_required",
      completed_email_status: input.email ? "pending" : "not_required",
    })
    .select("*")
    .single();
  if (error) return Response.json({ error: error.message }, { status: 500 });

  try {
    const delivery = await sendNewOrderEmails({
      id: data.id,
      orderNumber: data.order_number,
      fullName: input.full_name,
      email: input.email,
      phone: input.phone,
      city: input.city,
      area: input.area,
      address: input.address,
      postalCode: "",
      scheduledAt,
      notes: input.notes,
      quote: {
        category: input.category,
        services,
        subtotal,
        tax,
        total,
        currency: "EUR",
        taxRate,
        minimumVisitApplied: false,
      },
      depositRequired: deposit.required,
      depositAmount: deposit.amount,
      source: "manual",
    });
    const emailWarning = Boolean(delivery.adminError || delivery.customerError);
    const emailFields = {
      admin_email_status: delivery.adminError ? "failed" : "sent",
      admin_email_id: delivery.adminId,
      admin_email_sent_at: delivery.adminError
        ? null
        : new Date().toISOString(),
      customer_email_status: input.email
        ? delivery.customerError
          ? "failed"
          : "sent"
        : "not_required",
      customer_email_id: delivery.customerId,
      customer_email_sent_at:
        input.email && !delivery.customerError
          ? new Date().toISOString()
          : null,
      email_error:
        [delivery.adminError, delivery.customerError]
          .filter(Boolean)
          .join(" | ") || null,
    };
    await database.from("orders").update(emailFields).eq("id", data.id);
    return Response.json(
      { order: { ...data, ...emailFields }, emailWarning },
      { status: 201 },
    );
  } catch (emailError) {
    const message =
      emailError instanceof Error
        ? emailError.message
        : "Email delivery failed";
    const emailFields = {
      admin_email_status: "failed",
      customer_email_status: input.email ? "failed" : "not_required",
      email_error: message.slice(0, 1000),
    };
    await database.from("orders").update(emailFields).eq("id", data.id);
    return Response.json(
      { order: { ...data, ...emailFields }, emailWarning: true },
      { status: 201 },
    );
  }
}
