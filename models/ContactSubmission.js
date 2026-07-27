import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const contactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "contacted", "done"],
      default: "new",
      index: true,
    },
  },
  { timestamps: true },
);

export default models.ContactSubmission || model("ContactSubmission", contactSubmissionSchema);
