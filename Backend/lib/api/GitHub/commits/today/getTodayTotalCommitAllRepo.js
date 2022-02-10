/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../Octokit/utils.js";
import { getTodayTotalCommitEachRepo } from "./getTodayTotalCommitEachRepo.js";

export const getTodayTotalCommitAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const commit = getTodayTotalCommitEachRepo(user, name);
      // commit
      //   .then((res) => {
      //     console.log(`repo: ${name}, commit: ${res}`);
      //   })
      //   .catch((err) =>
      //     console.log(`err repo= ${name}, err message = ${err.message}`),
      //   );
      return commit;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const totalCommit = fulfilledValue.reduce((acc, cur) => acc + cur);
  return totalCommit;
};
