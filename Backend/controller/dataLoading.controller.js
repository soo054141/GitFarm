import {
  getCommitsAllRepo,
  getContinuousCommitAllRepo,
  getDetailTotalCommitAllRepo,
  getIssuesAllRepo,
  getMonthTotalCommitAllRepo,
  getPerDayCommitAllRepo,
  getPullsAllRepo,
  getTodayTotalCommitAllRepo,
  getTodayTotalIssueAllRepo,
  getTodayTotalPullAllRepo,
  getTotalCommitAllRepo,
} from "../lib/api/index.js";
import { Commit, Level, User } from "../model/index.js";
import { getBadge, setDefaultBadge } from "../services/badge.service.js";
import { FindByIdAndUpdate } from "../services/db.service.js";
import { getScore } from "../services/levels.service.js";
import {
  getMemberDate,
  setMemberDate,
} from "../services/memberDate.service.js";
import { getResolution } from "../services/resolution.service.js";
import { year, month, fillZero } from "../utils/date.js";
import { getUserObjectId } from "../utils/db.js";

export const getLoadingData = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const YYYYMM = `${year}-${fillZero(month, 2, "0")}`;

  try {
    // getEachDayCommit(calendar)
    const calendar = await getPerDayCommitAllRepo(user, YYYYMM);
    await FindByIdAndUpdate(Commit, _id, "commitEachDay", calendar);

    // getEachMonthCommit(graph)
    const commitEachMonth = await getMonthTotalCommitAllRepo(user, year);
    await FindByIdAndUpdate(Commit, _id, "commitEachMonth", commitEachMonth);

    // today
    const todayCommit = await getTodayTotalCommitAllRepo(user);
    const todayIssues = await getTodayTotalIssueAllRepo(user);
    const todayPulls = await getTodayTotalPullAllRepo(user);
    const todayScore = getScore(todayCommit, todayIssues, todayPulls);
    const todayDetail = await getDetailTotalCommitAllRepo(user);

    await FindByIdAndUpdate(Commit, _id, "todayScore", todayScore);
    await FindByIdAndUpdate(Commit, _id, "todayDetail", todayDetail);

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

    await FindByIdAndUpdate(Level, _id, "totalScore", totalScore);
    await FindByIdAndUpdate(Commit, _id, "continuous", continuous);

    const memberDate = getMemberDate(user);
    await setMemberDate(req, memberDate);

    // languages
    const languages = await getLanguagesData(user);
    await FindByIdAndUpdate(Commit, _id, "languages", languages);

    // badges
    try {
      await getBadge(req);
    } catch (err) {
      await setDefaultBadge(req);
    }

    // resolution
    try {
      await getResolution(req);
    } catch (err) {
      await FindByIdAndUpdate(
        User,
        _id,
        "resolution",
        "나는 최강의 개발자가 될거야!",
      );
    }

    res.json({
      message: "calendar와 myPage data를 성공적으로 가져왔습니다.",
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: "data를 가져오는데 실패했습니다.",
    });
  }
};
