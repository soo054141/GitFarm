/* eslint-disable import/extensions */
import jwt from "jsonwebtoken";
import keys from "../config/keys.js";

const createToken = (payload) =>
  jwt.sign(
    {
      data: payload,
    },
    keys.secretOrKey,
    { expiresIn: "14d" },
  );

export default createToken;
