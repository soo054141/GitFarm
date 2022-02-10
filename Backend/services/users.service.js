/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Commit } from "../model/index.js";

export const FindByIdAndUpdate = async (_id, key, value) => {
  const config = {};
  config.author = _id;
  config[key] = value;
  const dbUpdate = await Commit.findByIdAndUpdate(
    _id,
    {
      $set: config,
    },
    { upsert: true },
  ).populate({ path: "author" });

  return dbUpdate;
};

export const FindValueByKey = async (_id, key) => {
  const [document] = await Commit.find({ id: _id });
  return document[key];
};
