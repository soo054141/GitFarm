export const sliceDate = (date) => {
  const year = +date.toISOString().slice(0, 4);
  const month = +date.toISOString().slice(5, 7);
  return { year, month };
};
