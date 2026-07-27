import BlogPostForm from "@/components/admin/BlogPostForm";
import { createBlogPost } from "@/app/actions/admin-blog-actions";

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="font-heading font-700 text-navy text-[22px] mb-6">New Blog Post</h1>
      <BlogPostForm action={createBlogPost} />
    </div>
  );
}
