"use server";

export type ContactState = {
  ok: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    details?: string;
  };
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("company_website") ?? "").trim();
  if (honeypot) {
    return { ok: true };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  const errors: ContactState["errors"] = {};

  if (name.length < 2) {
    errors.name = "Please add your name.";
  }

  if (!emailPattern.test(email)) {
    errors.email = "Please add a valid email.";
  }

  if (details.length < 8) {
    errors.details = "Please add a short note about the project.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const payload = { name, email, subject, details };

  if (process.env.CONTACT_WEBHOOK_URL) {
    await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } else if (process.env.NODE_ENV !== "production") {
    console.info("Contact inquiry", payload);
  }

  return { ok: true };
}
