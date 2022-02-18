/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { BADGE } from "../model/default/index.js";
import { Badge } from "../model/index.js";
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
  const _id = await getUserObjectId(user);

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
  const _id = await getUserObjectId(user);
  const newBadge = JSON.parse(badge);

  await Badge.findByIdAndUpdate(_id, {
    $set: { badge: newBadge },
  });
};
