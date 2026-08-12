"use client";

import { getSupabaseBrowser } from "@/lib/supabase-browser";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/worker", label: "My jobs", icon: BriefcaseBusiness },
  { href: "/worker/guides", label: "Training", icon: BookOpenCheck },
  { href: "/worker/agreement", label: "Agreement", icon: ShieldCheck },
];

export default function WorkerPortalHeader({ fullName }: { fullName: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function signOut() {
    await getSupabaseBrowser().auth.signOut();
    router.replace("/worker-login");
    router.refresh();
  }

  return (
    <header className="rounded-[2rem] bg-[#111] p-5 text-white shadow-xl sm:p-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.16em] text-yellow-400">
            THEVULGO contractor portal
          </p>
          <p className="mt-1 text-xl font-black">{fullName}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {links.map((item) => {
            const active =
              item.href === "/worker"
                ? pathname === "/worker"
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2 text-sm font-black transition ${active ? "bg-yellow-400 text-black" : "bg-white/8 text-white hover:bg-white/15"}`}
              >
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={signOut}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-black text-white hover:bg-white/10"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
