import {
  flattenZodErrors,
  questionnaireFieldsSchema,
} from "@/lib/questionnaire/schema";
import { sendQuestionnaireNotification } from "@/lib/questionnaire/email";
import { getRequestIp, limitQuestionnaire } from "@/lib/questionnaire/rateLimit";
import { storeQuestionnaire } from "@/lib/questionnaire/store";
import { verifyTurnstile } from "@/lib/questionnaire/turnstile";

export const runtime = "nodejs";

const generic = {
  ok: true as const,
  message: "Thank you. We’ll review this and follow up.",
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Please try again." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, message: "Please try again." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const honeypot = String(payload.company_reference_url ?? "").trim();
  if (honeypot) {
    return Response.json(generic);
  }

  const ip = getRequestIp(request);
  const limited = limitQuestionnaire(ip);

  if (!limited.ok) {
    return Response.json(
      { ok: false, message: "Please try again in a little while." },
      { status: 429 },
    );
  }

  const token = String(payload.turnstileToken ?? "").trim();
  const human = await verifyTurnstile(token, ip);
  if (!human) {
    return Response.json(
      { ok: false, message: "Please confirm you’re human and try again." },
      { status: 400 },
    );
  }

  const parsed = questionnaireFieldsSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        message: "Please review the highlighted fields.",
        errors: flattenZodErrors(parsed.error),
      },
      { status: 422 },
    );
  }

  try {
    const record = await storeQuestionnaire(parsed.data);
    await sendQuestionnaireNotification(record);
    return Response.json(generic);
  } catch {
    return Response.json(
      { ok: false, message: "We couldn’t send this just now. Please try again." },
      { status: 503 },
    );
  }
}
