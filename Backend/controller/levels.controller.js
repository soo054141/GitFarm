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
import { getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getLevelsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);

  try {
    const commits = await getCommitsAllRepo(user);
    const issues = await getIssuesAllRepo(user);
    const pulls = await getPullsAllRepo(user);
    const totalScore = getScore(commits, issues, pulls);
    const result = { totalScore, commits, issues, pulls };

    await FindByIdAndUpdate(Level, _id, "totalScore", totalScore);
    await FindByIdAndUpdate(Level, _id, "commits", commits);
    await FindByIdAndUpdate(Level, _id, "issues", issues);
    await FindByIdAndUpdate(Level, _id, "pulls", pulls);
    ViewResponseJSON(res, true, "data", result);
  } catch (err) {
    const totalScore = await FindValueByKey(Level, _id, "totalScore");
    const commits = await FindValueByKey(Level, _id, "commits");
    const issues = await FindValueByKey(Level, _id, "issues");
    const pulls = await FindValueByKey(Level, _id, "pulls");
    const result = { totalScore, commits, issues, pulls };
    ViewResponseJSON(res, false, "data", result);
  }
};

export const getLevelsCommitsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);

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

  try {
    const result = await getPullsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "pulls", result);
    ViewResponseJSON(res, true, "pulls", result);
  } catch (err) {
    const result = await FindValueByKey(Level, _id, "pulls");
    ViewResponseJSON(res, false, "pulls", result);
  }
};
