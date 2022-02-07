/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import getTotalCommit from "../../lib/api/GitHub.js";

const router = express.Router();

export default (app) => {
  app.use("/calendar", router);

  // @route GET api/calendar
  // @desc get Total commit, Today commit
  // @access Private
  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const { user } = req;
      getTotalCommit(user);
      res.json({ msg: "calender 페이지입니다." });
    },
  );
};
