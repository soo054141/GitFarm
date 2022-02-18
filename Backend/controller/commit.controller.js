import { getUserObjectId } from "../utils/db.js";
import { User, Commit } from "../model/index.js";
import { ViewResponseJSON } from "./index.js";
import { FindValueByKey } from "../services/db.service.js";

export const getReposTotalCommitsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "total");
  ViewResponseJSON(res, true, "total", result);
};

export const getCommitsTodayController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "todayScore");
  ViewResponseJSON(res, true, "todayScore", result);
};

export const getCommitsTodayDetailController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "todayDetail");
  ViewResponseJSON(res, true, "todayDetail", result);
};

export const getCommitsTotalPerYearController = async (req, res) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  const result = await FindValueByKey(Commit, _id, "commitEachMonth");
  ViewResponseJSON(res, true, "commitEachMonth", result);
};

export const getCommitsTotalPerDayController = async (req, res) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  const result = await FindValueByKey(Commit, _id, "commitEachDay");
  ViewResponseJSON(res, true, "commitEachDay", result);
};

export const getCommitsContinuousController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "continuous");
  ViewResponseJSON(res, true, "continuous", result);
};
