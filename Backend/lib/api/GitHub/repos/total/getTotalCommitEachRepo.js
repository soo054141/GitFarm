/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getTotalCommitEachRepo = async (user, repo) => {
  const { username } = user;
  const octokit = getOctokitAuth(user);
  const commitNum = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      author: username,
      per_page: 100,
    },
    (response) => response.data.length,
  );
  return commitNum.reduce((acc, cur) => acc + cur);
};
