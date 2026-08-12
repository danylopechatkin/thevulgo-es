import { createHash, randomBytes } from "node:crypto";
import { getSupabaseAdmin } from "./supabase-admin";
import { sendWorkerInvitationEmail } from "./emails";

export type WorkerInviteProfile = {
  user_id: string;
  full_name: string;
  email: string;
  phone?: string | null;
  residential_address?: string | null;
};

export const hashWorkerOnboardingToken = (token: string) =>
  createHash("sha256").update(token).digest("hex");

export async function issueWorkerInvitation(profile: WorkerInviteProfile) {
  const admin = getSupabaseAdmin();
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashWorkerOnboardingToken(token);
  const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString();

  await admin
    .from("worker_onboarding_tokens")
    .update({ used_at: new Date().toISOString() })
    .eq("worker_id", profile.user_id)
    .is("used_at", null);

  const { error: tokenError } = await admin
    .from("worker_onboarding_tokens")
    .insert({
      worker_id: profile.user_id,
      token_hash: tokenHash,
      expires_at: expiresAt,
    });
  if (tokenError) throw new Error(tokenError.message);

  const siteUrl = new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.thevulgo.es",
  );
  const onboardingUrl = new URL("/worker/set-password", siteUrl);
  onboardingUrl.searchParams.set("token", token);

  let emailId: string | null = null;
  let error: string | null = null;
  try {
    const email = await sendWorkerInvitationEmail({
      workerId: profile.user_id,
      fullName: profile.full_name,
      email: profile.email,
      phone: profile.phone || "",
      residentialAddress: profile.residential_address || "",
      onboardingUrl: onboardingUrl.toString(),
      expiresAt,
    });
    emailId = email.emailId;
    error = email.error;
  } catch (emailError) {
    error =
      emailError instanceof Error
        ? emailError.message
        : "Worker invitation email failed";
  }

  const now = new Date().toISOString();
  const { error: updateError } = await admin
    .from("worker_profiles")
    .update({
      onboarding_invite_email_id: emailId,
      onboarding_invite_email_status: error ? "failed" : "sent",
      onboarding_invite_email_error: error,
      onboarding_invite_sent_at: error ? null : now,
      onboarding_invite_email_last_event_at: now,
    })
    .eq("user_id", profile.user_id);
  if (updateError) throw new Error(updateError.message);

  await admin.from("worker_activity_events").insert({
    worker_id: profile.user_id,
    event_type: error ? "invitation_email_failed" : "invitation_email_sent",
    detail: error
      ? `Password invitation failed: ${error}`
      : `Password invitation sent to ${profile.email}.`,
    metadata: { email_id: emailId, expires_at: expiresAt },
  });

  if (error) throw new Error(error);
  return { emailId, expiresAt };
}
