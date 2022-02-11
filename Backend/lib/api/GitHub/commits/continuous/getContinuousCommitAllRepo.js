/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../Octokit/utils.js";
import { getContinuousCommitEachRepo } from "./getContinuousCommitEachRepo.js";

export const getContinuousCommitAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const commit = getContinuousCommitEachRepo(user, name);
      return commit;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  return Math.max(...fulfilledValue);
  };
