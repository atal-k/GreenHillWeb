import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { brand } from "@/content/brand";

const TO_EMAIL = brand.email.display;

/** Strips CR/LF so user input can't inject extra headers into the email. */
function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

interface ContactPayload {
  name?: unknown;
  phone?: unknown;
  query?: unknown;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, query } = body;
  if (!isNonEmptyString(name) || !isNonEmptyString(phone) || !isNonEmptyString(query)) {
    return NextResponse.json({ error: "Name, phone and query are required" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS not configured");
    return NextResponse.json(
      { error: "Email sending is not configured on the server yet" },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port: SMTP_PORT ? Number(SMTP_PORT) : 465,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const cleanName = sanitizeHeaderValue(name);
  const cleanPhone = sanitizeHeaderValue(phone);
  const cleanQuery = query.trim();
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  try {
    await transporter.sendMail({
      from: `"Green Hill Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      subject: `New website enquiry from ${cleanName}`,
      text: `New website enquiry\n\nName: ${cleanName}\nPhone: ${cleanPhone}\nSubmitted: ${submittedAt} IST\n\nQuery:\n${cleanQuery}`,
      html: buildEmailHtml({ name: cleanName, phone: cleanPhone, query: cleanQuery, submittedAt }),
    });
  } catch (error) {
    console.error("Contact form: failed to send email", error);
    return NextResponse.json({ error: "Failed to send your message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml({
  name,
  phone,
  query,
  submittedAt,
}: {
  name: string;
  phone: string;
  query: string;
  submittedAt: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e4ecf5;width:120px;color:#64748b;font:600 13px/1.4 Arial,Helvetica,sans-serif;text-transform:uppercase;letter-spacing:.03em;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #e4ecf5;color:#1f2937;font:500 15px/1.5 Arial,Helvetica,sans-serif;">
        ${value}
      </td>
    </tr>`;

  return `
  <div style="background:#eef3f9;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4ecf5;">
      <tr>
        <td style="background:#0b2545;padding:22px 28px;">
          <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:.02em;">GREEN HILL</span>
          <span style="color:#d4a017;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-left:10px;">
            New Website Enquiry
          </span>
        </td>
      </tr>
      <tr>
        <td style="padding:28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", escapeHtml(name))}
            ${row("Phone", `<a href="tel:${escapeHtml(phone)}" style="color:#1b4e82;text-decoration:none;font-weight:600;">${escapeHtml(phone)}</a>`)}
            ${row("Submitted", `${escapeHtml(submittedAt)} IST`)}
          </table>

          <p style="margin:22px 0 8px;color:#64748b;font:600 13px/1.4 Arial,Helvetica,sans-serif;text-transform:uppercase;letter-spacing:.03em;">
            Query
          </p>
          <div style="background:#faf9f6;border:1px solid #e4ecf5;border-radius:12px;padding:16px;color:#1f2937;font:400 15px/1.6 Arial,Helvetica,sans-serif;white-space:pre-wrap;">${escapeHtml(query)}</div>

          <a href="tel:${escapeHtml(phone)}" style="display:inline-block;margin-top:24px;background:#d4a017;color:#1f2937;font:700 14px/1 Arial,Helvetica,sans-serif;text-decoration:none;padding:12px 22px;border-radius:999px;">
            Call ${escapeHtml(name.split(" ")[0])} Back
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 28px;background:#faf9f6;border-top:1px solid #e4ecf5;">
          <p style="margin:0;color:#64748b;font:400 12px/1.5 Arial,Helvetica,sans-serif;">
            Sent automatically from the query form on the Green Hill website.
          </p>
        </td>
      </tr>
    </table>
  </div>`;
}
