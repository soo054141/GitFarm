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
  getRecentYearTotalCommit,
} from "../../lib/api/index.js";
import {
  FindByIdAndUpdate,
  FindValueByKey,
} from "../../services/users.service.js";
import { ViewResponseJSON } from "../../controller/index.js";

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
      ViewResponseJSON(res, true, result);
    } catch (err) {
      const result = await FindValueByKey(_id, "continuous");
      ViewResponseJSON(res, false, result);
    }
  });
};
