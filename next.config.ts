import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale/services/montaje-ventilador-techo",
        destination:
          "/:locale/services/instalacion-ventilador-techo-valencia",
        permanent: true,
      },
      {
        source: "/:locale/services/instalar-ventilador-techo",
        destination:
          "/:locale/services/instalacion-ventilador-techo-valencia",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
