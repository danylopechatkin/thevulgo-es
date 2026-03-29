export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    success: true,
    message: "reminders route works",
  });
}