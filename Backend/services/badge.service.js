/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { User, Badge } from "../model/index.js";

export const getBadge = async (req) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });

  const dbUpdate = await Badge.findByIdAndUpdate(
    _id,
    {
      $set: { author: _id },
    },
    { upsert: true },
  ).populate({ path: "author" });

  const { badge } = dbUpdate;
  return badge;
};

export const getBadgeFromDB = async (req) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
  const [badgeDocument] = await Badge.find({ id: _id });
  const { badge } = badgeDocument;
  return badge;
};

export const setBadge = async (req) => {
  const { user } = req;
  const { badge } = req.body;
  const { id } = user;
  const [{ _id }] = await User.find({ id });

  const [badgeDocument] = await Badge.find({ id: _id });
  const newBadge = badgeDocument.badge;
  newBadge[badge] = true;

  await Badge.findByIdAndUpdate(_id, {
    $set: { badge: newBadge },
  });
  return newBadge;
};
