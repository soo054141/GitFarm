/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { startOfDay } from "../../../../../utils/date.js";
import { extractYMD, getCreatedAtById } from "../../../../../utils/db.js";
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getCommitsEachRepo = async (user, repo) => {
  const { username } = user;
  const createdAt = await getCreatedAtById(user);
  const { YEAR, MONTH, DAY } = extractYMD(createdAt);

  const octokit = getOctokitAuth(user);
  const commits = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      since: `${YEAR}-${MONTH}-${DAY}${startOfDay}`,
      author: username,
      per_page: 100,
    },
    (response) => response.data,
  );

  const filteredCommits = commits.filter(
    (commit) => commit.commit.committer.name === username,
  );

  return filteredCommits.length;
};
