import { getUpdatedAtById, getUserObjectId } from "../utils/db.js";
import { User, Commit } from "../model/index.js";
import { ViewResponseJSON } from "./index.js";
import {
  getContinuousCommitAllRepo,
  getMonthTotalCommitAllRepo,
  getPerDayCommitAllRepo,
  getRecentYearTotalCommit,
  getTodayTotalCommitAllRepo,
  getTotalCommitAllRepo,
} from "../lib/api/index.js";
import { isInTime, TARGET_TIME } from "../utils/date.js";
import { FindByIdAndUpdate, FindValueByKey } from "../services/db.service.js";

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

export const getCommitsTotalPerYearController = async (req, res) => {
  const { user, params } = req;
  const { id } = user;
  const { year } = params;
  const [{ _id }] = await User.find({ id });
  const updatedAt = await getUpdatedAtById(user, Commit);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const result = await FindValueByKey(Commit, _id, "commitPerYear");
    ViewResponseJSON(res, true, "commitPerYear", result);
    return;
  }

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
  const updatedAt = await getUpdatedAtById(user, Commit);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const result = await FindValueByKey(Commit, _id, "commitPerDay");
    ViewResponseJSON(res, true, "commitPerDay", result);
    return;
  }

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
  const updatedAt = await getUpdatedAtById(user, Commit);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const result = await FindValueByKey(Commit, _id, "recent");
    ViewResponseJSON(res, true, "lastThreeYear", result);
    return;
  }

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
