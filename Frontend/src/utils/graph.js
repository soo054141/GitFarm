export const toDay = new Date();

export const checkMonth = (date) => {
  const year = date.toISOString().slice(0, 4);
  const month = +date.toISOString().slice(5, 7);
  const thisMonth = +toDay.toISOString().slice(5, 7);
  return { year, month, thisMonth };
};
