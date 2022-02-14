/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { fillZeroMonth, getMonthCalendar } from "../../utils/date.js";
import { BADGE_LENGTH, RECENT_YEAR, YEAR_LENGTH } from "../../utils/model.js";

const currentMonth = fillZeroMonth;
export const BADGE = Array.from({ length: BADGE_LENGTH }, () => false);
export const ZERO = 0;
export const GOAL = 5;
export const RECENT = Array.from({ length: RECENT_YEAR }, () => []);
export const TODAY_DETAIL = [
  { info: { name: "", repo: "" }, data: [{ date: "", message: "" }] },
];
export const COMMIT_PER_YEAR = Array.from({ length: YEAR_LENGTH }, () => 0);
export const MONTH = getMonthCalendar(currentMonth);
export const LANGUAGES = [{ repo: "", language: "" }];
