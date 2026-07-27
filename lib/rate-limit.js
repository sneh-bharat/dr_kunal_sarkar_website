// Simple in-memory sliding-window limiter for public form endpoints
// (comments, appointments, contact). Good enough for a single-instance
// deployment; on serverless platforms with multiple instances it's
// best-effort rather than a hard guarantee, since each instance keeps
// its own counters.
const hits = new Map();

export function isRateLimited(key, { limit = 5, windowMs = 60_000 } = {}) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now - entry.start > windowMs) {
    hits.set(key, { start: now, count: 1 });
    return false;
  }

  entry.count += 1;
  return entry.count > limit;
}
