/* eslint-disable import/named */
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
  router.get("/today/goal", getGoalController);
  router.post("/today/goal", postGoalController);

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
  router.get("/resolution", getResolutionController);
  router.post("/resolution", postResolutionController);

  // badge
  router.get("/badge", getBadgeController);
  router.post("/badge", postBadgeController);

  // mypage
  router.get("/mypage", getMyPageController);

  // delete
  router.delete("/delete", deleteUserController);
};
