/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";

export const getMemberDate = (user) => {
  const { createdAt } = user;
  const memberDate = Math.ceil(
    (new Date() - createdAt) / (1000 * 60 * 60 * 24),
  );
  return memberDate;
};

export const setMemberDate = async (req, memberDate) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  await User.findByIdAndUpdate(_id, {
    $set: { memberDate: Number(memberDate) },
  });
  return Number(memberDate);
};
