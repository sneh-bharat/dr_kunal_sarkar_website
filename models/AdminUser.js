import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const adminUserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
    lastLoginAt: { type: Date },
  },
  { timestamps: true },
);

export default models.AdminUser || model("AdminUser", adminUserSchema);
