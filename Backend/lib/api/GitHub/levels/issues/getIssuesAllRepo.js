/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../Octokit/utils.js";
import { getIssuesEachRepo } from "./getIssuesEachRepo.js";

export const getIssuesAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const issues = getIssuesEachRepo(user, name);
      return issues;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const totalIssuesAfterRegister = fulfilledValue.reduce(
    (acc, cur) => acc + cur,
  );

  return totalIssuesAfterRegister;
};
