/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // Blog post images are uploaded through the createBlogPost/updateBlogPost
      // Server Actions alongside the rest of the form. Next.js defaults this
      // to 1mb, which real camera/phone photos routinely exceed.
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
