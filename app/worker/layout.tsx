import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";

export const metadata: Metadata = { title: "THEVULGO Worker Portal", ...noindexMetadata };

export default function WorkerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
