/* eslint-disable import/extensions */
import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
    goal: {
      type: Number,
      default: 5,
    },
    resolution: {
      type: String,
      default: "",
    },
    memberDate: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default UserSchema;
