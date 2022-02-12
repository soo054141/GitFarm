/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getCommitsEachRepo = async (user, repo) => {
  const { username, createdAt } = user;
  const octokit = getOctokitAuth(user);

  const commits = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      since: createdAt,
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
