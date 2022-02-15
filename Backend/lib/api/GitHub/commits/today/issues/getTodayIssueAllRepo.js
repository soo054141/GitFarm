/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../../Octokit/utils.js";
import { getTodayIssueEachRepo } from "./getTodayIssueEachRepo.js";

export const getTodayIssueAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const issues = getTodayIssueEachRepo(user, name);
      return issues;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const todayIssues = fulfilledValue.reduce((acc, cur) => acc + cur);

  return todayIssues;
};
