/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getResolution, setResolution } from "../services/index.js";
import { ViewResponseJSON } from "./view.controller.js";

export const getResolutionController = async (req, res) => {
  try {
    const result = await getResolution(req);
    ViewResponseJSON(res, true, "resolution", result);
  } catch (err) {
    ViewResponseJSON(res, false, "resolution", "우주최강 개발자가 될거야!");
  }
};

export const postResolutionController = async (req, res) => {
  try {
    await setResolution(req);
    res.status(201).json({
      success: true,
      resolution: req.body.resolution,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Bad Request",
    });
  }
};
