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
} from "../../controller/users.controller.js";

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

  // @route GET api/users/repos/total/commits
  // @desc total commits
  // @access Private
  router.get("/repos/total/commits", getReposTotalCommitsController);

  // @route GET api/users/commits/today
  // @desc today total commits
  // @access Private
  router.get("/commits/today", getCommitsTodayController);

  // @route GET api/users/commits/today/detail
  // @desc today detail commits
  // @access Private
  router.get("/commits/today/detail", getCommitsTodayDetailController);

  // @route GET api/users/repos/language
  // @desc repo별 사용 language
  // @access Private
  router.get("/repos/language", getReposLanguage);

  // @route GET api/users/commits/total/per/year/:year
  // @desc :year 기준 매달 총 커밋 개수
  // @access Private
  router.get("/commits/total/per/year/:year", getCommitsTotalPerYearController);

  // @route GET api/users/commits/total/per/day/:YYYY-MM
  // @desc :year 기준 매일 총 커밋 개수
  // @access Private
  router.get("/commits/total/per/day/:YYYYMM", getCommitsTotalPerDayController);

  // @route GET api/users/commits/total/recent/year
  // @desc 최근 3년 기준 연도별 총 커밋 개수
  // @access Private
  router.get("/commits/total/recent/year", getCommitsTotalRecentYearController);

  // @route GET api/users/commits/continuous
  // @desc user continuous commits days
  // @access Private
  router.get("/commits/continuous", getCommitsContinuousController);

  // @route GET api/users/resolution
  // @desc user resolution
  // @access Private
  router.get("/resolution", getResolutionController);

  // @route POST api/users/resolution
  // @desc user resolution
  // @access Private
  router.post("/resolution", postResolutionController);

  // @route GET api/users/badge
  // @desc user badge
  // @access Private
  router.get("/badge", getBadgeController);

  // @route POST api/users/badge
  // @desc user badge
  // @access Private
  router.post("/badge", postBadgeController);

  // @route GET api/users/mypage
  // @desc user resolution
  // @access Private
  router.get("/mypage", getMyPageController);

  // @route GET api/users/levels
  // @desc 가입 이후의 commit, issues, pull 개수확인
  // @access Private
  router.get("/levels", getLevelsController);

  // @route GET api/users/levels/commits
  // @desc user commits after register
  // @access Private
  router.get("/levels/commits", getLevelsCommitsController);

  // @route GET api/users/levels/issues
  // @desc user issues after register
  // @access Private
  router.get("/levels/issues", getLevelsIssuesController);

  // @route GET api/users/levels/pulls
  // @desc user pull requests after register
  // @access Private
  router.get("/levels/pulls", getLevelsPullsController);

  // @route GET api/users/rank
  // @desc get myRank and userRank
  // @access Private
  router.get("/rank", getRankController);

  // @route GET api/users/goal
  // @desc get goal
  // @access Private
  router.get("/goal", getGoalController);

  // @route POST api/users/goal
  // @desc set goal
  // @access Private
  router.post("/goal", postGoalController);

  // @route DELETE api/users/:
  // @desc set goal
  // @access Private
  router.delete("/delete", deleteUserController);
};
