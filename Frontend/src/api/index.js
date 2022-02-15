import axios from "axios";

const url = "http://localhost:8888";

// test
export const getBreeds = async () => {
  try {
    const r = await axios.get(`${url}/posts`);
    console.log(r);
  } catch (error) {
    console.error(error);
  }
};

// mypage
export const getMyInfo = async () => {
  try {
    const res = await axios.get(`${url}/mypage`);
    return res.data;
  } catch (error) {
    console.error();
  }
};

// graph - 월간
export const getCommitsTotalPerMonth = async (year) => {
  try {
    const res = await axios.get(`${url}/month/${year}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
// calendar 초록 동그라미
export const getCommitMonthly = async () => {
  try {
    const res = await axios.get(`${url}/perMonth`);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// user가 가진 badges
export const getUserBadges = async () => {
  try {
    const res = await axios.get(`${url}/badge`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getGoal = async () => {
  try {
    const res = await axios.get(`${url}/goal`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getResolution = async () => {
  try {
    const res = await axios.get(`${url}/resolution`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const postGoal = async (goalNum) => {
  try {
    const res = await axios.post(`${url}/goal`, {
      success: true,
      goal: goalNum,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const postResolution = async (resolutionString) => {
  try {
    const res = await axios.post(`${url}/resolution`, {
      success: true,
      resolution: resolutionString,
    });
    return res;
  } catch (error) {
    return error;
  }
};

// 총 커밋 개수 호출(getFullYear 기준 최근 3년)
export const getRecentThreeYear = async () => {
  try {
    const res = await axios.get(`${url}/recentThreeYear`);
    return res.data;
  } catch (error) {
    return error;
  }
};

// 총 레포지토리 별 사용 언어
export const getReposLanguage = async () => {
  try {
    const res = await axios.get(`${url}/reposLanguage`);
    return res.data;
  } catch (error) {
    return error;
  }
};
