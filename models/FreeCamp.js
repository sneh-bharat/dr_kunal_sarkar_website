import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const freeCampSchema = new Schema(
  {
    badge: { type: String, default: "Cardiac OPD" },
    name: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: Date, required: true, index: true },
    note: { type: String, default: "Please call" },
    phone: { type: String, required: true },
    published: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

export default models.FreeCamp || model("FreeCamp", freeCampSchema);
