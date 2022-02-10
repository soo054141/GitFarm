import mongoose from "mongoose";

const { Schema } = mongoose;

const CommitSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    total: {
      type: String,
      required: true,
    },
    continous: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default CommitSchema;
