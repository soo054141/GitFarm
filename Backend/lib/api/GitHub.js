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

const getEachRepoTodayCommit = async (user, repo) => {
  const { username, accessToken } = user;
  const MyOctokit = Octokit.plugin(paginateRest);
  const octokit = new MyOctokit({ auth: accessToken });
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
  const todayDate =
    leadingZeros(now.getFullYear(), 4) +
    "-" +
    leadingZeros(now.getMonth() + 1, 2) +
    "-" +
    leadingZeros(now.getDate(), 2);

  let cnt = 0;
  res.map((r) => {
    if (r.commit.author.date.substr(0, 10) === todayDate) {
      cnt++;
    }
  });

  return cnt;
};

const getTodayCommit = async (user) => {
  const { accessToken } = user;
  const octokit = new Octokit({ auth: accessToken });
  const { data: userRepos } = await octokit.request(`GET /user/repos`, {
    per_page: 100,
  });

  const messages = await Promise.allSettled(
    userRepos.map(async (item) => {
      const repo = item.name;

      const commit = getEachRepoTodayCommit(user, repo);
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

const getRecentCommitDate = async (user, repo) => {
  const { username, accessToken } = user;
  const MyOctokit = Octokit.plugin(paginateRest);
  const octokit = new MyOctokit({ auth: accessToken });
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
    myCommits.push(r.commit.committer.date);
  });

  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    0,
    0,
    0,
    0,
  );
  const firstDate =
    new Date(myCommits[myCommits.length - 1]).getTime() +
    new Date(myCommits[myCommits.length - 1]).getTimezoneOffset() * 60 * 1000;
  const longest = Math.ceil(
    (today.getTime() - firstDate) / (1000 * 60 * 60 * 24),
  );
  const commitDay = new Array(longest + 1).fill(0);

  for (var i = 0; i < myCommits.length; i++) {
    var idx = Math.ceil(
      (today.getTime() - new Date(myCommits[i]).getTime()) /
        (1000 * 60 * 60 * 24),
    );
    commitDay[idx]++;
  }
  console.log(commitDay);

  //연속 커밋 일수를 계산해서 리턴
  let cnt = 0;

  for (let i = commitDay.length - 1; i >= 0; i--) {
    //해당 날에 커밋이 있으면 연속 커밋 일수 +1
    if (commitDay[i] !== 0) {
      cnt++;
      //없으면 연속 커밋이 깨지므로 0 리턴
    } else {
      return;
    }
  }
  return cnt;
};

const getContinousCommitDays = async (user) => {
  const { accessToken } = user;
  const octokit = new Octokit({ auth: accessToken });
  const { data: userRepos } = await octokit.request(`GET /user/repos`, {
    per_page: 100,
  });

  const messages = await Promise.allSettled(
    userRepos.map(async (item) => {
      const repo = item.name;

      const commit = getRecentCommitDate(user, repo);
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
    .map((res) => {
      if (res.value !== undefined) {
        return res.value;
      } else {
        return 0;
      }
    });

  return Math.max(...fulfilledValue);
};

export { getTotalCommit, getTodayCommit, getContinousCommitDays };
