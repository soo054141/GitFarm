export const calcRankWithConcurrentScore = (userData) => {
  const userRank = [...userData];

  userRank.sort((a, b) => {
    if (a.score === b.score) {
      if (a.username < b.username) return -1;
      if (a.username > b.username) return 1;
    }
    return b.score - a.score;
  });

  let rank = 1;
  let currentScore = 0;
  const result = userRank.map((user) => {
    const { score } = user;
    if (score >= currentScore) {
      const newUser = {
        ...user,
        rank,
      };
      currentScore = score;
      return newUser;
    }

    rank += 1;
    currentScore = score;
    return { ...user, rank };
  });

  return result;
};
