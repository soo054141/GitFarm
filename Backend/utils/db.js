/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";

export const getUserObjectId = async (user) => {
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  return _id;
};

export const getCreatedAtById = async (user) => {
  const { id } = user;
  const userDocument = await User.find({ id });
  return userDocument[0]?.createdAt;
};

export const getUpdatedAtById = async (user, Model) => {
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  const document = await Model.findById(_id);
  const updatedAt = document?.updatedAt;
  return updatedAt;
};
