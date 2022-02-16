import { Commit, Level, User } from "../model/index.js";
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
    const todayScore = 0;
    const goal = await FindValueByKey(User, _id, "commits");
    const pulls = 0;
    const detail = await FindValueByKey(Commit, _id, "todayDetail");
    const result = { todayScore, goal, pulls, detail };
    ViewResponseJSON(res, false, "today", result);
    return;
  }

  try {
    const commits = await getTodayTotalCommitAllRepo(user);
    const issues = await getTodayTotalIssueAllRepo(user);
    const pulls = await getTodayTotalPullAllRepo(user);
    const todayScore = getScore(commits, issues, pulls);

    const goal = await getGoal(req);

    const detail = await getDetailTotalCommitAllRepo(user);

    const result = { todayScore, goal, pulls, detail };

    ViewResponseJSON(res, true, "today", result);
  } catch (err) {
    const todayScore = 0;
    const goal = await FindValueByKey(User, _id, "commits");
    const pulls = 0;
    const detail = await FindValueByKey(Commit, _id, "todayDetail");
    const result = { todayScore, goal, pulls, detail };
    ViewResponseJSON(res, false, "today", result);
  }
};
