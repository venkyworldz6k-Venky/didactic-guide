import { NextResponse } from "next/server";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = /\.(pdf|doc|docx)$/i;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const linkedin = String(formData.get("linkedin") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const resume = formData.get("resume");

    if (fullName.length < 2) {
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

    if (!position) {
      return NextResponse.json(
        { error: "Please select a position." },
        { status: 400 }
      );
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { error: "Please attach your resume file." },
        { status: 400 }
      );
    }

    if (!ALLOWED_EXTENSIONS.test(resume.name)) {
      return NextResponse.json(
        { error: "Resume must be a PDF, DOC, or DOCX file." },
        { status: 400 }
      );
    }

    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume file size must not exceed 5MB." },
        { status: 400 }
      );
    }

    if (linkedin) {
      try {
        const parsed = new URL(linkedin);
        if (!["http:", "https:"].includes(parsed.protocol)) {
          return NextResponse.json(
            { error: "LinkedIn URL must use http or https." },
            { status: 400 }
          );
        }
      } catch {
        return NextResponse.json(
          { error: "Please provide a valid LinkedIn profile URL." },
          { status: 400 }
        );
      }
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please include at least 10 characters in your message." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.CAREERS_WEBHOOK_URL;
    if (webhookUrl) {
      const forwardForm = new FormData();
      forwardForm.append("fullName", fullName);
      forwardForm.append("email", email);
      forwardForm.append("position", position);
      forwardForm.append("linkedin", linkedin);
      forwardForm.append("message", message);
      forwardForm.append("resume", resume);

      const forwardRes = await fetch(webhookUrl, {
        method: "POST",
        body: forwardForm,
      });

      if (!forwardRes.ok) {
        return NextResponse.json(
          { error: "Failed to forward application to configured endpoint." },
          { status: 502 }
        );
      }
    } else {
      console.info("[Proton Solutions Career Application]", {
        submittedAt: new Date().toISOString(),
        position,
        resumeName: resume.name,
        resumeBytes: resume.size,
      });
    }

    return NextResponse.json(
      {
        ok: true,
        message: `Thank you, ${fullName}. Your application for ${position} has been received by Proton Solutions.`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to process application form data." },
      { status: 400 }
    );
  }
}
