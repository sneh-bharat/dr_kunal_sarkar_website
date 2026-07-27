/**
 * Converts Mongoose documents (from a .lean() query) into plain,
 * JSON-serializable objects so they can cross the Server -> Client
 * Component boundary (ObjectId/Date instances can't cross that boundary
 * directly).
 */
export function serializeDoc(doc) {
  return JSON.parse(JSON.stringify(doc));
}
