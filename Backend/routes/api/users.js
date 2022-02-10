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
      ViewResponseJSON(res, true, result);
    } catch (err) {
      const result = await FindValueByKey(_id, "test");
      ViewResponseJSON(res, false, result);
    }
  });

  // @route GET api/users/commits/total
  // @desc total commits
  // @access Private
  router.get("/commits/total", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getTotalCommitAllRepo(user);
      await FindByIdAndUpdate(_id, "total", result);
      ViewResponseJSON(res, true, result);
    } catch (err) {
      const result = await FindValueByKey(_id, "total");
      ViewResponseJSON(res, false, result);
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
      ViewResponseJSON(res, true, result);
    } catch (err) {
      const result = await FindValueByKey(_id, "today");
      ViewResponseJSON(res, false, result);
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
      ViewResponseJSON(res, true, result);
    } catch (err) {
      const result = await FindValueByKey(_id, "todayDetail");
      ViewResponseJSON(res, false, result);
    }
  });

  // @route GET api/users/languages
  // @desc user별 languages
  // @access Private
  router.get("/languages", async (req, res) => {
    const { user } = req;
    const { id } = user;
    const [{ _id }] = await User.find({ id });
    try {
      const result = await getLanguagesData(user);
      await FindByIdAndUpdate(_id, "languages", result);
      ViewResponseJSON(res, true, result);
    } catch (err) {
      const result = await FindValueByKey(_id, "languages");
      ViewResponseJSON(res, false, result);
    }
  });

  // @route GET api/users/commits/total/year/:year
  // @desc params 기준 월 별 총 commits
  // @access Private
  router.get("/commits/total/year/:year", async (req, res) => {
    const { user, params } = req;
    const { year } = params;
    const result = await getMonthTotalCommitAllRepo(user, year);
    console.log(result);
    res.json({
      success: true,
      message: "연도별 커밋을 보여줍니다.",
    });
  });
};
