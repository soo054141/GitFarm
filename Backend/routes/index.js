/* eslint-disable import/extensions */
import express from "express";
import auth from "./api/auth.js";

const app = express();

export default app.use("/auth", auth);
