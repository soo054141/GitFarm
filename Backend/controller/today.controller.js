import { Commit, User } from "../model/index.js";
import {
  getTodayTotalCommitAllRepo,
  getTodayTotalIssueAllRepo,
  getTodayTotalPullAllRepo,
  getDetailTotalCommitAllRepo,
} from "../lib/api/index.js";
import { getScore, getGoal, FindValueByKey } from "../services/index.js";
import { getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getTodayController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);

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
