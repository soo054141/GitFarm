import { TARGET_TIME, ONE_MILLISECOND, ONE_MINUTE } from "../utils/date.js";
import { Commit } from "../model/index.js";
import { getUpdatedAtById } from "../utils/db.js";

export default (app) => {
  // eslint-disable-next-line no-unused-vars
  app.use(async (err, req, res, next) => {
    const { user } = req;
    const updatedAt = await getUpdatedAtById(user, Commit);
    const calc = Math.floor(
      (new Date() - updatedAt) / (ONE_MILLISECOND * ONE_MINUTE),
    );
    if (calc >= TARGET_TIME) {
      next();
    }

    res.redirect("/");
  });
};
