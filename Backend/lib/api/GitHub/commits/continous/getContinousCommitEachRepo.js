import { getOctokitAuth } from "../../../Octokit/utils.js";

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

  const dateFormatter = (date) => {
    return date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  };

  const today = dateFormatter(new Date());

  const firstDate = dateFormatter(new Date(myCommits[myCommits.length - 1]));

  const longest = Math.ceil((today - firstDate) / (1000 * 60 * 60 * 24));

  const commitDay = new Array(longest).fill(0);

  for (let i = 0; i < myCommits.length; i++) {
    let day = dateFormatter(new Date(myCommits[i]));
    let idx = Math.ceil((today - day) / (1000 * 60 * 60 * 24));
    commitDay[idx - 1]++;
  }

  //연속 커밋 일수를 계산해서 리턴
  let cnt = 0;

  for (let i = commitDay.length - 1; i > 0; i--) {
    //해당 날에 커밋이 있으면 연속 커밋 일수 +1
    if (commitDay[i] !== 0) {
      cnt++;
      //없으면 연속 커밋이 깨지므로 초기화
    } else {
      cnt = 0;
    }
  }
  return cnt;
};
