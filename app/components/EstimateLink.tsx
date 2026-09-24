"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  source: string;
  service?: string;
  category?: string;
};

export default function EstimateLink({
  children,
  className,
  source,
  service,
  category = "handyman",
}: Props) {
  const params = new URLSearchParams({ category, from: source });
  if (service) params.set("service", service);
  const href = `/en/estimate?${params.toString()}`;

  return (
    <a href={href} className={className} data-analytics-cta={`${category}_${source}_book`} data-cta-location={source} data-service={service || category}>
      {children}
    </a>
  );
}
