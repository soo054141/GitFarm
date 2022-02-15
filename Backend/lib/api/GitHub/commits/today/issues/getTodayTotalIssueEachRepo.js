/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { todaySince } from "../../../../../utils/date.js";
import { getOctokitAuth } from "../../../../Octokit/utils.js";

export const getTodayTotalIssueEachRepo = async (user, repo) => {
  const { username } = user;
  const octokit = getOctokitAuth(user);

  const issues = await octokit.paginate(
    `GET /repos/${username}/${repo}/issues`,
    {
      state: "closed",
      since: todaySince,
      author: username,
      per_page: 100,
    },
    (response) => response.data,
  );
  const filteredIssues = issues.filter((issue) => !issue.pull_request);

  return filteredIssues.length;
};
