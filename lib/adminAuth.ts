import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAdminSupabase() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll() {},
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!user?.email || !adminEmail || user.email.trim().toLowerCase() !== adminEmail) {
    return null;
  }

  // The legacy CRM authenticated only by ADMIN_EMAIL. Keep that contract and
  // register the same user for the additive CRM RLS policies when available.
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (serviceKey) {
    const service = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      serviceKey,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
    await service.from("admin_users").upsert({
      user_id: user.id,
      email: user.email.trim().toLowerCase(),
    });
  }

  return { supabase, user };
}

export const getAdminSession = getAdminSupabase;

export async function requireAdmin() {
  const admin = await getAdminSupabase();
  if (!admin) redirect("/admin-login");
  return admin;
}
