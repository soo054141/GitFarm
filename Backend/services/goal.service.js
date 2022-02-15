/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";

export const getGoal = async (req) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });

  const userDocument = await User.findById(_id);
  const { goal } = userDocument;
  return goal;
};

export const setGoal = async (req) => {
  const { user } = req;
  const { goal } = req.body;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  await User.findByIdAndUpdate(_id, {
    $set: { goal: Number(goal) },
  });
  return Number(goal);
};
