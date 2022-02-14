/* eslint-disable import/extensions */
import mongoose from "mongoose";
import { GOAL, ZERO } from "../default";

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
      default: GOAL,
    },
    resolution: {
      type: String,
      default: "",
    },
    memberDate: {
      type: Number,
      default: ZERO,
    },
  },
  { timestamps: true },
);

export default UserSchema;
