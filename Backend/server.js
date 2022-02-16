/* eslint-disable import/extensions */
import express from "express";
import favicon from "serve-favicon";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import passport from "passport";
import path from "path";
import connectDB from "./config/db.js";
import initPassportStrategy from "./passport/index.js";
import apiRouter from "./routes/index.js";
import errorHandler from "./middleware/error-handler.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

connectDB();
app.use(favicon(path.resolve("../", "Frontend", "public", "favicon.ico")));
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
initPassportStrategy(passport);
app.use("/api", apiRouter());
errorHandler(app);

const port = process.env.PORT || 8888;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on PORT ${port}`));
}

export default app;
