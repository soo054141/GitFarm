/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getAllRepoData } from "../../../Octokit/utils.js";

export const getLanguagesData = async (user) => {
  const repoData = await getAllRepoData(user);
  const status = await Promise.allSettled(
    repoData.map((data) => [data.name, data.language]),
  );

  const fulfilledValue = status
    .filter((result) => result.status === "fulfilled" && result.value[1])
    .map((result) => result.value);

  const result = fulfilledValue.map((item) => {
    const [repo, language] = item;
    const newItem = {
      repo,
      language,
    };
    return newItem;
  });

  return result;
};
