/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import {
  getTotalCommit,
  getTodayCommit,
  getContinousCommitDays,
} from "../../lib/api/GitHub.js";

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
      const totalCommit = await getTotalCommit(user);
      console.log("totalCommit =", totalCommit);

      const todayCommit = await getTodayCommit(user);

      const continousCommits = await getContinousCommitDays(user);
      console.log(continousCommits);
      res.json({ msg: "calender 페이지입니다." });
    },
  );
};
