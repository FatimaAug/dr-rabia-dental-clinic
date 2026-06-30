import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || "rabiaaxam@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    const missingVars = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"].filter(
      (key) => !process.env[key],
    );

    if (missingVars.length > 0) {
      console.error(
        `Contact form: missing SMTP environment variables: ${missingVars.join(", ")}`,
      );
      return NextResponse.json(
        {
          error: `Email service is not configured yet. Add ${missingVars.join(", ")} to .env.local and restart the app.`,
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Dr Rabia Noor Website" <${SMTP_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: subject ? `New Inquiry: ${subject}` : "New Website Inquiry",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
