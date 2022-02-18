/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { Level } from "../model/index.js";
import { FindValueByKey } from "../services/index.js";
import { getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getLevelsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const totalScore = await FindValueByKey(Level, _id, "totalScore");
  const commits = await FindValueByKey(Level, _id, "commits");
  const issues = await FindValueByKey(Level, _id, "issues");
  const pulls = await FindValueByKey(Level, _id, "pulls");
  const result = { totalScore, commits, issues, pulls };
  ViewResponseJSON(res, true, "data", result);
};

export const getLevelsCommitsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Level, _id, "commits");
  ViewResponseJSON(res, true, "commits", result);
};

export const getLevelsIssuesController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Level, _id, "issues");
  ViewResponseJSON(res, true, "issues", result);
};

export const getLevelsPullsController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Level, _id, "pulls");
  ViewResponseJSON(res, true, "pulls", result);
};
