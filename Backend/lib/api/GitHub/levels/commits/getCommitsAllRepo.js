/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../Octokit/utils.js";
import { getCommitsEachRepo } from "./getCommitsEachRepo.js";

export const getCommitsAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const commits = getCommitsEachRepo(user, name);
      return commits;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const totalCommitsAfterRegister = fulfilledValue.reduce(
    (acc, cur) => acc + cur,
  );

  return totalCommitsAfterRegister;
};
