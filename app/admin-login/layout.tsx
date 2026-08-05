import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THEVULGO CRM Login",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
