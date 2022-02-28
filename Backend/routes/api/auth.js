/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import httpError from "http-errors";
import createToken from "../../utils/jwt.js";
import { cookieConfig } from "../../utils/cookie.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

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

  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: httpError(401).message,
    });
  });

  router.get("/logout", (req, res) => {
    const token = req.cookies?.token;
    try {
      if (!token) {
        res.status(204).json({
          success: true,
          message: "쿠키가 정상적으로 삭제되지 않았습니다.",
        });
      }
      res.clearCookie("token").json({
        success: true,
        message: "쿠키가 정상적으로 삭제 되었습니다.",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "알 수 없는 오류가 발생했습니다.",
      });
    }
  });
};
