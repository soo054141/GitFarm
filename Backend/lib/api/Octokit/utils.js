import { Octokit } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";

export const getOctokitAuth = (user) => {
  const { accessToken } = user;
  const MyOctokit = Octokit.plugin(paginateRest);
  const octokit = new MyOctokit({ auth: accessToken });
  return octokit;
};

export const getAllRepoData = async (user) => {
  const octokit = getOctokitAuth(user);
  const userRepoData = await octokit.paginate(
    "GET /user/repos",
    {
      per_page: 100,
    },
    (response) => response.data,
  );
  return userRepoData;
};

export const getAllRepoName = async (user) => {
  const userRepoData = await getAllRepoData(user);
  const userRepoName = userRepoData.map((item) => item.name);
  return userRepoName;
};
