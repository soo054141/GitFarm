import { getAllRepoName } from "../Octokit/utils.js";
import { getCommitMessageEachRepo } from "./getCommitMessageEachRepo.js";

export const getCommitMessageAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);

  const status = await Promise.allSettled(
    repoName.map((name) => {
      const commit = getCommitMessageEachRepo(user, name);
      return commit;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  return fulfilledValue;
};
