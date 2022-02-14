/* eslint-disable import/prefer-default-export */
export const ViewResponseJSON = (res, isSuccess, key, value) => {
  const config = {};
  config.success = isSuccess;
  config[key] = value;
  res.json(config);
};
