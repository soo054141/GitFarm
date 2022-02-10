import { getOctokitAuth } from "../Octokit/utils.js";

export const getContinousCommitEachRepo = async (user, repo) => {
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
  const myCommits = [];
  res.forEach((r) => {
    myCommits.push(r.commit.author.date);
  });

  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    0,
    0,
    0,
    0,
  );
  const lastDate =
    new Date(myCommits[0]).getTime() +
    new Date(myCommits[0]).getTimezoneOffset() * 60 * 1000;
  const longest = Math.ceil(
    (today.getTime() - lastDate) / (1000 * 60 * 60 * 24),
  );

  console.log(longest);

  return;
};
