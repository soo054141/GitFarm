/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { User, Badge, Commit, Level } from "../model/index.js";
import {
  getPullsAllRepo,
  getLanguagesData,
  getIssuesAllRepo,
  getCommitsAllRepo,
  getTotalCommitAllRepo,
  getPerDayCommitAllRepo,
  getRecentYearTotalCommit,
  getMonthTotalCommitAllRepo,
  getTodayTotalCommitAllRepo,
  getDetailTotalCommitAllRepo,
  getContinuousCommitAllRepo,
} from "../lib/api/index.js";
import {
  getScore,
  getMemberDate,
  setMemberDate,
  FindValueByKey,
  FindByIdAndUpdate,
} from "../services/index.js";
import { getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getReposTotalCommitsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);

  try {
    const result = await getTotalCommitAllRepo(user);
    await FindByIdAndUpdate(Commit, _id, "total", result);
    ViewResponseJSON(res, true, "total", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "total");
    ViewResponseJSON(res, false, "total", result);
  }
};

export const getCommitsTodayController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);

  try {
    const result = await getTodayTotalCommitAllRepo(user);
    await FindByIdAndUpdate(Commit, _id, "today", result);
    ViewResponseJSON(res, true, "today", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "today");
    ViewResponseJSON(res, false, "today", result);
  }
};

export const getCommitsTodayDetailController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  try {
    const result = await getDetailTotalCommitAllRepo(user);
    await FindByIdAndUpdate(Commit, _id, "todayDetail", result);
    ViewResponseJSON(res, true, "todayDetail", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "todayDetail");
    ViewResponseJSON(res, false, "todayDetail", result);
  }
};

export const getReposLanguage = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  try {
    const result = await getLanguagesData(user);
    await FindByIdAndUpdate(Commit, _id, "languages", result);
    ViewResponseJSON(res, true, "languages", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "languages");
    ViewResponseJSON(res, false, "languages", result);
  }
};

export const getCommitsTotalPerYearController = async (req, res) => {
  const { user, params } = req;
  const { id } = user;
  const { year } = params;
  const [{ _id }] = await User.find({ id });
  try {
    const result = await getMonthTotalCommitAllRepo(user, year);
    await FindByIdAndUpdate(Commit, _id, "commitPerYear", result);
    ViewResponseJSON(res, true, "commitPerYear", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "commitPerYear");
    ViewResponseJSON(res, false, "commitPerYear", result);
  }
};

export const getCommitsTotalPerDayController = async (req, res) => {
  const { user, params } = req;
  const { id } = user;
  const { YYYYMM } = params;
  const date = YYYYMM.split("-");
  const [{ _id }] = await User.find({ id });

  try {
    const result = await getPerDayCommitAllRepo(user, date);
    await FindByIdAndUpdate(Commit, _id, "commitPerDay", result);
    ViewResponseJSON(res, true, "commitPerDay", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "commitPerDay");
    ViewResponseJSON(res, false, "commitPerDay", result);
  }
};

export const getCommitsTotalRecentYearController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);

  try {
    const result = await getRecentYearTotalCommit(user);
    await FindByIdAndUpdate(Commit, _id, "recent", result);
    ViewResponseJSON(res, true, "lastThreeYear", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "recent");
    ViewResponseJSON(res, false, "lastThreeYear", result);
  }
};

export const getCommitsContinuousController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  try {
    const result = await getContinuousCommitAllRepo(user);
    await FindByIdAndUpdate(Commit, _id, "continuous", result);
    ViewResponseJSON(res, true, "continuous", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "continuous");
    ViewResponseJSON(res, false, "continuous", result);
  }
};

export const getMyPageController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  try {
    const total = await getTotalCommitAllRepo(user);
    const commits = await getCommitsAllRepo(user);
    const issues = await getIssuesAllRepo(user);
    const pulls = await getPullsAllRepo(user);

    await FindByIdAndUpdate(Commit, _id, "total", total);
    await FindByIdAndUpdate(Level, _id, "commits", commits);
    await FindByIdAndUpdate(Level, _id, "issues", issues);
    await FindByIdAndUpdate(Level, _id, "pulls", pulls);

    const score = getScore(commits, issues, pulls);
    const continuous = await getContinuousCommitAllRepo(user);
    const memberDate = getMemberDate(user);

    await FindByIdAndUpdate(Level, _id, "score", score);
    await FindByIdAndUpdate(Commit, _id, "continuous", continuous);
    await setMemberDate(req, memberDate);

    const result = { total, score, continuous, memberDate };

    ViewResponseJSON(res, true, "mypage", result);
  } catch (err) {
    const total = await FindValueByKey(Commit, _id, "total");
    const score = await FindValueByKey(Level, _id, "score");
    const continuous = await FindValueByKey(Commit, _id, "continuous");
    const memberDate = await getMemberDate(user);
    const result = { total, score, continuous, memberDate };

    ViewResponseJSON(res, true, "mypage", result);
  }
};

export const deleteUserController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);

  try {
    await User.findByIdAndDelete(_id);
    await Badge.findByIdAndDelete(_id);
    await Commit.findByIdAndDelete(_id);
    await Level.findByIdAndDelete(_id);
    res.status(201);
  } catch (err) {
    res.status(501);
  }
};
