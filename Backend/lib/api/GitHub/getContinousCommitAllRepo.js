import { getAllRepoName } from "../Octokit/utils.js";
import { getContinousCommitEachRepo } from "./getContinousCommitEachRepo.js";

export const getContinousCommitAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const commit = getContinousCommitEachRepo(user, name);
      return commit;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  return fulfilledValue;
};
