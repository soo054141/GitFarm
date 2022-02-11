const dt = new Date();
export const year = dt.getFullYear();
export const month = dt.getMonth() + 1;
export const date = dt.getDate();
// eslint-disable-next-line no-use-before-define
export const today = `${year}-${fillZero(month, 2, "0")}-${fillZero(
  date,
  2,
  "0",
)}`;
export const startOfDay = "T00:00:00Z";
export const endOfDay = "T23:59:59Z";
export const todaySince = `${today}${startOfDay}`;
export const todayUntil = `${today}${endOfDay}`;
// NOTE: test때는 두번째 monthDays 사용하기(API rate limit 방지)
// export const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const monthDays = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export const monthPerYear = 12;

export function fillZero(target, targetLenth, padString) {
  const str = target.toString();
  return str.padStart(targetLenth, padString);
}
