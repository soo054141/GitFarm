/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { setDefaultBadge } from "../services/badge.service.js";
import { getBadge, setBadge } from "../services/index.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getBadgeController = async (req, res) => {
  try {
    const result = await getBadge(req);
    ViewResponseJSON(res, true, "badge", result);
  } catch (err) {
    const result = await setDefaultBadge(req);
    ViewResponseJSON(res, false, "badge", result);
  }
};

export const postBadgeController = async (req, res) => {
  try {
    const { badge } = req.body;
    const newBadge = JSON.parse(badge);
    await setBadge(req);
    res.status(201).json({
      success: true,
      badge: newBadge,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      success: false,
      message: "Bad Request",
    });
  }
};
