import { TARGET_TIME, ONE_MILLISECOND, ONE_MINUTE } from "../utils/date.js";
import { Commit } from "../model/index.js";
import { getUpdatedAtById } from "../utils/db.js";

export default async (req, res, next) => {
  const { user } = req;

  try {
    const updatedAt = await getUpdatedAtById(user, Commit);

    // commit 정보가 없을 때
    if (!updatedAt) {
      return next();
    }

    const calc = Math.floor(
      (new Date() - updatedAt) / (ONE_MILLISECOND * ONE_MINUTE),
    );

    if (calc >= TARGET_TIME) {
      return next();
    }
    return res.redirect("/");
  } catch (err) {
    next(err);
  }
};
