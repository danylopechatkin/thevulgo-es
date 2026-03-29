import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*")
      .eq("status", "new")
      .eq("reminder_sent", false);

    if (error) {
      return Response.json({ success: false }, { status: 500 });
    }

    const now = new Date();
    let sentCount = 0;

    for (const order of orders || []) {
      if (!order.preferred_date || !order.preferred_time || !order.email) continue;

      const jobDateTime = new Date(
        `${order.preferred_date}T${order.preferred_time}:00+01:00`
      );

      const diffHours =
        (jobDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);

      if (diffHours <= 12 && diffHours > 0) {
        const res = await resend.emails.send({
          from: "TheVulgo <info@thevulgo.es>",
          to: [order.email],
          subject: "Reminder: your service is scheduled soon",
          html: `
            <p>Hi ${order.full_name},</p>
            <p>Your service is scheduled at ${order.preferred_time}</p>
          `,
        });

        if (!res.error) {
          await supabase
            .from("orders")
            .update({
              reminder_sent: true,
              status: "in_progress",
            })
            .eq("id", order.id);

          sentCount++;
        }
      }
    }

    return Response.json({
      success: true,
      sent: sentCount,
    });
  } catch (e) {
    return Response.json({ success: false }, { status: 500 });
  }
}