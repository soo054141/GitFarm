import { getOctokitAuth } from "../Octokit/utils.js";

export const getTodayCommitEachRepo = async (user, repo) => {
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

  const leadingZeros = (n, digits) => {
    var zero = "";
    n = n.toString();

    if (n.length < digits) {
      for (let i = 0; i < digits - n.length; i++) zero += "0";
    }
    return zero + n;
  };

  const now = new Date();

  const dateFormatter = (date) => {
    return (
      leadingZeros(date.getFullYear(), 4) +
      "-" +
      leadingZeros(date.getMonth() + 1, 2) +
      "-" +
      leadingZeros(date.getDate(), 2)
    );
  };
  const todayDate = dateFormatter(now);

  let cnt = 0;
  res.map((r) => {
    if (dateFormatter(new Date(r.commit.author.date)) === todayDate) {
      cnt++;
    }
  });
  return cnt;
};
