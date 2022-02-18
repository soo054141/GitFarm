const ACHIEVEMENT500 = 0;
const ACHIEVEMENT1000 = 1;
const ACHIEVEMENT5000 = 2;
const RANKING1 = 3;
const RANKING2 = 4;
const RANKING3 = 5;
const DAYS7 = 6;
const DAYS14 = 7;
const DAYS21 = 8;
const DAYS28 = 9;
const LEVEL1 = 10;
const LEVEL2 = 11;
const LEVEL3 = 12;
const LEVEL4 = 13;
const LEVEL5 = 14;

// 첫커밋, 50커밋, 100커밋 달성
export const commitAchievement = (commitTotal, userBadges, arrayOfBadgesId) => {
  if (!userBadges[ACHIEVEMENT500] && commitTotal >= 500) {
    arrayOfBadgesId.push(ACHIEVEMENT500);
  }
  if (!userBadges[ACHIEVEMENT1000] && commitTotal >= 1000) {
    arrayOfBadgesId.push(ACHIEVEMENT1000);
  }
  if (!userBadges[ACHIEVEMENT5000] && commitTotal >= 5000) {
    arrayOfBadgesId.push(ACHIEVEMENT5000);
  }
};

// 랭킹
export const ranking = (myRank, userBadges, arrayOfBadgesId) => {
  if (!userBadges[RANKING1] && myRank === 1) {
    arrayOfBadgesId.push(RANKING1);
    return;
  }
  if (!userBadges[RANKING2] && myRank === 2) {
    arrayOfBadgesId.push(RANKING2);
    return;
  }
  if (!userBadges[RANKING3] && myRank === 3) {
    arrayOfBadgesId.push(RANKING3);
  }
};

// 연속커밋날짜
export const continuousDay = (continuous, userBadges, arrayOfBadgesId) => {
  if (!userBadges[DAYS7] && continuous >= 7) {
    arrayOfBadgesId.push(DAYS7);
  }
  if (!userBadges[DAYS14] && continuous >= 14) {
    arrayOfBadgesId.push(DAYS14);
  }
  if (!userBadges[DAYS21] && continuous >= 21) {
    arrayOfBadgesId.push(DAYS21);
  }
  if (!userBadges[DAYS28] && continuous >= 28) {
    arrayOfBadgesId.push(DAYS28);
  }
};

// 레벨
export const level = (score, userBadges, arrayOfBadgesId) => {
  if (!userBadges[LEVEL1]) {
    arrayOfBadgesId.push(LEVEL1);
  }
  if (!userBadges[LEVEL2] && score > 100) {
    arrayOfBadgesId.push(LEVEL2);
  }
  if (!userBadges[LEVEL3] && score > 350) {
    arrayOfBadgesId.push(LEVEL3);
  }
  if (!userBadges[LEVEL4] && score > 850) {
    arrayOfBadgesId.push(LEVEL4);
  }
  if (!userBadges[LEVEL5] && score > 1650) {
    arrayOfBadgesId.push(LEVEL5);
  }
};

const myRankCalc = (myName, usersRank) => {
  let Rank = null;
  usersRank.forEach((userRank) => {
    if (userRank.username === myName && userRank.rank <= 3) {
      Rank = userRank.rank;
    }
  });
  return Rank;
};

export const AllBadgesFuncion = async (userBadges, mypageData, rankData) => {
  const arrayOfBadgesId = [];
  const { myRank, userRank } = rankData;
  const myMedalRank = myRankCalc(myRank.username, userRank);

  commitAchievement(1000, userBadges, arrayOfBadgesId);

  if (myMedalRank !== null) {
    ranking(3, userBadges, arrayOfBadgesId);
  }
  continuousDay(mypageData.continuous, userBadges, arrayOfBadgesId);
  level(790, userBadges, arrayOfBadgesId, arrayOfBadgesId);
  const newUserBadges = userBadges;
  console.log("원래 가지고", userBadges);
  console.log("이번에 얻게된", arrayOfBadgesId);

  arrayOfBadgesId.forEach((badgeId) => {
    newUserBadges[badgeId] = true;
  });
  console.log("newUserBadges", newUserBadges);
  return newUserBadges;
};
