/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
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
