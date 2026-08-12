import { sendWorkerWelcomeEmail } from "@/lib/emails";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { hashWorkerOnboardingToken } from "@/lib/worker-invitations";
import {
  isValidWorkerPassword,
  WORKER_PASSWORD_POLICY_VERSION,
} from "@/lib/worker-password";
import { z } from "zod";

export const dynamic = "force-dynamic";

const submitSchema = z.object({
  token: z.string().min(20).max(500),
  password: z.string().min(8).max(128),
  confirmPassword: z.string().min(8).max(128),
  policyAccepted: z.literal(true),
});

async function findOnboardingToken(token: string) {
  const admin = getSupabaseAdmin();
  return admin
    .from("worker_onboarding_tokens")
    .select("id, worker_id, expires_at, used_at")
    .eq("token_hash", hashWorkerOnboardingToken(token))
    .maybeSingle();
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token") || "";
  if (token.length < 20)
    return Response.json(
      { error: "Invitation link is invalid" },
      { status: 400 },
    );

  const admin = getSupabaseAdmin();
  const { data: invite, error } = await findOnboardingToken(token);
  if (error || !invite || invite.used_at)
    return Response.json(
      { error: "Invitation link is invalid or has already been used" },
      { status: 410 },
    );
  if (new Date(invite.expires_at).getTime() <= Date.now())
    return Response.json(
      { error: "Invitation link has expired. Ask THEVULGO for a new one." },
      { status: 410 },
    );

  const { data: worker, error: workerError } = await admin
    .from("worker_profiles")
    .select("*")
    .eq("user_id", invite.worker_id)
    .maybeSingle();
  if (workerError || !worker)
    return Response.json(
      { error: "Worker profile was not found" },
      { status: 404 },
    );

  return Response.json(
    {
      worker: {
        fullName: worker.full_name,
        firstName:
          worker.legal_first_name || worker.full_name.split(" ")[0] || "",
        lastName:
          worker.legal_last_name ||
          worker.full_name.split(" ").slice(1).join(" "),
        email: worker.email,
        phone: worker.phone || "Not recorded",
        residentialAddress: worker.residential_address || "Not recorded",
        contractorShare: "50% of each assigned order",
      },
      expiresAt: invite.expires_at,
      policyVersion: WORKER_PASSWORD_POLICY_VERSION,
    },
    {
      headers: {
        "Cache-Control": "private, no-store, max-age=0",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    },
  );
}

export async function POST(request: Request) {
  const parsed = submitSchema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json(
      { error: "Complete all required password and policy fields" },
      { status: 400 },
    );
  const input = parsed.data;
  if (input.password !== input.confirmPassword)
    return Response.json({ error: "Passwords do not match" }, { status: 400 });
  if (!isValidWorkerPassword(input.password))
    return Response.json(
      {
        error:
          "Password must contain at least 8 characters, 6 letters, 1 number and 1 special character",
      },
      { status: 400 },
    );

  const admin = getSupabaseAdmin();
  const { data: invite, error } = await findOnboardingToken(input.token);
  if (error || !invite || invite.used_at)
    return Response.json(
      { error: "Invitation link is invalid or has already been used" },
      { status: 410 },
    );
  if (new Date(invite.expires_at).getTime() <= Date.now())
    return Response.json(
      { error: "Invitation link has expired. Ask THEVULGO for a new one." },
      { status: 410 },
    );

  const { data: worker, error: workerError } = await admin
    .from("worker_profiles")
    .select("user_id, full_name, email")
    .eq("user_id", invite.worker_id)
    .maybeSingle();
  if (workerError || !worker)
    return Response.json(
      { error: "Worker profile was not found" },
      { status: 404 },
    );

  const now = new Date().toISOString();
  const { error: authError } = await admin.auth.admin.updateUserById(
    worker.user_id,
    {
      password: input.password,
      email_confirm: true,
      user_metadata: {
        full_name: worker.full_name,
        account_type: "spain_independent_contractor",
      },
    },
  );
  if (authError)
    return Response.json({ error: authError.message }, { status: 500 });

  const { error: profileError } = await admin
    .from("worker_profiles")
    .update({
      contractor_status: "active",
      password_created_at: now,
      data_policy_accepted_at: now,
      data_policy_version: WORKER_PASSWORD_POLICY_VERSION,
    })
    .eq("user_id", worker.user_id);
  if (profileError)
    return Response.json({ error: profileError.message }, { status: 500 });

  await admin
    .from("worker_onboarding_tokens")
    .update({ used_at: now })
    .eq("id", invite.id)
    .is("used_at", null);
  await admin.from("worker_activity_events").insert({
    worker_id: worker.user_id,
    event_type: "password_created",
    detail: `Password created and data policy ${WORKER_PASSWORD_POLICY_VERSION} accepted.`,
    metadata: { policy_version: WORKER_PASSWORD_POLICY_VERSION },
  });

  let welcome: { emailId: string | null; error: string | null } = {
    emailId: null,
    error: null,
  };
  try {
    welcome = await sendWorkerWelcomeEmail({
      workerId: worker.user_id,
      fullName: worker.full_name,
      email: worker.email,
    });
  } catch (emailError) {
    welcome.error =
      emailError instanceof Error ? emailError.message : "Welcome email failed";
  }
  const welcomeUpdate = {
    welcome_email_id: welcome.emailId,
    welcome_email_status: welcome.error ? "failed" : "sent",
    welcome_email_error: welcome.error,
    welcome_email_sent_at: welcome.error ? null : now,
    welcome_email_last_event_at: now,
  };
  await admin
    .from("worker_profiles")
    .update(welcomeUpdate)
    .eq("user_id", worker.user_id);
  await admin.from("worker_activity_events").insert({
    worker_id: worker.user_id,
    event_type: welcome.error ? "welcome_email_failed" : "welcome_email_sent",
    detail: welcome.error
      ? `Welcome email failed: ${welcome.error}`
      : `Welcome email sent to ${worker.email}.`,
    metadata: { email_id: welcome.emailId },
  });

  return Response.json({
    ok: true,
    fullName: worker.full_name,
    welcomeEmailSent: !welcome.error,
  });
}
