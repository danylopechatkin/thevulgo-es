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

  console.log("🔐 ADMIN USER:", user?.email);
  console.log("🔐 ADMIN AUTH ERROR:", error?.message || null);

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    console.log("🚫 NO ACCESS → redirect");
    redirect("/admin-login");
  }

  console.log("✅ ADMIN ACCESS GRANTED");

  return <AdminClient />;
}