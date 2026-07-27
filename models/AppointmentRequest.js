import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const appointmentRequestSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    preferredDate: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    age: { type: Number, required: true },
    district: { type: String, required: true },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["new", "contacted", "done"],
      default: "new",
      index: true,
    },
  },
  { timestamps: true },
);

export default models.AppointmentRequest || model("AppointmentRequest", appointmentRequestSchema);
