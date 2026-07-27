// Lightweight, dependency-free content checks for public comment
// submissions. Two tiers:
//   - blocked: outright rejected, submission fails with an error.
//   - suspicious: still saved, but held unapproved for admin review instead
//     of publishing immediately.
// Extend BLOCKED_WORDS as needed; keep it short and generic since this is a
// first line of defense, not a full moderation system.

const BLOCKED_WORDS = ["viagra", "casino", "porn", "xxx"];

const URL_PATTERN = /(https?:\/\/|www\.)\S+/i;
const REPEATED_CHAR_PATTERN = /(.)\1{6,}/; // e.g. "aaaaaaaa"
const HTML_TAG_PATTERN = /<\s*\/?\s*[a-z][\s\S]*>/i;

export function containsBlockedContent(text) {
  const lower = text.toLowerCase();
  if (HTML_TAG_PATTERN.test(text)) return true;
  return BLOCKED_WORDS.some((word) => lower.includes(word));
}

export function looksSuspicious(text) {
  if (URL_PATTERN.test(text)) return true;
  if (REPEATED_CHAR_PATTERN.test(text)) return true;

  const letters = text.replace(/[^a-zA-Z]/g, "");
  const upper = text.replace(/[^A-Z]/g, "");
  if (letters.length > 20 && upper.length / letters.length > 0.7) return true; // SHOUTING

  return false;
}
