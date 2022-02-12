/* eslint-disable import/extensions */
import mongoose from "mongoose";

const { Schema } = mongoose;

const LevelSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    commits: {
      type: Number,
      default: 0,
    },
    issues: {
      type: Number,
      default: 0,
    },
    pulls: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default LevelSchema;
