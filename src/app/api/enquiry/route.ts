import { NextResponse } from "next/server";

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
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // No email/database provider is configured yet. For now, enquiries are
  // logged server-side so they show up in deployment logs. Wire this up to
  // a transactional email service (e.g. Resend) or a database once chosen —
  // see the "Contact form backend" note in README.md.
  console.log("New enquiry:", {
    type,
    name,
    email,
    channel,
    message,
    timing,
    budget,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
