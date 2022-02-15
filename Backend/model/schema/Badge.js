/* eslint-disable import/extensions */
import mongoose from "mongoose";
import { BADGE } from "../default/index.js";

const { Schema } = mongoose;
const BadgeSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    badge: {
      type: [Boolean],
      default: BADGE,
    },
  },
  { timestamps: true, versionKey: false },
);

export default BadgeSchema;
