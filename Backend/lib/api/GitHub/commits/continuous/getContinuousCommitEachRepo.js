/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getContinuousCommitEachRepo = async (user, repo) => {
  const { username, createdAt } = user;
  const octokit = getOctokitAuth(user);
  const res = await octokit.paginate(
    `GET /repos/${username}/${repo}/commits`,
    {
      since: createdAt,
      author: username,
      per_page: 100,
    },
    (response) => response.data,
  );
  const myCommits = [];
  res.forEach((r) => {
    myCommits.push(r.commit.author.date);
  });

  const dateFormatter = (date) => date.getTime();

  const today = dateFormatter(new Date());
  const firstDate = dateFormatter(new Date(myCommits[myCommits.length - 1]));
  const longest = Math.ceil((today - firstDate) / (1000 * 60 * 60 * 24));
  const commitDay = new Array(longest).fill(0);

  myCommits.forEach((myCommit) => {
    const day = dateFormatter(new Date(myCommit));
    const idx = Math.ceil((today - day) / (1000 * 60 * 60 * 24));
    commitDay[idx - 1] += 1;
  });

  // 연속 커밋 일수를 계산해서 리턴
  let cnt = 0;

  for (let i = commitDay.length - 1; i >= 0; i -= 1) {
    // 해당 날에 커밋이 있으면 연속 커밋 일수 +1
    if (commitDay[i] !== 0) {
      cnt += 1;
      // 없으면 연속 커밋이 깨지므로 초기화
    } else {
      cnt = 0;
    }
  }
  return cnt;
};
