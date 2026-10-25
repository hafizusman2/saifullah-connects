import { NextResponse } from "next/server";
import { Resend } from "resend";

type EnquiryPayload = {
  type?: string;
  name?: string;
  email?: string;
  channel?: string;
  message?: string;
  timing?: string;
  budget?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT = "saifullah@saifullahconnects.com";
const FROM = process.env.ENQUIRY_FROM_EMAIL ?? "Saifullah Connects <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: EnquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { type, name, email, channel, message, timing, budget } = body;

  if (!name || !email || !channel || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const receivedAt = new Date().toISOString();

  console.log("New enquiry:", { type, name, email, channel, message, timing, budget, receivedAt });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY is not set — enquiry was logged but no email was sent. " +
        "Set RESEND_API_KEY (see README) to actually deliver enquiries to " +
        RECIPIENT +
        "."
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);
  const rows: [string, string][] = [
    ["Type", type ?? "—"],
    ["Name", name],
    ["Email", email],
    ["Company / channel link", channel],
    ["Preferred timing", timing || "—"],
    ["Budget range", budget || "—"],
  ];

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      replyTo: email,
      subject: `New ${type ?? "website"} enquiry from ${name}`,
      html: `
        <h2>New enquiry from Saifullah Connects</h2>
        <table cellpadding="4" cellspacing="0">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="font-weight:600;padding-right:12px;">${escapeHtml(label)}</td><td>${escapeHtml(
                  value
                )}</td></tr>`
            )
            .join("")}
        </table>
        <p style="font-weight:600;">How can we help?</p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `,
      text: [
        ...rows.map(([label, value]) => `${label}: ${value}`),
        "",
        "How can we help?",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error sending enquiry email:", error);
      return NextResponse.json({ error: "Failed to send enquiry email." }, { status: 502 });
    }
  } catch (err) {
    console.error("Unexpected error sending enquiry email:", err);
    return NextResponse.json({ error: "Failed to send enquiry email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
