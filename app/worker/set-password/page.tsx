import WorkerOnboardingClient from "./WorkerOnboardingClient";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Secure contractor onboarding | THEVULGO",
  robots: { index: false, follow: false, noarchive: true },
};

export default async function WorkerSetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token = "" } = await searchParams;
  return <WorkerOnboardingClient token={token} />;
}
