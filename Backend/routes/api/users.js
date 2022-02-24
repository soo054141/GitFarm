/* eslint-disable import/named */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import express from "express";
import passport from "passport";
import timeLimit from "../../middleware/time-limit.js";
import {
  getReposTotalCommitsController,
  getCommitsTodayController,
  getCommitsTodayDetailController,
  getReposLanguage,
  getCommitsTotalPerYearController,
  getCommitsTotalPerDayController,
  getCommitsContinuousController,
  getResolutionController,
  postResolutionController,
  getBadgeController,
  postBadgeController,
  getMyPageController,
  getRankController,
  getGoalController,
  postGoalController,
  deleteUserController,
  getTodayController,
  getLoadingData,
} from "../../controller/index.js";

const router = express.Router();

export default (app) => {
  app.use(
    "/users",
    passport.authenticate("jwt", {
      session: false,
      failureRedirect: "/",
    }),
    router,
  );

  // get All data With timeLimit
  router.get("/loading", timeLimit, getLoadingData);

  // commits
  router.get("/commits/total", getReposTotalCommitsController);
  router.get("/commits/total/per/year/:year", getCommitsTotalPerYearController);
  router.get("/commits/total/per/day", getCommitsTotalPerDayController);
  router.get("/commits/continuous", getCommitsContinuousController);

  // today
  router.get("/today", getTodayController);
  router.get("/today/commits", getCommitsTodayController);
  router.get("/today/commits/detail", getCommitsTodayDetailController);
  router.route("/today/goal").get(getGoalController).post(postGoalController);

  // language
  router.get("/repos/language", getReposLanguage);

  // rank
  router.get("/rank", getRankController);

  // resolution
  router
    .route("/resolution")
    .get(getResolutionController)
    .post(postResolutionController);

  // badge
  router.route("/badge").get(getBadgeController).post(postBadgeController);

  // mypage
  router.get("/mypage", getMyPageController);

  // delete
  router.delete("/delete", deleteUserController);
};
