import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "THEVULGO Estimate",
  ...noindexMetadata,
};

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
