const WINDOW_MS = 60 * 60 * 1000;
const LIMIT = 3;

const attempts = new Map<string, number[]>();

export function getRequestIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function limitQuestionnaire(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);

  if (recent.length >= LIMIT) {
    return { ok: false as const };
  }

  recent.push(now);
  attempts.set(ip, recent);
  return { ok: true as const };
}
