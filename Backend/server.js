/* eslint-disable import/extensions */
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import passport from "passport";
import connectDB from "./config/db.js";
import initPassportStrategy from "./passport/index.js";
import apiRouter from "./routes/index.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();

connectDB();
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
initPassportStrategy(passport);
app.use("/api", apiRouter);
errorHandler(app);

const PORT = 8888;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
