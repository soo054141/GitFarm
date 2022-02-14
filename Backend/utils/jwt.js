/* eslint-disable import/extensions */
import jwt from "jsonwebtoken";
import keys from "../config/keys.js";

const createToken = (payload) =>
  jwt.sign(payload, keys.secretOrKey, { expiresIn: "7d" });

export default createToken;
