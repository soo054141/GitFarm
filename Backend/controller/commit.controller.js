import { getUserObjectId } from "../utils/db.js";
import { User, Commit } from "../model/index.js";
import { ViewResponseJSON } from "./index.js";
import { FindValueByKey } from "../services/db.service.js";

export const getReposTotalCommitsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "total");
  ViewResponseJSON(res, false, "total", result);
};

export const getCommitsTodayController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "today");
  ViewResponseJSON(res, false, "today", result);
};

export const getCommitsTodayDetailController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "todayDetail");
  ViewResponseJSON(res, false, "todayDetail", result);
};

export const getCommitsTotalPerYearController = async (req, res) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  const result = await FindValueByKey(Commit, _id, "commitPerYear");
  ViewResponseJSON(res, false, "commitPerYear", result);
};

export const getCommitsTotalPerDayController = async (req, res) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  const result = await FindValueByKey(Commit, _id, "commitPerDay");
  ViewResponseJSON(res, false, "commitPerDay", result);
};

export const getCommitsContinuousController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "continuous");
  ViewResponseJSON(res, false, "continuous", result);
};
