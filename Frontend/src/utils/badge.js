const FIRSTCOMMIT = 0;
const ACHIEVEMENT50 = 1;
const ACHIEVEMENT100 = 2;
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
  if (!userBadges[FIRSTCOMMIT] && commitTotal >= 1) {
    arrayOfBadgesId.push(FIRSTCOMMIT);
  }
  if (!userBadges[ACHIEVEMENT50] && commitTotal >= 50) {
    arrayOfBadgesId.push(ACHIEVEMENT50);
  }
  if (!userBadges[ACHIEVEMENT100] && commitTotal >= 100) {
    arrayOfBadgesId.push(ACHIEVEMENT100);
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

export const AllBadgesFuncion = async (userBadges, mypageData) => {
  const arrayOfBadgesId = [];

  commitAchievement(mypageData.total, userBadges, arrayOfBadgesId);
  // ranking(3, userBadges, arrayOfBadgesId);
  continuousDay(mypageData.continuous, userBadges, arrayOfBadgesId);
  level(mypageData.totalScore, userBadges, arrayOfBadgesId, arrayOfBadgesId);
  const newUserBadges = userBadges;
  arrayOfBadgesId.forEach((badgeId) => {
    newUserBadges[badgeId] = true;
  });
  return newUserBadges;
};
