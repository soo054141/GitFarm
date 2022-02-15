/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { GOAL } from "../model/default/index.js";
import { getGoal, setGoal } from "../services/index.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getGoalController = async (req, res) => {
  try {
    const result = await getGoal(req);
    ViewResponseJSON(res, true, "goal", result);
  } catch (err) {
    ViewResponseJSON(res, false, "goal", GOAL);
  }
};

export const postGoalController = async (req, res) => {
  try {
    await setGoal(req);
    res.status(201).json({
      success: true,
      goal: req.body.goal,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Bad Request",
    });
  }
};
