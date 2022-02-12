/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";

export const getResolution = async (_id) => {
  const db = await User.findById(_id);
  return db.resolution;
};

export const updateResolution = async (_id, value) => {
  const config = {};
  config.author = _id;
  config.resolution = value;
  const dbUpdate = await User.findByIdAndUpdate(
    _id,
    {
      $set: config,
    },
    { upsert: true },
  ).populate({ path: "author" });

  return dbUpdate;
};

export const getScore = (commits, issues, pulls) => {
  const CommitEXP = 10;
  const IssueEXP = 10;
  const PullEXP = 10;
  const score = CommitEXP * commits + IssueEXP * issues + PullEXP * pulls;
  return score;
};

export const getMemberDate = (user) => {
  const { createdAt } = user;
  return createdAt;
};
