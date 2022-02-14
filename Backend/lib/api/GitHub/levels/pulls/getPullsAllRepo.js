/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../Octokit/utils.js";
import { getPullsEachRepo } from "./getPullsEachRepo.js";

export const getPullsAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const pulls = getPullsEachRepo(user, name);
      return pulls;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const totalPullsAfterRegister = fulfilledValue.reduce(
    (acc, cur) => acc + cur,
  );

  return totalPullsAfterRegister;
};
