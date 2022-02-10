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
    },
    today: {
      type: Number,
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
    },
    languages: {
      type: [
        {
          repo: String,
          language: String,
        },
      ],
    },
    continous: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default CommitSchema;
