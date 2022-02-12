/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";

export const FindByIdAndUpdateUser = async (_id, key, value) => {
  const config = {};
  config.author = _id;
  config[key] = value;
  const dbUpdate = await User.findByIdAndUpdate(
    _id,
    {
      $set: config,
    },
    { upsert: true },
  );
  return dbUpdate;
};

export const FindValueByKeyUser = async (_id, key) => {
  const [document] = await User.find({ id: _id });
  return document[key];
};

export const getResolution = async (_id) => {
  const db = await User.findById(_id);
  return db.resolution;
};

export const getMemberDate = (user) => {
  const { createdAt } = user;
  const memberDate = Math.ceil(
    (new Date() - createdAt) / (1000 * 60 * 60 * 24),
  );
  return memberDate;
};
