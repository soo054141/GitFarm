import { Octokit } from "@octokit/core";

// TODO: commit 개수가 100개가 넘어갈 때 구하기
const getEachCommit = async (user, repo) => {
  const { username, accessToken } = user;
  const octokit = new Octokit({ auth: accessToken });
  const { data: commitRepo } = await octokit.request(
    `GET /repos/${username}/${repo}/commits`,
    {
      author: username,
      per_page: 100,
    },
  );
  return commitRepo.length;
};

const getTotalCommit = async (user) => {
  const { accessToken } = user;
  const octokit = new Octokit({ auth: accessToken });
  const { data: userRepos } = await octokit.request("GET /user/repos", {
    per_page: 100,
  });

  const messages = await Promise.allSettled(
    userRepos.map((item) => {
      const repo = item.name;
      const commit = getEachCommit(user, repo);
      commit
        .then((res) => {
          console.log(`repo: ${repo}, commit: ${res}`);
        })
        .catch((err) =>
          console.log(`err repo= ${repo}, err message = ${err.message}`),
        );
      return commit;
    }),
  );

  const fulfilledValue = messages
    .filter((result) => result.status === "fulfilled")
    .map((res) => res.value);

  const totalCommit = fulfilledValue.reduce((acc, cur) => acc + cur);
  return totalCommit;
};

export default getTotalCommit;
