import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { deleteBlogPost } from "@/app/actions/admin-blog-actions";
import SearchBar from "@/components/admin/SearchBar";

export const dynamic = "force-dynamic";

async function getPosts(q) {
  await connectToDatabase();
  const filter = q
    ? {
        $or: [
          { title: { $regex: q, $options: "i" } },
          { category: { $regex: q, $options: "i" } },
          { slug: { $regex: q, $options: "i" } },
        ],
      }
    : {};
  return BlogPost.find(filter).sort({ publishedAt: -1 }).lean();
}

export default async function AdminBlogsPage({ searchParams }) {
  const { q } = await searchParams;
  const posts = await getPosts(q);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="font-heading font-700 text-navy text-[22px]">Blog Posts</h1>
        <div className="flex items-center gap-3">
          <SearchBar placeholder="Search title, category, slug…" />
          <Link href="/admin/blogs/new" className="btn-primary px-5 py-2 text-[13.5px] shrink-0">
            + New Post
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-300 overflow-hidden">
        <table className="w-full text-left text-[13.5px]">
          <thead className="bg-slate-50 text-navy/70">
            <tr>
              <th className="px-4 py-3 font-600">Title</th>
              <th className="px-4 py-3 font-600">Category</th>
              <th className="px-4 py-3 font-600">Views</th>
              <th className="px-4 py-3 font-600">Status</th>
              <th className="px-4 py-3 font-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id.toString()} className="border-t border-slate-100">
                <td className="px-4 py-3 text-navy font-600 max-w-xs truncate">{post.title}</td>
                <td className="px-4 py-3 text-ink">{post.category}</td>
                <td className="px-4 py-3 text-ink">{post.views}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      post.published
                        ? "rounded-full bg-teal-50 text-teal px-2.5 py-1 text-[11.5px] font-600"
                        : "rounded-full bg-slate-100 text-ink px-2.5 py-1 text-[11.5px] font-600"
                    }
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-3 whitespace-nowrap">
                  <Link
                    href={`/admin/blogs/${post._id}/edit`}
                    className="text-teal font-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <form
                    action={deleteBlogPost.bind(null, post._id.toString())}
                    className="inline"
                  >
                    <button type="submit" className="text-red-600 font-600 hover:underline">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-ink">
                  {q ? `No posts match "${q}".` : "No posts yet."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
