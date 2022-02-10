/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import { getTotalCommitAllRepo } from "../../lib/api/GitHub/getTotalCommitAllRepo.js";
import { getTodayCommitAllRepo } from "../../lib/api/GitHub/getTodayCommitAllRepo.js";
import { getContinousCommitAllRepo } from "../../lib/api/GitHub/getContinousCommitAllRepo.js";
import { getCommitMessageAllRepo } from "../../lib/api/GitHub/getCommitMessageAllRepo.js";

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

      const todayCommit = await getTodayCommitAllRepo(user);
      console.log("todayCommitAllRepo=", todayCommit);

      const continousCommit = await getContinousCommitAllRepo(user);
      console.log("continousCommitAllRepo=", continousCommit);

      const commitMessage = await getCommitMessageAllRepo(user);
      console.log("commitMessageAllRepo=", commitMessage);

      res.json({ msg: "calender 페이지입니다." });
    },
  );
};
