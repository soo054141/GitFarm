/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User } from "../model/index.js";
import { getUserObjectId } from "../utils/db.js";

export const getGoal = async (req) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const userDocument = await User.findById(_id);
  const { goal } = userDocument;
  return goal;
};

export const setGoal = async (req) => {
  const { user } = req;
  const { goal } = req.body;
  const _id = await getUserObjectId(user);
  await User.findByIdAndUpdate(_id, {
    $set: { goal: Number(goal) },
  });
  return Number(goal);
};
