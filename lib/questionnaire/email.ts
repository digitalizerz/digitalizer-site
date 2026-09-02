import { Resend } from "resend";
import {
  budgetOptions,
  contactMethods,
  featureOptions,
  logoOptions,
  optionLabel,
  styleOptions,
  timelineOptions,
} from "@/data/websiteQuestionnaire";
import { escapeHtml, formatMultiline } from "@/lib/questionnaire/escape";
import type { StoredQuestionnaire } from "@/lib/questionnaire/store";

function section(title: string, body: string) {
  return `${title}\n\n${body}`.trim();
}

export function formatQuestionnaireText(record: StoredQuestionnaire) {
  const { fields, submittedAt } = record;
  const inspiration = fields.inspiration
    .filter((item) => item.url || item.likes)
    .map((item) => `${item.url}${item.likes ? `\nLikes: ${item.likes}` : ""}`)
    .join("\n\n");

  return [
    "NEW WEBSITE PROJECT",
    "",
    fields.organization.toUpperCase(),
    "",
    section(
      "CONTACT",
      [
        fields.name,
        fields.email,
        fields.phone,
        fields.location,
        `Preferred: ${optionLabel(contactMethods, fields.preferredContact)}`,
        fields.aboutNotes ? `Notes: ${fields.aboutNotes}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    ),
    "",
    section(
      "YOUR BUSINESS",
      [
        `Organization:\n${fields.organizationAbout}`,
        `Products / Services:\n${fields.productsServices}`,
        `Website Purpose:\n${fields.websitePurpose}`,
        `Audience:\n${fields.audience}`,
      ].join("\n\n"),
    ),
    "",
    section(
      "LOOK & FEEL",
      [
        `Preferred Colors:\n${fields.colors || "—"}`,
        `Styles:\n${fields.styles.map((id) => optionLabel(styleOptions, id)).join(", ")}`,
        fields.otherStyle ? `Other style:\n${fields.otherStyle}` : "",
        fields.visualNotes ? `Visual notes:\n${fields.visualNotes}` : "",
        inspiration ? `Inspiration:\n${inspiration}` : "Inspiration:\n—",
      ]
        .filter(Boolean)
        .join("\n\n"),
    ),
    "",
    section(
      "YOUR WEBSITE",
      [
        `Features:\n${fields.features.map((id) => optionLabel(featureOptions, id)).join("\n")}`,
        fields.otherFunctionality
          ? `Other functionality:\n${fields.otherFunctionality}`
          : "",
        `Logo:\n${optionLabel(logoOptions, fields.logo)}`,
      ]
        .filter(Boolean)
        .join("\n\n"),
    ),
    "",
    section(
      "PROJECT",
      [
        `Timeline:\n${optionLabel(timelineOptions, fields.timeline)}${
          fields.specificDate ? ` (${fields.specificDate})` : ""
        }`,
        `Budget:\n${optionLabel(budgetOptions, fields.budget)}`,
        fields.projectNotes ? `Additional Notes:\n${fields.projectNotes}` : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
    ),
    "",
    `SUBMITTED:\n${submittedAt}`,
    `REFERENCE:\n${record.id}`,
  ].join("\n");
}

function htmlBlock(title: string, body: string) {
  return `<h2 style="font-size:13px;letter-spacing:0.16em;text-transform:uppercase;color:#63A73A;margin:28px 0 10px">${escapeHtml(title)}</h2>
  <div style="font-size:15px;line-height:1.6;color:#121417">${body}</div>`;
}

export function formatQuestionnaireHtml(record: StoredQuestionnaire) {
  const { fields, submittedAt } = record;
  const inspiration = fields.inspiration
    .filter((item) => item.url || item.likes)
    .map(
      (item) =>
        `<p>${escapeHtml(item.url)}${item.likes ? `<br />Likes: ${formatMultiline(item.likes)}` : ""}</p>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="margin:0;background:#F7F7F4;padding:32px;font-family:Geist,Helvetica,Arial,sans-serif">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;padding:32px;border:1px solid rgba(18,20,23,0.12)">
    <p style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#63A73A;margin:0 0 8px">New website project</p>
    <h1 style="margin:0 0 24px;font-size:28px;letter-spacing:-0.03em">${escapeHtml(fields.organization)}</h1>
    ${htmlBlock(
      "Contact",
      [
        escapeHtml(fields.name),
        escapeHtml(fields.email),
        fields.phone ? escapeHtml(fields.phone) : "",
        fields.location ? escapeHtml(fields.location) : "",
        `Preferred: ${escapeHtml(optionLabel(contactMethods, fields.preferredContact))}`,
        fields.aboutNotes ? `Notes: ${formatMultiline(fields.aboutNotes)}` : "",
      ]
        .filter(Boolean)
        .join("<br />"),
    )}
    ${htmlBlock("Your business", [
      `<p><strong>Organization</strong><br />${formatMultiline(fields.organizationAbout)}</p>`,
      `<p><strong>Products / Services</strong><br />${formatMultiline(fields.productsServices)}</p>`,
      `<p><strong>Website Purpose</strong><br />${formatMultiline(fields.websitePurpose)}</p>`,
      `<p><strong>Audience</strong><br />${formatMultiline(fields.audience)}</p>`,
    ].join(""))}
    ${htmlBlock("Look & feel", [
      `<p><strong>Preferred Colors</strong><br />${escapeHtml(fields.colors || "—")}</p>`,
      `<p><strong>Styles</strong><br />${escapeHtml(fields.styles.map((id) => optionLabel(styleOptions, id)).join(", "))}</p>`,
      fields.otherStyle ? `<p><strong>Other style</strong><br />${formatMultiline(fields.otherStyle)}</p>` : "",
      fields.visualNotes ? `<p><strong>Visual notes</strong><br />${formatMultiline(fields.visualNotes)}</p>` : "",
      `<p><strong>Inspiration</strong></p>${inspiration || "<p>—</p>"}`,
    ].join(""))}
    ${htmlBlock("Your website", [
      `<p><strong>Features</strong><br />${fields.features.map((id) => escapeHtml(optionLabel(featureOptions, id))).join("<br />")}</p>`,
      fields.otherFunctionality
        ? `<p><strong>Other functionality</strong><br />${formatMultiline(fields.otherFunctionality)}</p>`
        : "",
      `<p><strong>Logo</strong><br />${escapeHtml(optionLabel(logoOptions, fields.logo))}</p>`,
    ].join(""))}
    ${htmlBlock("Project", [
      `<p><strong>Timeline</strong><br />${escapeHtml(optionLabel(timelineOptions, fields.timeline))}${fields.specificDate ? ` (${escapeHtml(fields.specificDate)})` : ""}</p>`,
      `<p><strong>Budget</strong><br />${escapeHtml(optionLabel(budgetOptions, fields.budget))}</p>`,
      fields.projectNotes
        ? `<p><strong>Additional Notes</strong><br />${formatMultiline(fields.projectNotes)}</p>`
        : "",
    ].join(""))}
    <p style="margin-top:28px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(18,20,23,0.45)">
      Submitted ${escapeHtml(submittedAt)} · ${escapeHtml(record.id)}
    </p>
  </div>
</body></html>`;
}

export async function sendQuestionnaireNotification(record: StoredQuestionnaire) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUESTIONNAIRE_NOTIFY_EMAIL ?? "business@digitalizer.io";
  const from =
    process.env.RESEND_FROM_EMAIL ??
    (process.env.NODE_ENV !== "production"
      ? "Digitalizer <onboarding@resend.dev>"
      : "");

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("Questionnaire stored", {
        id: record.id,
        organization: record.fields.organization,
      });
      return { sent: false as const };
    }
    throw new Error("Email delivery is not configured.");
  }

  const resend = new Resend(apiKey);
  const subject = `New Website Questionnaire — ${record.fields.organization}`;

  const result = await resend.emails.send({
    from,
    to,
    replyTo: record.fields.email,
    subject,
    text: formatQuestionnaireText(record),
    html: formatQuestionnaireHtml(record),
  });

  if (result.error) {
    throw new Error("Email delivery failed.");
  }

  return { sent: true as const };
}
