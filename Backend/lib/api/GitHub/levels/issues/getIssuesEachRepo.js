/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { startOfDay } from "../../../../../utils/date.js";
import { extractYMD, getCreatedAtById } from "../../../../../utils/db.js";
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getIssuesEachRepo = async (user, repo) => {
  const { username } = user;
  const createdAt = await getCreatedAtById(user);
  const { YEAR, MONTH, DAY } = extractYMD(createdAt);

  const octokit = getOctokitAuth(user);
  const issues = await octokit.paginate(
    `GET /repos/${username}/${repo}/issues`,
    {
      state: "closed",
      since: `${YEAR}-${MONTH}-${DAY}${startOfDay}`,
      author: username,
      per_page: 100,
    },
    (response) => response.data,
  );

  const filteredIssues = issues.filter((issue) => !issue.pull_request);

  return filteredIssues.length;
};
