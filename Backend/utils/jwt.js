/* eslint-disable import/extensions */
import jwt from "jsonwebtoken";
import keys from "../config/keys.js";

const createToken = (payload) =>
  jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 14,
      data: payload,
    },
    keys.secretOrKey,
  );

export default createToken;
