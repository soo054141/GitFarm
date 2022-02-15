/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../../Octokit/utils.js";
import { getTodayTotalIssueEachRepo } from "./getTodayTotalIssueEachRepo.js";

export const getTodayTotalIssueAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const issues = getTodayTotalIssueEachRepo(user, name);
      return issues;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const todayIssues = fulfilledValue.reduce((acc, cur) => acc + cur);

  return todayIssues;
};
