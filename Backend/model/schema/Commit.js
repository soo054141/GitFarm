/* eslint-disable import/extensions */
import mongoose from "mongoose";

const { Schema } = mongoose;

const CommitSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    total: {
      type: Number,
      default: 0,
    },
    recent: {
      type: [[Number]],
      default: [0, 0, 0],
    },
    today: {
      type: Number,
      default: 0,
    },
    todayDetail: {
      type: [
        {
          info: {
            name: String,
            repo: String,
          },
          data: [{ date: String, message: String }],
        },
      ],
      default: [
        { info: { name: "", repo: "" }, data: [{ date: "", message: "" }] },
      ],
    },
    commitPerYear: {
      type: [Number],
      default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    languages: {
      type: [
        {
          repo: String,
          language: String,
        },
      ],
      default: [{ repo: "", language: "" }],
    },
    continuous: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default CommitSchema;
