/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import { getLanguagesData } from "../../lib/api/GitHub/language/index.js";
import { getDetailTotalCommitAllRepo } from "../../lib/api/GitHub/today/detail/getDetailTotalRepo.js";
import { getTodayTotalCommitAllRepo } from "../../lib/api/GitHub/today/getTodayTotalCommitAllRepo.js";
import { getTotalCommitAllRepo } from "../../lib/api/GitHub/total/getTotalCommitAllRepo.js";

const router = express.Router();

export default (app) => {
  app.use(
    "/users",
    passport.authenticate("jwt", {
      session: false,
      failureRedirect: "/api/auth/github",
    }),
    router,
  );

  // @route GET api/users/commits/total
  // @desc total commits
  // @access Private
  router.get("/commits/total", async (req, res) => {
    const { user } = req;
    const result = await getTotalCommitAllRepo(user);
    res.json({
      success: true,
      totalCommit: result,
    });
  });

  // @route GET api/users/commits/today
  // @desc today total commits
  // @access Private
  router.get("/commits/today", async (req, res) => {
    const { user } = req;
    const result = await getTodayTotalCommitAllRepo(user);
    res.json({
      success: true,
      todayCommit: result,
    });
  });
};

// @route GET api/users/commits/detail
// @desc today detail commits
// @access Private
router.get("/commits/today/detail", async (req, res) => {
  const { user } = req;
  const result = await getDetailTotalCommitAllRepo(user);

  res.json({
    success: true,
    todayDetailCommit: result,
  });
});

// @route GET api/users/languages
// @desc level에 필요한 API 제공
// @access Private
router.get("/languages", async (req, res) => {
  const { user } = req;
  const result = await getLanguagesData(user);

  res.json({
    success: true,
    data: result,
  });
});
