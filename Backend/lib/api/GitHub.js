import { Octokit } from "@octokit/core";

// TODO: getEachCommit 구하기
const getEachCommit = async (octokit, repo) => {
  try {
    let count = 0;
    const repoInfo = await octokit.request(
      `GET /repos/YWTechIT/${repo}/commits`,
    );
    console.log(repoInfo.data);

    repoInfo.data.filter((item) => {
      if (item.commit.author.name === "YWTechIT") {
        count += 1;
      }
      return item;
    });

    console.log("count!!", count);
  } catch (err) {
    console.log("err occur!", err);
  }
};

// TODO: getTotalCommit 구하기
const getTotalCommit = async (user) => {
  const { accessToken } = user;
  const octokit = new Octokit({ auth: accessToken });
  const repoList = await octokit.request("GET /user/repos");

  console.log("repoList 반복문 시작");
  repoList.data.forEach(async (item) => {
    let answer = 0;
    const { name: repo } = item;
    const cnt = await getEachCommit(octokit, repo);
    console.log("currnet cnt=", cnt);
    answer += cnt;
    console.log(answer);
  });
};

export default getTotalCommit;
