/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { getGoal, setGoal } from "../services/index.js";
import { ViewResponseJSON } from "./view.controller.js";
import { GOAL } from "../model/default/index.js";

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
    res.status(201);
  } catch (err) {
    res.status(500);
  }
};
