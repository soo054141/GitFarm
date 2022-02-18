/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { BADGE } from "../model/default/index.js";
import { User, Badge } from "../model/index.js";
import { getUserObjectId } from "../utils/db.js";

export const getBadge = async (req) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const badgeDocument = await Badge.findById(_id);
  if (!badgeDocument) {
    await setDefaultBadge(req);
  }
  return badgeDocument.badge;
};

export const setDefaultBadge = async (req) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });

  await Badge.findByIdAndUpdate(
    _id,
    {
      $set: { author: _id, badge: BADGE },
    },
    { upsert: true },
  ).populate({ path: "author" });

  return BADGE;
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
