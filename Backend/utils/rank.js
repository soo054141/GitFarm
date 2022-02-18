export const calcRankWithConcurrentScore = (userData) => {
  const userRank = [...userData];

  userRank.sort((a, b) => {
    if (a.totalScore === b.totalScore) {
      if (a.username < b.username) return -1;
      if (a.username > b.username) return 1;
    }
    return b.totalScore - a.totalScore;
  });

  let rank = 1;
  let currentScore = 0;
  const result = userRank.map((user) => {
    const { totalScore } = user;
    if (totalScore >= currentScore) {
      const newUser = {
        ...user,
        rank,
      };
      currentScore = totalScore;
      return newUser;
    }

    rank += 1;
    currentScore = totalScore;
    return { ...user, rank };
  });

  return result;
};
