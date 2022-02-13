/* eslint-disable import/extensions */
import mongoose from "mongoose";

const { Schema } = mongoose;

const BadgeSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    badge: {
      type: [Boolean],
      default: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
  },
  { timestamps: true },
);

export default BadgeSchema;
