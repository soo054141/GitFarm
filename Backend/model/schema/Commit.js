/* eslint-disable import/extensions */
import mongoose from "mongoose";
import {
  COMMIT_PER_YEAR,
  LANGUAGES,
  MONTH,
  TODAY_DETAIL,
  ZERO,
} from "../default/index.js";

const { Schema } = mongoose;

const CommitSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    total: {
      type: Number,
      default: ZERO,
    },
    todayCommit: {
      type: Number,
      default: ZERO,
    },
    totalScore: {
      type: Number,
      default: ZERO,
    },
    todayScore: {
      type: Number,
      default: ZERO,
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
      default: TODAY_DETAIL,
    },
    commitEachMonth: {
      type: [Number],
      default: COMMIT_PER_YEAR,
    },
    commitEachDay: {
      type: [Number],
      default: MONTH,
    },
    languages: {
      type: [
        {
          repo: String,
          language: String,
        },
      ],
      default: LANGUAGES,
    },
    continuous: {
      type: Number,
      default: ZERO,
    },
  },
  { timestamps: true, versionKey: false },
);

export default CommitSchema;
