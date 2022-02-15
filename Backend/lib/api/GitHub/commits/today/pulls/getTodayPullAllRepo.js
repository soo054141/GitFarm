/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../../Octokit/utils.js";
import { getTodayPullEachRepo } from "./getTodayPullEachRepo.js";

export const getTodayPullAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const pulls = getTodayPullEachRepo(user, name);
      return pulls;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const todayPulls = fulfilledValue.reduce((acc, cur) => acc + cur);

  return todayPulls;
};
