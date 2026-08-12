import { createBrowserClient } from "@supabase/ssr";

export const supabaseBrowser = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Kept as a function because the CRM and worker portal share the same lazy API.
export function getSupabaseBrowser() {
  return supabaseBrowser;
}
