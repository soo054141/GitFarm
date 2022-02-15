/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { User, Badge, Commit, Level } from "../model/index.js";
import {
  getPullsAllRepo,
  getLanguagesData,
  getIssuesAllRepo,
  getCommitsAllRepo,
  getTotalCommitAllRepo,
  getContinuousCommitAllRepo,
} from "../lib/api/index.js";
import {
  getScore,
  getMemberDate,
  setMemberDate,
  FindValueByKey,
  FindByIdAndUpdate,
} from "../services/index.js";
import { getUpdatedAtById, getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";
import { isInTime, TARGET_TIME } from "../utils/date.js";

export const getReposLanguage = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const updatedAt = await getUpdatedAtById(user, Commit);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const result = await FindValueByKey(Commit, _id, "languages");
    ViewResponseJSON(res, true, "languages", result);
    return;
  }

  try {
    const result = await getLanguagesData(user);
    await FindByIdAndUpdate(Commit, _id, "languages", result);
    ViewResponseJSON(res, true, "languages", result);
  } catch (err) {
    const result = await FindValueByKey(Commit, _id, "languages");
    ViewResponseJSON(res, false, "languages", result);
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

    const totalScore = getScore(commits, issues, pulls);
    const continuous = await getContinuousCommitAllRepo(user);
    const memberDate = getMemberDate(user);

    await FindByIdAndUpdate(Level, _id, "totalScore", totalScore);
    await FindByIdAndUpdate(Commit, _id, "continuous", continuous);
    await setMemberDate(req, memberDate);

    const result = { total, totalScore, continuous, memberDate };

    ViewResponseJSON(res, true, "mypage", result);
  } catch (err) {
    const total = await FindValueByKey(Commit, _id, "total");
    const totalScore = await FindValueByKey(Level, _id, "totalScore");
    const continuous = await FindValueByKey(Commit, _id, "continuous");
    const memberDate = await getMemberDate(user);
    const result = { total, totalScore, continuous, memberDate };

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
    res.status(201).json({
      success: true,
      message: "success deleted",
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Bad Request",
    });
  }
};
