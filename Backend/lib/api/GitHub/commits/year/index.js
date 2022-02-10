/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import {
  fillZero,
  monthDays,
  monthPerYear,
} from "../../../../../utils/date.js";
import { getAllRepoName, getOctokitAuth } from "../../../Octokit/utils.js";

export const getMonthTotalCommitEachRepo = async (
  user,
  repo,
  year,
  month,
  day,
) => {
  const convertMonth = fillZero(month, 2, "0");
  const { username } = user;
  const octokit = getOctokitAuth(user);
  const commitNum = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      since: `${year}-${convertMonth}-01T00:00:00Z`,
      until: `${year}-${convertMonth}-${day}T23:59:59Z`,
      author: username,
      per_page: 100,
    },
    (response) => response.data.length,
  );

  return commitNum;
};

export const getMonthTotalCommitAllRepo = async (user, year) => {
  const answer = Array.from({ length: monthPerYear + 1 }, () => 0);
  const repoName = await getAllRepoName(user);

  const response = await repoName.map(async (name) => {
    const getMonth = await monthDays.map(async (day, month) => {
      const result = await getMonthTotalCommitEachRepo(
        user,
        name,
        year,
        month + 1,
        day,
      );
      return [month + 1, result];
    });

    const status = await Promise.allSettled(getMonth);

    const fulfilledValue = await status
      .filter((result) => result.status === "fulfilled")
      .map((res) => res.value);

    await fulfilledValue.map((item) => {
      const [month, [value]] = item;
      answer[month] += Number(value);
      return item;
    });
    return answer;
  });
  return response;
};
