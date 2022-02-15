/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getOctokitAuth } from "../../../../Octokit/utils.js";
import { todaySince } from "../../../../../../utils/date.js";

export const getTodayTotalPullEachRepo = async (user, repo) => {
  const { username } = user;
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
    (pull) => new Date(pull.closed_at) > new Date(todaySince),
  );

  return filteredPulls.length;
};
