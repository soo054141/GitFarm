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
export const startTime = "T00:00:00Z";
export const endTime = "T23:59:59Z";
export const todaySince = `${today}${startTime}`;
export const todayUntil = `${today}${endTime}`;

function fillZero(target, targetLenth, padString) {
  const str = target.toString();
  return str.padStart(targetLenth, padString);
}
