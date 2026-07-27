import { notFound } from "next/navigation";
import BlogPostForm from "@/components/admin/BlogPostForm";
import { updateBlogPost } from "@/app/actions/admin-blog-actions";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { serializeDoc } from "@/lib/serialize";

export const dynamic = "force-dynamic";

export default async function EditBlogPostPage({ params }) {
  const { id } = await params;

  await connectToDatabase();
  const post = await BlogPost.findById(id).lean();
  if (!post) notFound();

  const updateWithId = updateBlogPost.bind(null, id);

  return (
    <div>
      <h1 className="font-heading font-700 text-navy text-[22px] mb-6">Edit Blog Post</h1>
      <BlogPostForm action={updateWithId} post={serializeDoc(post)} />
    </div>
  );
}
