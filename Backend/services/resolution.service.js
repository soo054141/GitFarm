/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";

export const getResolution = async (req) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  const userDocument = await User.findById(_id);
  const { resolution } = userDocument;
  return resolution;
};

export const setResolution = async (req) => {
  const { user } = req;
  const { resolution } = req.body;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  await User.findByIdAndUpdate(_id, {
    $set: { resolution },
  });
  return resolution;
};
