/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import httpError from "http-errors";
import createToken from "../../utils/jwt.js";
import { cookieConfig } from "../../utils/cookie.js";

const router = express.Router();
const CLIENT_URL = "http://localhost:1111/";

export default (app) => {
  app.use("/auth", router);

  // @route GET api/auth/test
  // @desc Test response
  // @access Private
  router.get(
    "/test",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.json({ msg: "api/auth routes with login successfully work!" });
    },
  );

  // @route GET api/auth/github
  // @desc Request to GitHub server
  // @access Public
  router.get(
    "/github",
    passport.authenticate("github", {
      scope: ["repo", "profile", "user"],
      session: false,
    }),
  );

  // @route GET api/auth/github/callback
  // @desc Response from GitHub server
  // @access Public
  router.get(
    "/github/callback",
    passport.authenticate("github", {
      session: false,
      failureRedirect: "/api/auth/login/failed",
    }),
    async (req, res) => {
      const { id, email, username } = req.user;
      const payload = { id, email, username };
      const token = await createToken(payload);
      res.cookie("token", token, cookieConfig);
      res.redirect("/api/auth/login/success");
    },
  );

  // @route GET api/auth/login/success
  // @desc success GitHub OAuth Login
  // @access Public
  router.get("/login/success", (req, res) => {
    res.json({
      success: true,
      message: "로그인이 정상적으로 완료 되었습니다.",
    });
  });

  // @route GET api/auth/login/failed
  // @desc failed GitHub OAuth Login
  // @access Public
  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: httpError(401).message,
    });
  });

  // @route GET api/auth/logout
  // @desc clear cookie & redirect to home
  // @access Public
  router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect(CLIENT_URL);
  });
};
