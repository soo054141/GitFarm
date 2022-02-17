import "regenerator-runtime";
import { calcRankWithConcurrentScore } from "../utils/rank.js";

const testUserData = [
  {
    username: "user1",
    avatarUrl: "https://avatars.githubusercontent.com/u/000?v=4",
    score: 10,
  },
  {
    username: "user2",
    avatarUrl: "https://avatars.githubusercontent.com/u/111?v=4",
    score: 20,
  },
  {
    username: "user3",
    avatarUrl: "https://avatars.githubusercontent.com/u/222?v=4",
    score: 30,
  },
];

const testUserRank = [
  {
    username: "user3",
    avatarUrl: "https://avatars.githubusercontent.com/u/222?v=4",
    score: 30,
    rank: 1,
  },
  {
    username: "user2",
    avatarUrl: "https://avatars.githubusercontent.com/u/111?v=4",
    score: 20,
    rank: 2,
  },
  {
    username: "user1",
    avatarUrl: "https://avatars.githubusercontent.com/u/000?v=4",
    score: 10,
    rank: 3,
  },
];

describe("calulating rank", () => {
  test("calcRankWithConcurrentScore", async () => {
    expect(calcRankWithConcurrentScore(testUserData)).toEqual(testUserRank);
  });
});
