import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const UPLOAD_FOLDER = "dr-kunal-sarkar/blog";

/** Uploads a raw Buffer to Cloudinary. Returns { url, publicId }. */
export async function uploadBuffer(buffer) {
  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: UPLOAD_FOLDER, resource_type: "image" },
      (error, result) => (error ? reject(error) : resolve(result)),
    );
    stream.end(buffer);
  });

  return { url: result.secure_url, publicId: result.public_id };
}

/**
 * Uploads a File (from a Server Action's FormData) to Cloudinary.
 * Returns { url, publicId } for storing on the BlogPost document.
 */
export async function uploadImage(file) {
  const buffer = Buffer.from(await file.arrayBuffer());
  return uploadBuffer(buffer);
}

export async function deleteImage(publicId) {
  if (!publicId) return;
  await cloudinary.uploader.destroy(publicId);
}

export default cloudinary;
