/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { getMyRank, getUserRank, getDefaultRank } from "../services/index.js";
import { getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getRankController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  try {
    const myRank = await getMyRank(_id);
    const userRank = await getUserRank();
    const result = {
      myRank,
      userRank,
    };
    ViewResponseJSON(res, true, "data", result);
  } catch (err) {
    const result = getDefaultRank();
    ViewResponseJSON(res, false, "data", result);
  }
};
