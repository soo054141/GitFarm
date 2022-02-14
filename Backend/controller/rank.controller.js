/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { User } from "../model/index.js";

import { getMyRank, getUserRank, getDefaultRank } from "../services/index.js";

import { ViewResponseJSON } from "./index.js";

export const getRankController = async (req, res) => {
  const { user } = req;
  const { id } = user;
  const [{ _id }] = await User.find({ id });
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
