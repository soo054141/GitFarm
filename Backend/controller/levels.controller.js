/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { Level } from "../model/index.js";
import {
  getPullsAllRepo,
  getIssuesAllRepo,
  getCommitsAllRepo,
} from "../lib/api/index.js";
import {
  getScore,
  FindValueByKey,
  FindByIdAndUpdate,
} from "../services/index.js";
import { getUpdatedAtById, getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";
import { isInTime, TARGET_TIME } from "../utils/date.js";

export const getLevelsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const updatedAt = await getUpdatedAtById(user, Level);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const commits = await FindValueByKey(Level, _id, "commits");
    const issues = await FindValueByKey(Level, _id, "issues");
    const pulls = await FindValueByKey(Level, _id, "pulls");
    const score = await FindValueByKey(Level, _id, "score");
    const result = { score, commits, issues, pulls };
    ViewResponseJSON(res, false, "data", result);
    return;
  }

  try {
    const commits = await getCommitsAllRepo(user);
    const issues = await getIssuesAllRepo(user);
    const pulls = await getPullsAllRepo(user);
    const totalScore = getScore(commits, issues, pulls);
    const result = { totalScore, commits, issues, pulls };

    await FindByIdAndUpdate(Level, _id, "commits", commits);
    await FindByIdAndUpdate(Level, _id, "issues", issues);
    await FindByIdAndUpdate(Level, _id, "pulls", pulls);
    await FindByIdAndUpdate(Level, _id, "totalScore", totalScore);
    ViewResponseJSON(res, true, "data", result);
  } catch (err) {
    const commits = await FindValueByKey(Level, _id, "commits");
    const issues = await FindValueByKey(Level, _id, "issues");
    const pulls = await FindValueByKey(Level, _id, "pulls");
    const totalScore = await FindValueByKey(Level, _id, "totalScore");
    const result = { totalScore, commits, issues, pulls };
    ViewResponseJSON(res, false, "data", result);
  }
};

export const getLevelsCommitsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const updatedAt = await getUpdatedAtById(user, Level);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const result = await FindValueByKey(Level, _id, "commits");
    ViewResponseJSON(res, true, "commits", result);
    return;
  }

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
  const _id = await getUserObjectId(user);
  const updatedAt = await getUpdatedAtById(user, Level);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const result = await FindValueByKey(Level, _id, "issues");
    ViewResponseJSON(res, true, "issues", result);
    return;
  }

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
  const _id = await getUserObjectId(user);
  const updatedAt = await getUpdatedAtById(user, Level);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const result = await FindValueByKey(Level, _id, "pulls");
    ViewResponseJSON(res, true, "pulls", result);
    return;
  }

  try {
    const result = await getPullsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "pulls", result);
    ViewResponseJSON(res, true, "pulls", result);
  } catch (err) {
    const result = await FindValueByKey(Level, _id, "pulls");
    ViewResponseJSON(res, false, "pulls", result);
  }
};
