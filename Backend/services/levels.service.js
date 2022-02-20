/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User, Level } from "../model/index.js";
export const getScore = (commits, issues, pulls) => {
  const CommitEXP = 10;
  const IssueEXP = 10;
  const PullEXP = 10;
  const score = CommitEXP * commits + IssueEXP * issues + PullEXP * pulls;
  return score;
};

export const getAccumulatedTotalScore = async (req, todayScore) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });

  const levelDocument = await Level.findById(_id);

  if (levelDocument) {
    const { totalScore } = levelDocument;
    const result = totalScore + todayScore;
    return result;
  }
  return todayScore;
};
