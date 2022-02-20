/* eslint-disable import/extensions */

import { Level } from "../model/index.js";
import { getUserObjectId } from "../utils/db.js";

/* eslint-disable import/prefer-default-export */
export const getScore = (commits, issues, pulls) => {
  const CommitEXP = 10;
  const IssueEXP = 10;
  const PullEXP = 10;
  const score = CommitEXP * commits + IssueEXP * issues + PullEXP * pulls;
  return score;
};

export const getAccumulatedTotalScore = async (req, todayScore) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const levelDocument = await Level.findById(_id);

  if (levelDocument) {
    const { totalScore } = levelDocument;
    const result = totalScore + todayScore;
    return result;
  }
  return todayScore;
};
