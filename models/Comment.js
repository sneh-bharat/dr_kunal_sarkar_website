import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const commentSchema = new Schema(
  {
    postSlug: { type: String, required: true, index: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    // Comments publish immediately by default; submitComment() flips this to
    // false (held for admin review) when the message looks like spam/abuse.
    approved: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

export default models.Comment || model("Comment", commentSchema);
