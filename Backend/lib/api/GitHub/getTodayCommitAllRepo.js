import { getAllRepoName } from "../Octokit/utils.js";
import { getTodayCommitEachRepo } from "./getTodayCommitEachRepo.js";

export const getTodayCommitAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);

  const status = await Promise.allSettled(
    repoName.map((name) => {
      const commit = getTodayCommitEachRepo(user, name);
      return commit;
    }),
  );
  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const todayCommit = fulfilledValue.reduce((acc, cur) => acc + cur);
  return todayCommit;
};
