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
app.use(
  cors({
    origin: "http://elice-kdt-sw-1st-team1.elicecoding.com",
    credentials: true,
  }),
);
app.use(favicon(path.resolve("public", "favicon.ico")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
initPassportStrategy(passport);
app.use("/api", apiRouter());
errorHandler(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
