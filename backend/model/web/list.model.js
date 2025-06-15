import mongoose, { Schema } from "mongoose";

const listSchema = new mongoose.Schema(
  {
    title: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
    user: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    timestamps: true,
  }
);
export const createList = mongoose.model("List", listSchema);
