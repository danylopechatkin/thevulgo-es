import { getAdminSession } from "@/lib/admin-auth";
import { z } from "zod";

const schema = z.object({
  full_name: z.string().trim().max(160),
  email: z.union([z.string().trim().email().max(240), z.literal("")]),
  phone: z.string().trim().max(80),
  alternate_phone: z.string().trim().max(80),
  address: z.string().trim().max(240),
  apartment: z.string().trim().max(60),
  city: z.string().trim().max(100),
  area: z.string().trim().max(120),
  postal_code: z.string().trim().max(20),
  customer_type: z.enum([
    "residential",
    "commercial",
    "property_manager",
    "other",
  ]),
  preferred_contact_method: z.enum(["whatsapp", "phone", "email", "sms"]),
  marketing_source: z.string().trim().max(160),
  access_notes: z.string().trim().max(2000),
  private_notes: z.string().trim().max(5000),
  tags: z.array(z.string().trim().min(1).max(60)).max(30),
  do_not_contact: z.boolean(),
});

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json({ error: "Invalid client profile" }, { status: 400 });
  const { id } = await context.params;
  const { data, error } = await admin.supabase
    .from("client_profiles")
    .update(parsed.data)
    .eq("id", id)
    .select("*")
    .single();
  return error
    ? Response.json({ error: error.message }, { status: 500 })
    : Response.json({ client: data });
}
