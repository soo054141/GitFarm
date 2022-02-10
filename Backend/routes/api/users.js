/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import { User, Commit } from "../../model/index.js";
import {
  getDetailTotalCommitAllRepo,
  getLanguagesData,
  getMonthTotalCommitAllRepo,
  getTodayTotalCommitAllRepo,
  getTotalCommitAllRepo,
} from "../../lib/api/index.js";

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
      const result = "678";

      await Commit.findByIdAndUpdate(
        _id,
        {
          $set: {
            author: _id,
            test: result,
          },
        },
        { upsert: true },
      ).populate({ path: "author" });

      res.json({
        success: true,
        message: result,
      });
    } catch (err) {
      const loadDB = await Commit.find({ id: _id });
      res.json({
        success: false,
        message: loadDB,
      });
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

      await Commit.findByIdAndUpdate(
        _id,
        {
          $set: {
            author: _id,
            total: result,
          },
        },
        { upsert: true },
      ).populate({ path: "author" });

      res.json({
        success: true,
        message: result,
      });
    } catch (err) {
      const key = "total";
      const loadDB = await Commit.find({ id: _id });
      res.json({
        success: false,
        message: loadDB[key],
      });
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
      await Commit.findByIdAndUpdate(
        _id,
        {
          $set: {
            author: _id,
            today: result,
          },
        },
        { upsert: true },
      ).populate({ path: "author" });

      res.json({
        success: true,
        message: result,
      });
    } catch (err) {
      const key = "today";
      const loadDB = await Commit.find({ id: _id });
      res.json({
        success: false,
        message: loadDB[key],
      });
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
      await Commit.findByIdAndUpdate(
        _id,
        {
          $set: {
            author: _id,
            todayDetail: result,
          },
        },
        { upsert: true },
      ).populate({ path: "author" });

      res.json({
        success: true,
        message: result,
      });
    } catch (err) {
      const key = "todayDetail";
      const loadDB = await Commit.find({ id: _id });
      res.json({
        success: false,
        message: loadDB[key],
      });
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
      await Commit.findByIdAndUpdate(
        _id,
        {
          $set: {
            author: _id,
            languages: result,
          },
        },
        { upsert: true },
      ).populate({ path: "author" });

      res.json({
        success: true,
        message: result,
      });
    } catch (err) {
      const key = "languages";
      const loadDB = await Commit.find({ id: _id });
      res.json({
        success: false,
        message: loadDB[key],
      });
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
