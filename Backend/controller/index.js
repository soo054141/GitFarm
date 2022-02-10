/* eslint-disable import/prefer-default-export */
export const ViewResponseJSON = (res, success, message) => {
  res.json({
    success,
    message,
  });
};
