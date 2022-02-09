/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { todaySince, todayUntil } from "../../../../../utils/date.js";
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getDetailTotalCommitEachRepo = async (user, repo) => {
  const { username } = user;
  const octokit = getOctokitAuth(user);
  const repoData = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      since: todaySince,
      until: todayUntil,
      author: username,
      per_page: 100,
    },
    (response) => response.data,
  );

  const commitData = await repoData.map((item) => item.commit);

  const message = await commitData.map((item) => {
    const newData = {
      date: item.author.date,
      message: item.message,
    };
    return newData;
  });

  const response = await {
    info: {
      name: username,
      repo,
    },
    data: message,
  };
  return response;
};
