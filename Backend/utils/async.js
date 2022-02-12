/* eslint-disable import/prefer-default-export */
export const getFulfilledValue = async (asyncList) => {
  const status = await Promise.allSettled(asyncList);

  const fulfilledValue = await status
    .filter((result) => result.status === "fulfilled")
    .map((item) => item.value);
  return fulfilledValue;
};
