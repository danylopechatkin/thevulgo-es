"use client";

import { validateWorkerPassword } from "@/lib/worker-password";
import { getSupabaseBrowser } from "@/lib/supabase-browser";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type WorkerProfile = {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  residentialAddress: string;
  contractorShare: string;
};

export default function WorkerOnboardingClient({ token }: { token: string }) {
  const router = useRouter();
  const [worker, setWorker] = useState<WorkerProfile | null>(null);
  const [loading, setLoading] = useState(Boolean(token));
  const [fatalError, setFatalError] = useState(
    token
      ? ""
      : "Invitation link is missing. Ask THEVULGO for a new invitation.",
  );
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(5);

  useEffect(() => {
    if (!token) return;
    void fetch(`/api/worker/onboarding?token=${encodeURIComponent(token)}`)
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok)
          throw new Error(body.error || "Invitation is unavailable");
        setWorker(body.worker);
      })
      .catch((requestError) =>
        setFatalError(
          requestError instanceof Error
            ? requestError.message
            : "Invitation is unavailable",
        ),
      )
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    if (!success || !portalReady) return;
    if (redirectSeconds <= 0) {
      router.replace("/worker?welcome=1");
      return;
    }
    const timer = window.setTimeout(
      () => setRedirectSeconds((value) => value - 1),
      1000,
    );
    return () => window.clearTimeout(timer);
  }, [portalReady, redirectSeconds, router, success]);

  const rules = useMemo(() => validateWorkerPassword(password), [password]);
  const passwordsMatch = Boolean(password) && password === confirmPassword;
  const passwordValid = Object.values(rules).every(Boolean);
  const canSubmit =
    Boolean(worker) &&
    passwordValid &&
    passwordsMatch &&
    policyAccepted &&
    !saving;

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit || !worker) return;
    const currentWorker = worker;
    setSaving(true);
    setError("");
    const response = await fetch("/api/worker/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        password,
        confirmPassword,
        policyAccepted,
      }),
    });
    const body = await response.json();
    setSaving(false);
    if (!response.ok) {
      setError(body.error || "Could not create your password");
      return;
    }
    const { error: signInError } =
      await getSupabaseBrowser().auth.signInWithPassword({
        email: currentWorker.email,
        password,
      });
    setPassword("");
    setConfirmPassword("");
    setPortalReady(!signInError);
    setSuccess(true);
  }

  if (loading)
    return (
      <main className="grid min-h-screen place-items-center bg-[#f4f4f0] p-5">
        <div className="rounded-3xl bg-black px-8 py-7 text-center text-white shadow-2xl">
          <div className="mx-auto h-9 w-9 animate-pulse rounded-xl bg-yellow-400" />
          <p className="mt-4 font-black">Opening your secure profile…</p>
        </div>
      </main>
    );

  if (!worker || fatalError)
    return (
      <main className="grid min-h-screen place-items-center bg-[#f4f4f0] p-5">
        <div className="max-w-md rounded-[2rem] border border-red-200 bg-white p-8 text-center shadow-xl">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-red-700">
            <X />
          </div>
          <h1 className="mt-5 text-2xl font-black">Invitation unavailable</h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">{fatalError}</p>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen bg-[#f4f4f0] px-3 py-5 text-[#111] sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl sm:rounded-[2.5rem]">
        <header className="relative overflow-hidden bg-[#111] p-6 text-white sm:p-9">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1.5 text-[11px] font-black uppercase tracking-[.13em] text-black">
                <ShieldCheck className="h-4 w-4" /> Secure contractor onboarding
              </div>
              <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                Welcome, {worker.firstName}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                Review the profile created by THEVULGO and set the private
                password only you will know.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-[10px] font-black uppercase tracking-[.14em] text-white/45">
                Contractor share
              </p>
              <p className="mt-1 text-xl font-black text-yellow-400">
                50% per job
              </p>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[.85fr_1.15fr]">
          <section className="border-b border-black/5 bg-[#faf9f2] p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="text-xs font-black uppercase tracking-[.14em] text-yellow-700">
              Your profile
            </p>
            <h2 className="mt-2 text-2xl font-black">Information on file</h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Contact THEVULGO before continuing if anything is incorrect.
            </p>
            <div className="mt-6 space-y-3">
              <ProfileItem
                icon={<UserRound />}
                label="Legal name"
                value={worker.fullName}
              />
              <ProfileItem
                icon={<Mail />}
                label="Portal email"
                value={worker.email}
              />
              <ProfileItem
                icon={<Phone />}
                label="Phone"
                value={worker.phone}
              />
              <ProfileItem
                icon={<MapPin />}
                label="Residential address"
                value={worker.residentialAddress}
              />
              <ProfileItem
                icon={<BriefcaseBusiness />}
                label="Relationship"
                value="Independent contractor"
              />
            </div>
            <div className="mt-6 rounded-2xl bg-black p-5 text-sm leading-6 text-white/65">
              <LockKeyhole className="mb-3 h-5 w-5 text-yellow-400" />
              THEVULGO administrators can see whether setup is complete, but
              they can never see your password.
            </div>
          </section>

          <form onSubmit={submit} className="p-5 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-yellow-400 p-3">
                <KeyRound className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black">Create your password</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Use a unique password you do not use elsewhere.
                </p>
              </div>
            </div>

            <label className="mt-7 block text-xs font-black uppercase tracking-[.08em] text-gray-600">
              New password
              <span className="relative mt-2 block">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f7f4] px-4 py-4 pr-12 text-base font-semibold normal-case tracking-normal outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-gray-500 hover:bg-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </span>
            </label>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Rule ok={rules.length} text="8+ characters total" />
              <Rule ok={rules.letters} text="At least 6 letters" />
              <Rule ok={rules.number} text="At least 1 number" />
              <Rule ok={rules.symbol} text="At least 1 special character" />
            </div>

            <label className="mt-5 block text-xs font-black uppercase tracking-[.08em] text-gray-600">
              Confirm password
              <input
                required
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f7f4] px-4 py-4 text-base font-semibold normal-case tracking-normal outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-100"
              />
            </label>
            {confirmPassword ? (
              <div className="mt-2">
                <Rule
                  ok={passwordsMatch}
                  text={
                    passwordsMatch
                      ? "Passwords match"
                      : "Passwords do not match"
                  }
                />
              </div>
            ) : null}

            <div className="mt-6 rounded-2xl border border-black/8 bg-[#faf9f2] p-4">
              <button
                type="button"
                onClick={() => setPolicyOpen((value) => !value)}
                className="flex w-full items-center justify-between gap-3 text-left font-black"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-yellow-700" /> Review
                  data retention policy
                </span>
                <span className="text-xl">{policyOpen ? "−" : "+"}</span>
              </button>
              {policyOpen ? (
                <div className="mt-4 border-t border-black/8 pt-4 text-sm leading-6 text-gray-600">
                  <p>
                    THEVULGO stores the profile and identity documents needed to
                    administer contractor assignments, payments, safety and
                    legal records. Access is restricted to authorized
                    administrators.
                  </p>
                  <p className="mt-3">
                    Documents are kept only for the operational or legal
                    retention period, then reviewed for secure deletion. You may
                    ask THEVULGO to correct your profile information. Passwords
                    are protected by Supabase Auth and are never visible to
                    THEVULGO.
                  </p>
                </div>
              ) : null}
              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl bg-white p-3 text-sm font-bold">
                <input
                  type="checkbox"
                  checked={policyAccepted}
                  onChange={(event) => setPolicyAccepted(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-yellow-500"
                />
                I have reviewed and accept the data retention policy.
              </label>
            </div>

            {error ? (
              <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700">
                {error}
              </p>
            ) : null}
            <button
              disabled={!canSubmit}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-4 font-black shadow-[0_10px_30px_rgba(250,204,21,.3)] transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:shadow-none"
            >
              <LockKeyhole className="h-5 w-5" />
              {saving ? "Creating secure access…" : "Save password"}
            </button>
          </form>
        </div>
      </div>

      {success ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/65 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-7 text-center shadow-2xl sm:p-9">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
              <BadgeCheck className="h-9 w-9" />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[.14em] text-yellow-700">
              THEVULGO contractor network
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Password created successfully
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Welcome, {worker.fullName}. A confirmation email has been sent to{" "}
              {worker.email}.
            </p>
            <div className="mt-6 rounded-2xl bg-black p-4 text-sm font-bold text-white">
              Your secure contractor profile is now active.
            </div>
            <button
              type="button"
              onClick={() =>
                router.replace(
                  portalReady ? "/worker?welcome=1" : "/worker-login",
                )
              }
              className="mt-4 w-full rounded-2xl bg-yellow-400 px-5 py-4 font-black text-black transition hover:bg-yellow-300"
            >
              {portalReady ? "Open Worker Portal" : "Continue to worker login"}
            </button>
            {portalReady ? (
              <p className="mt-3 text-xs font-bold text-gray-500">
                Opening your jobs and training portal in {redirectSeconds}…
              </p>
            ) : (
              <p className="mt-3 text-xs leading-5 text-gray-500">
                Your password is ready. Sign in with your email and the password
                you just created.
              </p>
            )}
          </div>
        </div>
      ) : null}
    </main>
  );
}

function ProfileItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4">
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.12em] text-gray-400">
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        {label}
      </div>
      <p className="mt-1.5 break-words font-black">{value}</p>
    </div>
  );
}

function Rule({ ok, text }: { ok: boolean; text: string }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold ${ok ? "bg-emerald-50 text-emerald-800" : "bg-gray-100 text-gray-500"}`}
    >
      <span
        className={`grid h-5 w-5 place-items-center rounded-full ${ok ? "bg-emerald-600 text-white" : "bg-gray-300 text-white"}`}
      >
        {ok ? <Check className="h-3 w-3" /> : "·"}
      </span>
      {text}
    </div>
  );
}
