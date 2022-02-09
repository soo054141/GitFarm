/* eslint-disable import/extensions */
import express from "express";
import auth from "./api/auth.js";
import users from "./api/users.js";

const app = express();

export default () => {
  auth(app);
  users(app);
  return app;
};
