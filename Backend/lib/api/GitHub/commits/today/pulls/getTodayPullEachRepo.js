/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getOctokitAuth } from "../../../../Octokit/utils.js";

export const getTodayPullEachRepo = async (user, repo) => {
  const { username, createdAt } = user;
  const octokit = getOctokitAuth(user);

  const pulls = await octokit.paginate(
    `GET /repos/${username}/${repo}/pulls`,
    {
      state: "closed",
      author: username,
      per_page: 100,
    },
    (response) => response.data,
  );
  const filteredPulls = pulls.filter(
    (pull) => new Date() - new Date(pull.closed_at) < 1,
  );

  return filteredPulls.length;
};
