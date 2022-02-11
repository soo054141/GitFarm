/* eslint-disable import/extensions */
import mongoose from "mongoose";
import { UTC_TO_KST } from "../../utils/date.js";

const config = {
  timestamps: {
    currentTime: () => Math.floor(Date.now() + UTC_TO_KST),
  },
  versionKey: false,
};

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
  },
  config,
);

export default UserSchema;
