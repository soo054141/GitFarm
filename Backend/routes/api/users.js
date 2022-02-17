/* eslint-disable import/named */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import express from "express";
import passport from "passport";

import {
  getReposTotalCommitsController,
  getCommitsTodayController,
  getCommitsTodayDetailController,
  getReposLanguage,
  getCommitsTotalPerYearController,
  getCommitsTotalPerDayController,
  getCommitsTotalRecentYearController,
  getCommitsContinuousController,
  getResolutionController,
  postResolutionController,
  getBadgeController,
  postBadgeController,
  getMyPageController,
  getLevelsController,
  getLevelsCommitsController,
  getLevelsIssuesController,
  getLevelsPullsController,
  getRankController,
  getGoalController,
  postGoalController,
  deleteUserController,
  getTodayController,
  getDataInit,
} from "../../controller/index.js";

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

  // loading
  router.get("/loading", getDataInit);

  // commits
  router.get("/commits/total", getReposTotalCommitsController);
  router.get("/commits/total/per/year/:year", getCommitsTotalPerYearController);
  router.get("/commits/total/per/day/:YYYYMM", getCommitsTotalPerDayController);
  router.get("/commits/total/recent/year", getCommitsTotalRecentYearController);
  router.get("/commits/continuous", getCommitsContinuousController);

  // today
  router.get("/today", getTodayController);
  router.get("/today/commits", getCommitsTodayController);
  router.get("/today/commits/detail", getCommitsTodayDetailController);
  router.route("/today/goal").get(getGoalController).post(postGoalController);

  // levels
  router.get("/levels", getLevelsController);
  router.get("/levels/commits", getLevelsCommitsController);
  router.get("/levels/issues", getLevelsIssuesController);
  router.get("/levels/pulls", getLevelsPullsController);

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
