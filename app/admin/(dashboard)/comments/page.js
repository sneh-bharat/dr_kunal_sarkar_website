import { connectToDatabase } from "@/lib/mongodb";
import Comment from "@/models/Comment";
import { serializeDoc } from "@/lib/serialize";
import CommentModerationRow from "@/components/admin/CommentModerationRow";
import SearchBar from "@/components/admin/SearchBar";

export const dynamic = "force-dynamic";

async function getComments(q) {
  await connectToDatabase();
  const filter = q
    ? {
        $or: [
          { name: { $regex: q, $options: "i" } },
          { message: { $regex: q, $options: "i" } },
          { postSlug: { $regex: q, $options: "i" } },
        ],
      }
    : {};
  const comments = await Comment.find(filter).sort({ createdAt: -1 }).lean();
  return serializeDoc(comments);
}

export default async function AdminCommentsPage({ searchParams }) {
  const { q } = await searchParams;
  const comments = await getComments(q);
  const pendingCount = comments.filter((c) => !c.approved).length;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="font-heading font-700 text-navy text-[22px]">
          Comments ({comments.length}
          {pendingCount > 0 && `, ${pendingCount} pending`})
        </h1>
        <SearchBar placeholder="Search name, message, post…" />
      </div>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <CommentModerationRow key={comment._id} comment={comment} />
        ))}
        {comments.length === 0 && (
          <li className="text-ink text-[14px]">
            {q ? `No comments match "${q}".` : "No comments yet."}
          </li>
        )}
      </ul>
    </div>
  );
}
