/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoName } from "../../../../Octokit/utils.js";
import { getDetailTotalCommitEachRepo } from "./getDetailEachRepo.js";

export const getDetailTotalCommitAllRepo = async (user) => {
  const repoName = await getAllRepoName(user);
  const status = await Promise.allSettled(
    repoName.map((name) => {
      const commit = getDetailTotalCommitEachRepo(user, name);
      return commit;
    }),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const result = fulfilledValue.filter((item) => item.data.length > 0);

  return result;
};
