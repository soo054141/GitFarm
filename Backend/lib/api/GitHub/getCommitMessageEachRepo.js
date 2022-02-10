import { getOctokitAuth } from "../Octokit/utils.js";

export const getCommitMessageEachRepo = async (user, repo) => {
  const { username } = user;
  const octokit = getOctokitAuth(user);
  const res = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      author: username,
      per_page: 100,
    },
    (response) => response.data,
  );

  const commitMessageList = [];

  res.forEach((r) => {
    const commitMessage = {
      date: { date: "", message: "" },
    };
    commitMessage.date = r.commit.author.date;
    commitMessage.message = r.commit.message;
    commitMessageList.push(commitMessage);
  });

  const commit = {
    info: { name: username, repo: repo },
    date: commitMessageList,
  };

  return commit;
};
