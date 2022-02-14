/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { getBadge, getBadgeFromDB, setBadge } from "../services/index.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getBadgeController = async (req, res) => {
  try {
    const result = await getBadge(req);
    ViewResponseJSON(res, true, "badge", result);
  } catch (err) {
    const result = await getBadgeFromDB(req);
    ViewResponseJSON(res, false, "badge", result);
  }
};

export const postBadgeController = async (req, res) => {
  try {
    await setBadge(req);
    res.status(201).json({
      success: true,
      badge: req.body.badge,
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "Bad Request",
    });
  }
};
