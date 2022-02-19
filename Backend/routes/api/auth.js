/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import httpError from "http-errors";
import createToken from "../../utils/jwt.js";
import { cookieConfig } from "../../utils/cookie.js";
import dotenv from "dotenv";
import keys from "../../config/keys.js";

dotenv.config();

const router = express.Router();

const AFTER_LOGIN =
  process.env.NODE_ENV === "production"
    ? `http://localhost:8888/loading`
    : "/api/auth/login/success";

const LOGOUT =
  process.env.NODE_ENV === "production"
    ? `${keys.clientURL}/`
    : `/api/auth/login/failed`;

export default (app) => {
  app.use("/auth", router);

  router.get(
    "/github",
    passport.authenticate("github", {
      scope: ["repo", "profile", "user"],
      session: false,
    }),
  );

  router.get(
    "/github/callback",
    passport.authenticate("github", {
      session: false,
      failureRedirect: "/api/auth/login/failed",
    }),
    async (req, res) => {
      const { id, username } = req.user;
      const payload = { id, username };
      const token = await createToken(payload);
      res.cookie("token", token, cookieConfig);
      res.redirect("http://localhost:1111/loading");
    },
  );

  router.get("/login/success", (req, res) => {
    res.json({
      success: true,
      message: "로그인이 정상적으로 완료 되었습니다.",
    });
  });

  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: httpError(401).message,
    });
  });

  router.get("/logout", (req, res) => {
    res.clearCookie("token").json({
      success: true,
      message: "로그아웃 되었습니다.",
    });
  });
};
