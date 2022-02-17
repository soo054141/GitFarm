import { TARGET_TIME, ONE_MILLISECOND, ONE_MINUTE } from "../utils/date.js";
import { Commit, User, Level } from "../model/index.js";
import { getUpdatedAtById } from "../utils/db.js";

export const isInTime = async (req, res, next) => {
  const { user } = req;
  const updatedAt = await getUpdatedAtById(user, Commit || User || Level);
  const calc = Math.floor(
    (new Date() - updatedAt) / (ONE_MILLISECOND * ONE_MINUTE),
  );
  if (calc > TARGET_TIME) {
    next();
  }
  return;
};
