import axios from "axios";

const MILLISECOND = 1000;
const SECOND = 15;

export const LOADING_TIME = MILLISECOND * SECOND;

export const { MODE, SERVER_URL } = process.env;

export const LOGIN_URL =
  MODE === "production" ? "http://localhost:8888/api/auth/github" : "/main";

export const AXIOS = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

export const todayCommitURL =
  MODE === "production" ? "/api/users/today" : "/today";

export const todayDetailCommitURL =
  MODE === "production" ? "/api/users/today/detail" : "/detail";

export const myInfoURL =
  MODE === "production" ? "/api/users/mypage" : "/mypage";

export const commitsTotalPerMonthURL =
  MODE === "production" ? "/api/users/commits/total/per/year" : "/month";

export const commitMonthlyURL =
  MODE === "production" ? "/api/users/commits/total/per/day" : "/perMonth";

export const userBadgesURL =
  MODE === "production" ? "/api/users/badges" : "/badge";

export const badgesURL = MODE === "production" ? "/api/users/badge" : "/badge";

export const goalURL =
  MODE === "production" ? "/api/users/today/goal" : "/goal";

export const resolutionURL =
  MODE === "production" ? "/api/users/resolution" : "/resolution";

export const recentThreeYearURL =
  MODE === "production"
    ? "/api/users/commits/total/recent/year"
    : "/recentThreeYear";

export const reposLanguageURL =
  MODE === "production" ? "/api/users/repos/language" : "/reposLanguage";

export const logoutURL = MODE === "production" ? "/api/auth/logout" : "/logout";

export const deleteAccountURL =
  MODE === "production" ? "/api/users/delete" : "/delete";

export const rankURL = MODE === "production" ? "/api/users/rank" : "/rank";
