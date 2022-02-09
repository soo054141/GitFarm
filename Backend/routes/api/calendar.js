/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import { getTotalCommitAllRepo } from "../../lib/api/GitHub/getTotalCommitAllRepo.js";

const router = express.Router();

export default (app) => {
  app.use("/calendar", router);

  // @route GET api/calendar
  // @desc get Total commit, Today commit
  // @access Private
  router.get(
    "/",
    passport.authenticate("jwt", {
      session: false,
      failureRedirect: "/api/auth/github",
    }),
    async (req, res) => {
      const { user } = req;
      const totalCommitAllRepo = await getTotalCommitAllRepo(user);
      console.log("totalCommitAllRepo=", totalCommitAllRepo);
      res.json({ msg: "calender 페이지입니다." });
    },
  );
};
