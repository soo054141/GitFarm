import {
  getCommitsAllRepo,
  getContinuousCommitAllRepo,
  getIssuesAllRepo,
  getPerDayCommitAllRepo,
  getPullsAllRepo,
  getTotalCommitAllRepo,
} from "../lib/api/index.js";
import { Commit, Level } from "../model/index.js";
import { FindByIdAndUpdate } from "../services/db.service.js";
import { getScore } from "../services/levels.service.js";
import {
  getMemberDate,
  setMemberDate,
} from "../services/memberDate.service.js";
import { year, month, fillZero } from "../utils/date.js";
import { getUserObjectId } from "../utils/db.js";

export const getDataInit = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const YYYYMM = `${year}-${fillZero(month, 2, "0")}`;

  try {
    // getCalendar data
    const calendar = await getPerDayCommitAllRepo(user, YYYYMM);
    await FindByIdAndUpdate(Commit, _id, "commitPerDay", calendar);

    // getMyPage data
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

    res.json({
      message: "calendar와 myPage data를 성공적으로 가져왔습니다.",
    });
  } catch (err) {
    res.status(400).json({
      message: "data를 가져오는데 실패했습니다.",
    });
  }
};
