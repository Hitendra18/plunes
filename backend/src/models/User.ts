import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    mobileNo: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
