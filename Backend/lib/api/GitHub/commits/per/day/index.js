/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getFulfilledValue } from "../../../../../../utils/async.js";
import {
  fillZero,
  startOfDay,
  endOfDay,
  customDate,
  getMonthCalendar,
} from "../../../../../../utils/date.js";
import { getAllRepoName, getOctokitAuth } from "../../../../Octokit/utils.js";

const getPerDayCommitEachRepo = async (user, repo, date) => {
  const { year, month, day } = date;
  const { username } = user;
  const octokit = getOctokitAuth(user);
  const commitNum = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      since: `${year}-${month}-${day}${startOfDay}`,
      until: `${year}-${month}-${day}${endOfDay}`,
      author: username,
      per_page: 100,
    },
    (response) => response.data.length,
  );
  return [day, ...commitNum];
};

export const getPerDayCommitAllRepo = async (user, date) => {
  const [year, month] = date.split("-");
  const repoName = await getAllRepoName(user);
  const monthCalendar = getMonthCalendar(month);

  const commitPerDay = await repoName.map(async (repo) => {
    const monthTempCalendar = getMonthCalendar(month);

    const dayCommit = await monthTempCalendar.map(async (value, day) => {
      const DAY = fillZero(day + 1, 2, "0");
      const date = customDate(year, month, DAY);
      const dailyCommit = await getPerDayCommitEachRepo(user, repo, date);
      return dailyCommit;
    });

    const fulfilledValue = await getFulfilledValue(dayCommit);
    return fulfilledValue;
  });

  const fulfilledValue = await getFulfilledValue(commitPerDay);

  fulfilledValue.forEach((item) => {
    item.forEach((repository) => {
      const [day, commit] = repository;
      monthCalendar[Number(day) - 1] += commit;
    });
  });

  return monthCalendar;
};
