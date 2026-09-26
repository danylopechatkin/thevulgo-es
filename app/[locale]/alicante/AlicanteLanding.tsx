import MarketLanding from "../madrid/MadridLanding";

export default function AlicanteLanding({ locale, servicePath }: { locale: string; servicePath?: string }) {
  return <MarketLanding locale={locale} servicePath={servicePath} market="alicante" />;
}
