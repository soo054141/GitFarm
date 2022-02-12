/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Level } from "../model/index.js";

export const FindByIdAndUpdateLevels = async (_id, key, value) => {
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

export const FindValueByKeyLevels = async (_id, key) => {
  const [document] = await Level.find({ id: _id });
  return document[key];
};
