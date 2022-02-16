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
    const todayCommit = 0;
    const goal = await FindValueByKey(User, _id, "commits");
    const detail = await FindValueByKey(Commit, _id, "todayDetail");
    const result = { todayScore, todayCommit, goal, detail };
    ViewResponseJSON(res, false, "today", result);
    return;
  }

  try {
    const todayCommit = await getTodayTotalCommitAllRepo(user);
    const todayIssues = await getTodayTotalIssueAllRepo(user);
    const todayPulls = await getTodayTotalPullAllRepo(user);
    const todayScore = getScore(todayCommit, todayIssues, todayPulls);

    const goal = await getGoal(req);

    const detail = await getDetailTotalCommitAllRepo(user);

    const result = { todayScore, todayCommit, goal, detail };

    ViewResponseJSON(res, true, "today", result);
  } catch (err) {
    const todayScore = 0;
    const todayCommit = 0;
    const goal = await FindValueByKey(User, _id, "commits");
    const detail = await FindValueByKey(Commit, _id, "todayDetail");
    const result = { todayScore, todayCommit, goal, detail };
    ViewResponseJSON(res, false, "today", result);
  }
};
