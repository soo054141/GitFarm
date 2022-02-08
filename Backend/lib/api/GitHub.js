import { Octokit } from "@octokit/core";

// TODO: getEachCommit 구하기
const getEachCommit = async (user, repo) => {
  const { username, accessToken } = user;
  const octokit = new Octokit({ auth: accessToken });
  const { data: commitRepo } = await octokit.request(
    `GET /repos/${username}/${repo}/commits`,
    {
      per_page: 100,
    },
  );

  const eachCommit = commitRepo.filter((item) => {
    const userName = item.commit.committer.name;
    return userName === username;
  });

  return [repo, eachCommit.length];
};

// TODO: getTotalCommit 구하기
const getTotalCommit = async (user) => {
  const { accessToken } = user;
  const octokit = new Octokit({ auth: accessToken });
  const { data: userRepos } = await octokit.request("GET /user/repos", {
    per_page: 100,
  });

  const messages = await Promise.allSettled(
    userRepos.map((item) => {
      const repo = item.name;
      return getEachCommit(user, repo);
    }),
  );

  const fulfilledValue = messages
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const totalCommit = fulfilledValue.reduce((acc, cur) => acc + cur);
  return totalCommit;
};

export default getTotalCommit;
