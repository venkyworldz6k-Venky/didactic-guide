import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const company = body.company?.trim() || "";
    const subject = body.subject?.trim() || "";
    const message = body.message?.trim() || "";

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (subject.length < 3) {
      return NextResponse.json(
        { error: "Please provide a brief subject." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please include at least 10 characters in your message." },
        { status: 400 }
      );
    }

    const submission = {
      type: "contact_inquiry",
      submittedAt: new Date().toISOString(),
      name,
      email,
      company: company || undefined,
      subject,
      message,
    };

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const forwardRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      if (!forwardRes.ok) {
        return NextResponse.json(
          { error: "Failed to deliver inquiry to configured endpoint." },
          { status: 502 }
        );
      }
    } else {
      console.info("[Proton Solutions Contact Inquiry]", {
        submittedAt: submission.submittedAt,
        subject: submission.subject,
        company: submission.company,
      });
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Thank you for contacting Proton Solutions. Your message has been received and our team will respond within 1–2 business days.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
