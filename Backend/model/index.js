/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import mongoose from "mongoose";
import UserSchema from "./schema/User.js";

export const User = mongoose.model("User", UserSchema);
