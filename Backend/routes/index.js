/* eslint-disable import/extensions */
import express from "express";
import auth from "./api/auth.js";
import calendar from "./api/calendar.js";

const app = express();

export default () => {
  auth(app);
  calendar(app);
  return app;
};
