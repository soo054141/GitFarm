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
  getGoal,
  getScore,
  getBadge,
  getMyRank,
  getUserRank,
  getMemberDate,
  getResolution,
  getDefaultRank,
  getBadgeFromDB,
  setGoal,
  setBadge,
  setResolution,
  setMemberDate,
  FindValueByKey,
  FindByIdAndUpdate,
} from "../services/index.js";

import { GOAL } from "../model/default/index.js";
import { getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getReposTotalCommitsController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);

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
  const _id = getUserObjectId(user);

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
  const _id = getUserObjectId(user);
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
  const _id = getUserObjectId(user);
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
  const _id = getUserObjectId(user);

  try {
    const result = await getRecentYearTotalCommit(user);
    await FindByIdAndUpdate(Commit, _id, "recent", result);
    ViewResponseJSON(res, true, "lastThreeYear", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "recent");
    ViewResponseJSON(res, false, "lastThreeYear", result);
  }
};

export const getCommitsContinousController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);
  try {
    const result = await getContinuousCommitAllRepo(user);
    await FindByIdAndUpdate(Commit, _id, "continuous", result);
    ViewResponseJSON(res, true, "continuous", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "continuous");
    ViewResponseJSON(res, false, "continuous", result);
  }
};

export const getResolutionController = async (req, res) => {
  try {
    const result = await getResolution(req);
    ViewResponseJSON(res, true, "resolution", result);
  } catch (err) {
    const result = await getResolution(req);
    ViewResponseJSON(res, false, "resolution", result);
  }
};

export const postResolutionController = async (req, res) => {
  try {
    await setResolution(req);
    res.status(201);
  } catch (err) {
    res.status(500);
  }
};

export const getBadgeController = async (req, res) => {
  try {
    const result = await getBadge(req);
    ViewResponseJSON(res, true, "badge", result);
  } catch (err) {
    const result = await getBadgeFromDB(req);
    ViewResponseJSON(res, false, "badge", result);
  }
};

export const postBadgeController = async (req, res) => {
  try {
    await setBadge(req);
    res.status(201);
  } catch (err) {
    res.status(500);
  }
};

export const getMyPageController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);
  try {
    const total = await getTotalCommitAllRepo(user);
    await FindByIdAndUpdate(Commit, _id, "total", total);

    const commits = await getCommitsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "commits", commits);
    const issues = await getIssuesAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "issues", issues);
    const pulls = await getPullsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "pulls", pulls);

    const score = getScore(commits, issues, pulls);
    await FindByIdAndUpdate(Level, _id, "score", score);

    const continuous = await getContinuousCommitAllRepo(user);
    await FindByIdAndUpdate(Commit, _id, "continuous", continuous);

    const memberDate = getMemberDate(user);
    await setMemberDate(req, memberDate);

    const mypage = { total, score, continuous, memberDate };

    ViewResponseJSON(res, true, "mypage", mypage);
  } catch (err) {
    const total = await FindValueByKey(Commit, _id, "total");
    const score = await FindValueByKey(Level, _id, "score");
    const continuous = await FindValueByKey(Commit, _id, "continuous");
    const memberDate = await getMemberDate(user);

    const mypage = { total, score, continuous, memberDate };

    ViewResponseJSON(res, true, "mypage", mypage);
  }
};

export const getLevelsController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);
  try {
    const commits = await getCommitsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "commits", commits);
    const issues = await getIssuesAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "issues", issues);
    const pulls = await getPullsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "pulls", pulls);
    const score = getScore(commits, issues, pulls);
    await FindByIdAndUpdate(Level, _id, "score", score);
    const levels = { score, commits, issues, pulls };
    ViewResponseJSON(res, true, "data", levels);
  } catch (err) {
    const commits = await FindValueByKey(Level, _id, "commits");
    const issues = await FindValueByKey(Level, _id, "issues");
    const pulls = await FindValueByKey(Level, _id, "pulls");
    const score = await FindValueByKey(Level, _id, "score");
    const levels = { score, commits, issues, pulls };
    ViewResponseJSON(res, false, "data", levels);
  }
};

export const getLevelsCommitsController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);
  try {
    const result = await getCommitsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "commits", result);
    ViewResponseJSON(res, true, "commits", result);
  } catch (err) {
    const result = await FindValueByKey(Level, _id, "commits");
    ViewResponseJSON(res, false, "commits", result);
  }
};

export const getLevelsIssuesController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);
  try {
    const result = await getIssuesAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "issues", result);
    ViewResponseJSON(res, true, "issues", result);
  } catch (err) {
    const result = await FindValueByKey(Level, _id, "issues");
    ViewResponseJSON(res, false, "issues", result);
  }
};

export const getLevelsPullsController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);
  try {
    const result = await getPullsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "pulls", result);
    ViewResponseJSON(res, true, "pulls", result);
  } catch (err) {
    const result = await FindValueByKey(Level, _id, "pulls");
    ViewResponseJSON(res, false, "pulls", result);
  }
};

export const getRankController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);
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
};

export const getGoalController = async (req, res) => {
  try {
    const result = await getGoal(req);
    ViewResponseJSON(res, true, "goal", result);
  } catch (err) {
    ViewResponseJSON(res, false, "goal", GOAL);
  }
};

export const postGoalController = async (req, res) => {
  try {
    await setGoal(req);
    res.status(201);
  } catch (err) {
    res.status(500);
  }
};

export const deleteUserController = async (req, res) => {
  const { user } = req;
  const _id = getUserObjectId(user);

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
