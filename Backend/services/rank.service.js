/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User, Level } from "../model/index.js";
import { getFulfilledValue } from "../utils/async.js";
import { calcRankWithConcurrentScore } from "../utils/rank.js";

export const getDefaultRank = () => {
  const myRank = {
    username: "500",
    avatarUrl: "https://http.cat/500",
    score: 10,
    rank: 1,
  };

  const userRank = [
    {
      username: "500",
      avatarUrl: "https://http.cat/500",
      score: 10,
      rank: 1,
    },
    {
      username: "502",
      avatarUrl: "https://http.cat/502",
      score: 10,
      rank: 1,
    },
    {
      username: "503",
      avatarUrl: "https://http.cat/503",
      score: 8,
      rank: 2,
    },
    {
      username: "504",
      avatarUrl: "https://http.cat/504",
      score: 5,
      rank: 3,
    },
    {
      username: "505",
      avatarUrl: "https://http.cat/505",
      score: 3,
      rank: 4,
    },
  ];

  return {
    myRank,
    userRank,
  };
};

export const getMyRank = async (_id) => {
  const userDocument = await User.findById(_id);
  const { username, avatarUrl } = userDocument;
  const myLevelDocument = await Level.findById(_id);
  const score = myLevelDocument?.score ? myLevelDocument.score : 0;
  return {
    username,
    avatarUrl,
    score,
  };
};

export const getUserRank = async () => {
  const userDocument = await User.find();
  const processUserData = userDocument.map(async (user) => {
    const { _id, username, avatarUrl } = user;
    const userData = await Level.findById(_id);
    const score = userData?.score ? userData.score : 0;
    return {
      username,
      avatarUrl,
      score,
    };
  });

  const totalUser = await getFulfilledValue(processUserData);
  const userRank = calcRankWithConcurrentScore(totalUser);
  return userRank;
};
