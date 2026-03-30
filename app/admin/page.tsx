import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
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

 const adminEmail = "pechatkin.work@gmail.com".trim().toLowerCase();
  const currentEmail = user?.email?.trim().toLowerCase();

  console.log("🔐 ADMIN USER:", user?.email);
  console.log("🔐 ADMIN AUTH ERROR:", error?.message || null);
  console.log("🔐 ADMIN ENV EMAIL:", process.env.ADMIN_EMAIL);
  console.log("🔐 EMAIL MATCH:", currentEmail === adminEmail);

  if (!user || !adminEmail || currentEmail !== adminEmail) {
    console.log("🚫 NO ACCESS → redirect");
    redirect("/admin-login");
  }

  console.log("✅ ADMIN ACCESS GRANTED");

  return <AdminClient />;
}