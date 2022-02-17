import { Commit, User } from "../model/index.js";
import { FindValueByKey } from "../services/index.js";
import { getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getTodayController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const todayScore = await FindValueByKey(Commit, _id, "todayScore");
  const todayCommit = await FindValueByKey(Commit, _id, "todayCommit");
  const goal = await FindValueByKey(User, _id, "goal");
  const detail = await FindValueByKey(Commit, _id, "todayDetail");
  const result = { todayScore, todayCommit, goal, detail };
  ViewResponseJSON(res, false, "today", result);
};
