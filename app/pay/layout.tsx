import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";

export const metadata: Metadata = { title: "THEVULGO Payment", ...noindexMetadata };

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
