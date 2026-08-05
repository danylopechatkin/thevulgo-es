"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Orders" },
  { href: "/admin/today", label: "Today" },
  { href: "/admin/leads", label: "WhatsApp leads" },
];

export default function AdminSectionNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="CRM sections">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`shrink-0 rounded-2xl px-4 py-2.5 text-sm font-extrabold transition ${
              active
                ? "bg-black text-white shadow-md"
                : "border border-gray-300 bg-white text-black hover:border-yellow-400 hover:bg-yellow-50"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
