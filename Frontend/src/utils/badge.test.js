import * as badge from "./badge";

const userBadges = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

describe("커밋 달성 배지 획득 여부", () => {
  test("500커밋 달성 배지 획득", () => {
    const commitTotal = 590;
    const arrayOfBadgesId = [];
    const expected = [badge.ACHIEVEMENT500];
    expect(
      badge.commitAchievement(commitTotal, userBadges, arrayOfBadgesId),
    ).toEqual(expected);
  });
  test("1000커밋 달성 배지 획득", () => {
    const commitTotal = 1300;
    const arrayOfBadgesId = [];
    const expected = [badge.ACHIEVEMENT500, badge.ACHIEVEMENT1000];
    expect(
      badge.commitAchievement(commitTotal, userBadges, arrayOfBadgesId),
    ).toEqual(expected);
  });
  test("5000커밋 달성 배지 획득", () => {
    const commitTotal = 6000;
    const arrayOfBadgesId = [];
    const expected = [
      badge.ACHIEVEMENT500,
      badge.ACHIEVEMENT1000,
      badge.ACHIEVEMENT5000,
    ];
    expect(
      badge.commitAchievement(commitTotal, userBadges, arrayOfBadgesId),
    ).toEqual(expected);
  });
});

describe("랭킹 배지 획득 여부", () => {
  test("1등", () => {
    const myRank = 1;
    const arrayOfBadgesId = [];
    const expected = [badge.RANKING1];
    expect(badge.ranking(myRank, userBadges, arrayOfBadgesId)).toEqual(
      expected,
    );
  });
  test("2등", () => {
    const myRank = 2;
    const arrayOfBadgesId = [];
    const expected = [badge.RANKING2];
    expect(badge.ranking(myRank, userBadges, arrayOfBadgesId)).toEqual(
      expected,
    );
  });
  test("3등", () => {
    const myRank = 3;
    const arrayOfBadgesId = [];
    const expected = [badge.RANKING3];
    expect(badge.ranking(myRank, userBadges, arrayOfBadgesId)).toEqual(
      expected,
    );
  });
  test("3등이하", () => {
    const myRank = 4;
    const arrayOfBadgesId = [];
    const expected = [];
    expect(badge.ranking(myRank, userBadges, arrayOfBadgesId)).toEqual(
      expected,
    );
  });
});

describe("연속 커밋 날짜 배지 획득 여부", () => {
  test("7일 이상", () => {
    const continuous = 9;
    const arrayOfBadgesId = [];
    const expected = [badge.DAYS7];
    expect(
      badge.continuousDay(continuous, userBadges, arrayOfBadgesId),
    ).toEqual(expected);
  });
  test("14일 이상", () => {
    const continuous = 15;
    const arrayOfBadgesId = [];
    const expected = [badge.DAYS7, badge.DAYS14];
    expect(
      badge.continuousDay(continuous, userBadges, arrayOfBadgesId),
    ).toEqual(expected);
  });
  test("21일 이상", () => {
    const continuous = 21;
    const arrayOfBadgesId = [];
    const expected = [badge.DAYS7, badge.DAYS14, badge.DAYS21];
    expect(
      badge.continuousDay(continuous, userBadges, arrayOfBadgesId),
    ).toEqual(expected);
  });
  test("28일 이상", () => {
    const continuous = 40;
    const arrayOfBadgesId = [];
    const expected = [badge.DAYS7, badge.DAYS14, badge.DAYS21, badge.DAYS28];
    expect(
      badge.continuousDay(continuous, userBadges, arrayOfBadgesId),
    ).toEqual(expected);
  });
});

describe("레벨 배지 획득 여부", () => {
  test("0~100 레벨1", () => {
    const score = 89;
    const arrayOfBadgesId = [];
    const expected = [badge.LEVEL1];
    expect(badge.level(score, userBadges, arrayOfBadgesId)).toEqual(expected);
  });
  test("101~350 레벨2", () => {
    const score = 350;
    const arrayOfBadgesId = [];
    const expected = [badge.LEVEL1, badge.LEVEL2];
    expect(badge.level(score, userBadges, arrayOfBadgesId)).toEqual(expected);
  });
  test("351~850 레벨3", () => {
    const score = 800;
    const arrayOfBadgesId = [];
    const expected = [badge.LEVEL1, badge.LEVEL2, badge.LEVEL3];
    expect(badge.level(score, userBadges, arrayOfBadgesId)).toEqual(expected);
  });
  test("851~1650 레벨4", () => {
    const score = 1650;
    const arrayOfBadgesId = [];
    const expected = [badge.LEVEL1, badge.LEVEL2, badge.LEVEL3, badge.LEVEL4];
    expect(badge.level(score, userBadges, arrayOfBadgesId)).toEqual(expected);
  });
  test("1651이상 레벨5", () => {
    const score = 1658;
    const arrayOfBadgesId = [];
    const expected = [
      badge.LEVEL1,
      badge.LEVEL2,
      badge.LEVEL3,
      badge.LEVEL4,
      badge.LEVEL5,
    ];
    expect(badge.level(score, userBadges, arrayOfBadgesId)).toEqual(expected);
  });
});

describe("AllBadgesFunction", () => {
  test("0~100 레벨1", async () => {
    const mypageData = {
      total: 1200,
      totalScore: 101,
      continuous: 22,
      memberDate: 6,
    };
    const rankData = {
      myRank: {
        avatarUrl: "https://avatars.githubusercontent.com/u/33392925?v=4",
        rank: 3,
        totalScore: 10,
        username: "userId",
      },
    };

    const expected = {
      newBadges: [0, 1, 5, 6, 7, 8, 10, 11],
      newUserBadges: [
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
      ],
    };
    expect(
      await badge.AllBadgesFuncion(userBadges, mypageData, rankData),
    ).toEqual(expected);
  });
});