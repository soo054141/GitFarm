/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";
import { getUserObjectId } from "../utils/db.js";

export const getResolution = async (req) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const userDocument = await User.findById(_id);
  const { resolution } = userDocument;
  return resolution;
};

export const setResolution = async (req) => {
  const { user } = req;
  const { resolution } = req.body;
  const _id = await getUserObjectId(user);
  await User.findByIdAndUpdate(_id, {
    $set: { resolution },
  });
  return resolution;
};
