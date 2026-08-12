"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase-browser";
import {
  BarChart3,
  CalendarDays,
  ContactRound,
  Database,
  HardHat,
  LogOut,
  MessageCircle,
  WalletCards,
  ShoppingBag,
  UsersRound,
} from "lucide-react";

const links = [
  { href: "/admin", label: "Orders", icon: ShoppingBag },
  { href: "/admin/today", label: "Today", icon: CalendarDays },
  { href: "/admin/leads", label: "Leads", icon: UsersRound },
  { href: "/admin/clients", label: "Clients DB", icon: ContactRound },
  { href: "/admin/whatsapp", label: "WhatsApp", icon: MessageCircle },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/payments", label: "Payments", icon: WalletCards },
  { href: "/admin/workers", label: "Workers", icon: HardHat },
  { href: "/admin/worker-database", label: "Worker DB", icon: Database },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function signOut() {
    await getSupabaseBrowser().auth.signOut();
    router.push("/admin-login");
    router.refresh();
  }

  return (
    <nav
      aria-label="CRM sections"
      className="grid w-full grid-cols-2 gap-2 rounded-3xl border border-black/5 bg-white p-2 shadow-sm md:flex md:w-auto md:overflow-x-auto"
    >
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex min-h-14 min-w-0 shrink-0 items-center justify-center gap-1.5 rounded-2xl px-1.5 py-3 text-xs font-extrabold transition sm:gap-2 sm:px-4 sm:text-sm ${pathname === link.href ? "bg-black text-white shadow-md" : "text-gray-600 hover:bg-yellow-50 hover:text-black"}`}
          >
            <Icon
              className={`h-4 w-4 shrink-0 sm:h-5 sm:w-5 ${pathname === link.href ? "text-yellow-400" : "text-gray-400"}`}
            />
            <span className="truncate">{link.label}</span>
          </Link>
        );
      })}
      <button
        type="button"
        onClick={() => void signOut()}
        className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-black/10 bg-[#f5f5f2] px-4 py-3 text-xs font-extrabold text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 sm:text-sm"
      >
        <LogOut className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        Sign out
      </button>
    </nav>
  );
}
