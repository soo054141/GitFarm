import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
  },
  accessToken: {
    type: String,
    required: true,
  },
});

export default UserSchema;
