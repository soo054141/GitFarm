/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../Octokit/utils.js";
import { getTotalCommitEachRepo } from "./getTotalCommitEachRepo.js";

export const getTotalCommitAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const commit = getTotalCommitEachRepo(user, name);
      return commit;
      // commit
      //   .then((res) => {
      //     console.log(`repo: ${name}, commit: ${res}`);
      //   })
      //   .catch((err) =>
      //     console.log(`err repo= ${name}, err message = ${err.message}`),
      //   );
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const totalCommit = fulfilledValue.reduce((acc, cur) => acc + cur);
  return totalCommit;
};
