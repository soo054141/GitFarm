/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import {
  endOfDay,
  fillZero,
  monthDays,
  monthPerYear,
  startOfDay,
} from "../../../../../utils/date.js";
import { getAllRepoName, getOctokitAuth } from "../../../Octokit/utils.js";

export const getMonthTotalCommitEachRepo = async (user, repo, date) => {
  const { year, month, day } = date;
  const convertMonth = fillZero(month + 1, 2, "0");
  const { username } = user;
  const octokit = getOctokitAuth(user);
  const commitNum = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      since: `${year}-${convertMonth}-01${startOfDay}`,
      until: `${year}-${convertMonth}-${day}${endOfDay}`,
      author: username,
      per_page: 100,
    },
    (response) => response.data.length,
  );

  return commitNum;
};

export const getMonthTotalCommitAllRepo = async (user, year) => {
  const monthes = Array.from({ length: monthPerYear + 1 }, () => 0);
  const repoName = await getAllRepoName(user);

  const commitPerYear = repoName.map(async (name) => {
    const getMonth = await monthDays.map(async (day, month) => {
      const date = {
        year,
        month,
        day,
      };
      const [result] = await getMonthTotalCommitEachRepo(user, name, date);
      return [name, month + 1, result];
    });

    const status = await Promise.allSettled(getMonth);

    const fulfilledValue = await status
      .filter((result) => result.status === "fulfilled")
      .map((item) => item.value);

    return fulfilledValue;
  });

  const response = await Promise.allSettled(commitPerYear);

  const commitData = await response
    .filter((item) => item.status === "fulfilled")
    .map((item) => item.value);

  commitData.forEach((perYear) => {
    perYear.forEach((item) => {
      const [, month, count] = item;
      monthes[month] += count;
    });
  });

  return monthes;
};
