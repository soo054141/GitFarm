import { Commit, Level } from "../model/index.js";
import {
  getTodayTotalCommitAllRepo,
  getTodayTotalIssueAllRepo,
  getTodayTotalPullAllRepo,
  getDetailTotalCommitAllRepo,
} from "../lib/api/index.js";
import { getScore, getGoal, FindValueByKey } from "../services/index.js";
import { getUpdatedAtById, getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";
import { isInTime, TARGET_TIME } from "../utils/date.js";

export const getTodayController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const updatedAt = await getUpdatedAtById(user, Level);
  const inTime = isInTime(TARGET_TIME, updatedAt);
  if (inTime) {
    const commits = await FindValueByKey(Commit, _id, "commits");
    const issues = await FindValueByKey(Commit, _id, "issues");
    const pulls = await FindValueByKey(Commit, _id, "pulls");
    const todayScore = getScore(commits, issues, pulls);
    const result = { todayScore, goal, pulls, detail };
    ViewResponseJSON(res, false, "data", result);
    return;
  }

  try {
    const commits = await getTodayTotalCommitAllRepo(user);
    const issues = await getTodayTotalIssueAllRepo(user);
    const pulls = await getTodayTotalPullAllRepo(user);
    const todayScore = getScore(commits, issues, pulls);

    const goal = await getGoal(user);
    const detail = await getDetailTotalCommitAllRepo(user);

    const result = { todayScore, goal, pulls, detail };

    ViewResponseJSON(res, true, "today", result);
  } catch (err) {
    const totalScore = 0;
    const goal = 5;
    const pulls = 0;
    const detail = await FindValueByKey(Commit, _id, "todayDetail");
    const result = { totalScore, goal, pulls, detail };
    ViewResponseJSON(res, false, "today", result);
  }
};
