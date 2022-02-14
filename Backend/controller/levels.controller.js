/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { User, Level } from "../model/index.js";
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
import { ViewResponseJSON } from "./index.js";

export const getLevelsController = async (req, res) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
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
  const { id } = user;
  const [{ _id }] = await User.find({ id });
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
  const { id } = user;
  const [{ _id }] = await User.find({ id });
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
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  try {
    const result = await getPullsAllRepo(user);
    await FindByIdAndUpdate(Level, _id, "pulls", result);
    ViewResponseJSON(res, true, "pulls", result);
  } catch (err) {
    const result = await FindValueByKey(Level, _id, "pulls");
    ViewResponseJSON(res, false, "pulls", result);
  }
};
