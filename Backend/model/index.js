/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import mongoose from "mongoose";
import UserSchema from "./schema/User.js";
import CommitSchema from "./schema/Commit.js";
import BadgeSchema from "./schema/Badge.js";

export const User = mongoose.model("User", UserSchema);
export const Commit = mongoose.model("Commit", CommitSchema);
export const Badge = mongoose.model("Badge", BadgeSchema);
