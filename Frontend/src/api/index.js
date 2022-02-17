/* eslint-disable no-alert */
import axios from "axios";

const url = "http://localhost:8888";

// main
export const getTodayCommit = async () => {
  try {
    const res = await axios.get(`${url}/today`);
    return res.data;
  } catch (error) {
    return error;
  }
};

// main - 커밋 상세 내역
export const getTodayDetailCommit = async () => {
  try {
    const res = await axios.get(`${url}/detail`);
    return res.data;
  } catch (error) {
    return error;
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

// 뱃지
export const postBadges = async (badges) => {
  try {
    const res = await axios.post(`${url}/badge`, {
      success: true,
      badge: badges,
    });
    return res;
  } catch (error) {
    return error;
  }
};

// 목표 커밋갯수
export const getGoal = async () => {
  try {
    const res = await axios.get(`${url}/goal`);
    return res.data;
  } catch (error) {
    return error;
  }
};

// 목표 커밋갯수 등록하기
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

// 유저 다짐 가져오기
export const getResolution = async () => {
  try {
    const res = await axios.get(`${url}/resolution`);
    return res.data;
  } catch (error) {
    return error;
  }
};

// 유저 다짐 등록하기
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

// 로그아웃
export const logout = async () => {
  try {
    const res = await axios.get(`${url}/logout`);
    return res;
  } catch (error) {
    alert("에러가 발생했습니다.");
    return error;
  }
};

// 회원 탈퇴
export const deleteAccount = async () => {
  try {
    const res = await axios.delete(`${url}/delete`);
    if (res.status === 201) {
      return alert("탈퇴 처리되었습니다.");
    }
  } catch (error) {
    alert("에러가 발생했습니다.");
    return error;
  }
};

// 깃팜 랭크
export const getRank = async () => {
  try {
    const res = await axios.get(`${url}/rank`);
    return res.data;
  } catch (error) {
    return error;
  }
};
