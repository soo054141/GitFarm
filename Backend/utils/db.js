/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";

export const getUserObjectId = async (user) => {
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  return _id;
};
