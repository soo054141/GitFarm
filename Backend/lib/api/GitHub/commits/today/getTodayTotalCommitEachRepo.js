/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { todaySince, todayUntil } from "../../../../../utils/date.js";
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getTodayTotalCommitEachRepo = async (user, repo) => {
  const { username } = user;
  const octokit = getOctokitAuth(user);
  const commitNum = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      since: todaySince,
      until: todayUntil,
      author: username,
      per_page: 100,
    },
    (response) => response.data.length,
  );
  return commitNum.reduce((acc, cur) => acc + cur);
};
