/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import { User } from "../../model/index.js";
import {
  getDetailTotalCommitAllRepo,
  getLanguagesData,
  getMonthTotalCommitAllRepo,
  getTodayTotalCommitAllRepo,
  getTotalCommitAllRepo,
  getContinuousCommitAllRepo,
  getIssuesAllRepo,
  getCommitsAllRepo,
  getPullsAllRepo,
  getRecentYearTotalCommit,
} from "../../lib/api/index.js";
import {
  FindByIdAndUpdate,
  FindValueByKey,
} from "../../services/commits.service.js";
import {
  FindByIdAndUpdateLevel,
  FindValueByKeyLevel,
  getScore,
} from "../../services/levels.service.js";
import {
  FindByIdAndUpdateUser,
  FindValueByKeyUser,
  getResolution,
  getMemberDate,
} from "../../services/users.service.js";

import { ViewResponseJSON } from "../../controller/index.js";
import { getPerDayCommitAllRepo } from "../../lib/api/GitHub/commits/per/day/index.js";
import {
  getDefaultRank,
  getMyRank,
  getUserRank,
} from "../../services/rank.service.js";
import { setGoal } from "../../services/goal.service.js";

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

  // @route GET api/users/commits/test
  // @desc test commits
  // @access Private
  router.get("/commits/test", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });

    try {
      const result = "FAKE Mock DATA";
      await FindByIdAndUpdate(_id, "test", result);
      ViewResponseJSON(res, true, "test", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "test");
      ViewResponseJSON(res, false, "test", result);
    }
  });

  // @route GET api/users/repos/total/commits
  // @desc total commits
  // @access Private
  router.get("/repos/total/commits", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getTotalCommitAllRepo(user);
      await FindByIdAndUpdate(_id, "total", result);
      ViewResponseJSON(res, true, "total", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "total");
      ViewResponseJSON(res, false, "total", result);
    }
  });

  // @route GET api/users/commits/today
  // @desc today total commits
  // @access Private
  router.get("/commits/today", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });

    try {
      const result = await getTodayTotalCommitAllRepo(user);
      await FindByIdAndUpdate(_id, "today", result);
      ViewResponseJSON(res, true, "today", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "today");
      ViewResponseJSON(res, false, "today", result);
    }
  });

  // @route GET api/users/commits/today/detail
  // @desc today detail commits
  // @access Private
  router.get("/commits/today/detail", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getDetailTotalCommitAllRepo(user);
      await FindByIdAndUpdate(_id, "todayDetail", result);
      ViewResponseJSON(res, true, "todayDetail", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "todayDetail");
      ViewResponseJSON(res, false, "todayDetail", result);
    }
  });

  // @route GET api/users/repos/language
  // @desc repo별 사용 language
  // @access Private
  router.get("/repos/language", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getLanguagesData(user);
      await FindByIdAndUpdate(_id, "languages", result);
      ViewResponseJSON(res, true, "languages", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "languages");
      ViewResponseJSON(res, false, "languages", result);
    }
  });

  // @route GET api/users/commits/total/per/year/:year
  // @desc :year 기준 매달 총 커밋 개수
  // @access Private
  router.get("/commits/total/per/year/:year", async (req, res) => {
    const { user, params } = req;
    const { id } = user;
    const { year } = params;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getMonthTotalCommitAllRepo(user, year);
      await FindByIdAndUpdate(_id, "commitPerYear", result);
      ViewResponseJSON(res, true, "commitPerYear", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "commitPerYear");
      ViewResponseJSON(res, false, "commitPerYear", result);
    }
  });

  // @route GET api/users/commits/total/per/day/:YYYY-MM
  // @desc :year 기준 매일 총 커밋 개수
  // @access Private
  router.get("/commits/total/per/day/:YYYYMM", async (req, res) => {
    const { user, params } = req;
    const { id } = user;
    const { YYYYMM } = params;
    const date = YYYYMM.split("-");
    const [{ _id }] = await User.find({ id });

    try {
      const result = await getPerDayCommitAllRepo(user, date);
      await FindByIdAndUpdate(_id, "commitPerDay", result);
      ViewResponseJSON(res, true, "commitPerDay", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "commitPerDay");
      ViewResponseJSON(res, false, "commitPerDay", result);
    }
  });

  // @route GET api/users/commits/total/recent/year
  // @desc 최근 3년 기준 연도별 총 커밋 개수
  // @access Private
  router.get("/commits/total/recent/year", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });

    try {
      const result = await getRecentYearTotalCommit(user);
      await FindByIdAndUpdate(_id, "recent", result);
      ViewResponseJSON(res, true, "lastThreeYear", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "recent");
      ViewResponseJSON(res, false, "lastThreeYear", result);
    }
  });

  // @route GET api/users/commits/continuous
  // @desc user continuous commits days
  // @access Private
  router.get("/commits/continuous", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getContinuousCommitAllRepo(user);
      await FindByIdAndUpdate(_id, "continuous", result);
      ViewResponseJSON(res, true, "continuous", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "continuous");
      ViewResponseJSON(res, false, "continuous", result);
    }
  });

  // @route GET api/users/resolution
  // @desc user resolution
  // @access Private
  router.get("/resolution", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = getResolution(user);
      ViewResponseJSON(res, true, "mypage", result);
    } catch (err) {
      const result = await FindValueByKey(_id, "resolution");
      ViewResponseJSON(res, false, "resolution", result);
    }
  });

  // @route GET api/users/mypage
  // @desc user resolution
  // @access Private
  router.get("/mypage", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const total = await getTotalCommitAllRepo(user);
      await FindByIdAndUpdate(_id, "total", total);

      const commits = await getCommitsAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "commits", commits);
      const issues = await getIssuesAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "issues", issues);
      const pulls = await getPullsAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "pulls", pulls);

      const score = getScore(commits, issues, pulls);
      await FindByIdAndUpdateLevel(_id, "score", score);

      const continuous = await getContinuousCommitAllRepo(user);
      await FindByIdAndUpdate(_id, "continuous", continuous);

      const memberDate = getMemberDate(user);
      await FindByIdAndUpdateUser(_id, "memberDate", memberDate);

      const mypage = { total, score, continuous, memberDate };

      ViewResponseJSON(res, true, "mypage", mypage);
    } catch (err) {
      const total = await FindValueByKey(_id, "total");
      const score = await FindValueByKeyLevel(_id, "score");
      const continuous = await FindValueByKey(_id, "continuous");
      const memberDate = await FindValueByKeyUser(_id, "memberDate");

      const mypage = { total, score, continuous, memberDate };

      ViewResponseJSON(res, true, "mypage", mypage);
    }
  });

  // @route GET api/users/levels
  // @desc 가입 이후의 commit, issues, pull 개수확인
  // @access Private
  router.get("/levels", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const commits = await getCommitsAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "commits", commits);
      const issues = await getIssuesAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "issues", issues);
      const pulls = await getPullsAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "pulls", pulls);
      const score = getScore(commits, issues, pulls);
      await FindByIdAndUpdateLevel(_id, "score", score);
      const levels = { score, commits, issues, pulls };
      ViewResponseJSON(res, true, "data", levels);
    } catch (err) {
      const commits = await FindValueByKeyLevel(_id, "commits");
      const issues = await FindValueByKeyLevel(_id, "issues");
      const pulls = await FindValueByKeyLevel(_id, "pulls");
      const score = await FindValueByKeyLevel(_id, "score");
      const levels = { score, commits, issues, pulls };
      ViewResponseJSON(res, false, "data", levels);
    }
  });

  // @route GET api/users/levels/commits
  // @desc user commits after register
  // @access Private
  router.get("/levels/commits", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getCommitsAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "commits", result);
      ViewResponseJSON(res, true, "commits", result);
    } catch (err) {
      const result = await FindValueByKeyLevel(_id, "commits");
      ViewResponseJSON(res, false, "commits", result);
    }
  });

  // @route GET api/users/levels/issues
  // @desc user issues after register
  // @access Private
  router.get("/levels/issues", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getIssuesAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "issues", result);
      ViewResponseJSON(res, true, "issues", result);
    } catch (err) {
      const result = await FindValueByKeyLevel(_id, "issues");
      ViewResponseJSON(res, false, "issues", result);
    }
  });

  // @route GET api/users/levels/pulls
  // @desc user pull requests after register
  // @access Private
  router.get("/levels/pulls", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getPullsAllRepo(user);
      await FindByIdAndUpdateLevel(_id, "pulls", result);
      ViewResponseJSON(res, true, "pulls", result);
    } catch (err) {
      const result = await FindValueByKeyLevel(_id, "pulls");
      ViewResponseJSON(res, false, "pulls", result);
    }
  });

  // @route GET api/users/rank
  // @desc get myRank and userRank
  // @access Private
  router.get("/rank", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const myRank = await getMyRank(_id);
      const userRank = await getUserRank();
      const result = {
        myRank,
        userRank,
      };
      ViewResponseJSON(res, true, "data", result);
    } catch (err) {
      const result = getDefaultRank();
      ViewResponseJSON(res, false, "data", result);
    }
  });

  // @route POST api/users/goal
  // @desc set goal
  // @access Private
  router.post("/goal", async (req, res) => {
    try {
      const result = await setGoal(req);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json("InternalServerError");
    }
  });
};
