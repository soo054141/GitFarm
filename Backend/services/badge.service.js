/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Badge } from "../model/index.js";

export const getBadge = async (req) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await Badge.find({ id });
  const badgeDocument = await Badge.findById(_id);
  const { badge } = badgeDocument;
  return badge;
};

export const setResolution = async (req) => {
  const { user } = req;
  const { badge } = req.body;
  const { id } = user;
  const [{ _id }] = await Badge.find({ id });
  await Badge.findByIdAndUpdate(_id, {
    $set: { badge },
  });
  return badge;
};
