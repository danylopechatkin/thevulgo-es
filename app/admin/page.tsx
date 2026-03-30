import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
  const cookieStore = await cookies(); // ← ВАЖНО

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("🔐 ADMIN USER:", user?.email);

  // ❗ ТВОЙ EMAIL
  if (!user || user.email !== "pechatkin.work@gmail.com") {
    console.log("🚫 NO ACCESS → redirect");
    redirect("/admin-login");
  }

  console.log("✅ ADMIN ACCESS GRANTED");

  return <AdminClient />;
}