/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Level } from "../model/index.js";

export const FindByIdAndUpdateLevel = async (_id, key, value) => {
  const config = {};
  config.author = _id;
  config[key] = value;
  const dbUpdate = await Level.findByIdAndUpdate(
    _id,
    {
      $set: config,
    },
    { upsert: true },
  ).populate({ path: "author" });

  return dbUpdate;
};

export const FindValueByKeyLevel = async (_id, key) => {
  const [document] = await Level.find({ id: _id });
  return document[key];
};

export const getScore = (commits, issues, pulls) => {
  const CommitEXP = 10;
  const IssueEXP = 10;
  const PullEXP = 10;
  const score = CommitEXP * commits + IssueEXP * issues + PullEXP * pulls;
  return score;
};
