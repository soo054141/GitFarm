/* eslint-disable import/extensions */
import mongoose from "mongoose";
import keys from "./keys.js";

export default async () => {
  try {
    await mongoose.connect(keys.mongoURI);
  } catch (err) {
    console.error(err.message);
  }
};
