/* eslint-disable import/extensions */
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import passport from "passport";
import httpError from "http-errors";
import connectDB from "./config/db.js";
import initPassportStrategy from "./passport/index.js";

const app = express();

connectDB();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
initPassportStrategy(passport);

app.use((req, res, next) => {
  next(httpError(404).message);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({ error: true, message: err });
});

const PORT = 8888;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
