export const ACHIEVEMENT500 = 0;
export const ACHIEVEMENT1000 = 1;
export const ACHIEVEMENT5000 = 2;
export const RANKING1 = 3;
export const RANKING2 = 4;
export const RANKING3 = 5;
export const DAYS7 = 6;
export const DAYS14 = 7;
export const DAYS21 = 8;
export const DAYS28 = 9;
export const LEVEL1 = 10;
export const LEVEL2 = 11;
export const LEVEL3 = 12;
export const LEVEL4 = 13;
export const LEVEL5 = 14;

// 500커밋, 1000커밋, 5000커밋 달성
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
  return arrayOfBadgesId;
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

export const myRankCalc = (myName, usersRank) => {
  let Rank = null;
  usersRank.forEach((userRank) => {
    if (userRank.username === myName && userRank.rank <= 3) {
      Rank = userRank.rank;
    }
  });
  return Rank;
};

export const AllBadgesFuncion = async (userBadges, mypageData, rankData) => {
  const newBadges = [];
  const { myRank, userRank } = rankData;
  const myMedalRank = myRankCalc(myRank.username, userRank);

  commitAchievement(mypageData.total, userBadges, newBadges);

  if (myMedalRank !== null) {
    ranking(myMedalRank, userBadges, newBadges);
  }

  continuousDay(mypageData.continuous, userBadges, newBadges);
  level(mypageData.totalScore, userBadges, newBadges);
  const newUserBadges = userBadges;
  newBadges.forEach((badgeId) => {
    newUserBadges[badgeId] = true;
  });
  return { newUserBadges, newBadges };
};
