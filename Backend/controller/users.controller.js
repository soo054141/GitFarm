/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { User, Badge, Commit } from "../model/index.js";
import { getMemberDate, FindValueByKey } from "../services/index.js";
import { getUserObjectId } from "../utils/db.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getReposLanguage = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const result = await FindValueByKey(Commit, _id, "languages");
  ViewResponseJSON(res, true, "languages", result);
};

export const getMyPageController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  const total = await FindValueByKey(Commit, _id, "total");
  const totalScore = await FindValueByKey(Commit, _id, "totalScore");
  const continuous = await FindValueByKey(Commit, _id, "continuous");
  const memberDate = await getMemberDate(user);
  const result = { total, totalScore, continuous, memberDate };
  ViewResponseJSON(res, true, "mypage", result);
};

export const deleteUserController = async (req, res) => {
  const { user } = req;
  const _id = await getUserObjectId(user);
  try {
    await User.findByIdAndDelete(_id);
    await Badge.findByIdAndDelete(_id);
    await Commit.findByIdAndDelete(_id);
    res.status(201).clearCookie("token").json({
      success: true,
      message: "success deleted",
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Bad Request",
    });
  }
};
