import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THEVULGO Spain CRM",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
