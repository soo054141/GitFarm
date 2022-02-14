/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
export const ViewResponseJSON = (res, isSuccess, key, value) => {
  const config = {};
  config.success = isSuccess;
  config[key] = value;
  res.json(config);
};

export { getBadgeController, postBadgeController } from "./badge.controller.js";
export { getGoalController, postGoalController } from "./goal.controller.js";
export {
  getLevelsController,
  getLevelsCommitsController,
  getLevelsIssuesController,
  getLevelsPullsController,
} from "./levels.controller.js";
export {
  getReposTotalCommitsController,
  getCommitsTodayController,
  getCommitsTodayDetailController,
  getReposLanguage,
  getCommitsTotalPerYearController,
  getCommitsTotalPerDayController,
  getCommitsTotalRecentYearController,
  getCommitsContinuousController,
  getMyPageController,
} from "./users.controller.js";
export { getRankController } from "./rank.controller.js";
export {
  getResolutionController,
  postResolutionController,
} from "./resolution.controller.js";
