import { Octokit } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";

const getEachCommit = async (user, repo) => {
  const { username, accessToken } = user;
  const MyOctokit = Octokit.plugin(paginateRest);
  const octokit = new MyOctokit({ auth: accessToken });
  const res = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      author: username,
      per_page: 100,
    },
    (response) => response.data.length,
  );
  return res.reduce((acc, cur) => acc + cur);
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
