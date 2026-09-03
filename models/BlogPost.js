import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const sectionSchema = new Schema(
  { heading: { type: String, required: true }, body: { type: String, required: true } },
  { _id: false },
);

// A single ordered list of body blocks — paragraphs and sections
// interleaved in whatever order the admin arranged them in. `content` and
// `sections` below are kept in sync (paragraphs-only / sections-only, in
// their own relative order) for older code paths and posts saved before
// `blocks` existed; the public page prefers `blocks` when present.
const blockSchema = new Schema(
  {
    type: { type: String, enum: ["paragraph", "section"], required: true },
    text: { type: String },
    heading: { type: String },
    body: { type: String },
  },
  { _id: false },
);

const blogPostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true, index: true },
    date: { type: String, required: true },
    publishedAt: { type: Date, required: true, index: true },
    excerpt: { type: String, required: true },
    views: { type: Number, default: 0 },
    image: {
      url: { type: String },
      publicId: { type: String },
    },
    content: { type: [String], default: [] },
    sections: { type: [sectionSchema], default: [] },
    blocks: { type: [blockSchema], default: [] },
    conclusion: { type: String, default: "" },
    keyPoints: { type: [String], default: [] },
    published: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

export default models.BlogPost || model("BlogPost", blogPostSchema);
