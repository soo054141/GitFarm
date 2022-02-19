/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getCreatedAtById } from "../../../../../utils/db.js";
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getPullsEachRepo = async (user, repo) => {
  const { username } = user;
  const createdAt = await getCreatedAtById(user);
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
    (pull) => new Date(pull.closed_at) > createdAt,
  );

  return filteredPulls.length;
};
