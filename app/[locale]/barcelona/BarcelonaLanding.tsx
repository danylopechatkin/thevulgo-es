import MarketLanding from "../madrid/MadridLanding";

export default function BarcelonaLanding({ locale, servicePath }: { locale: string; servicePath?: string }) {
  return <MarketLanding locale={locale} servicePath={servicePath} market="barcelona" />;
}
