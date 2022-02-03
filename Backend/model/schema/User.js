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
    accessToken: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  },
);

export default UserSchema;
