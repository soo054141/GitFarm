/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
export const FindByIdAndUpdate = async (Model, _id, key, value) => {
  const config = {};
  config.author = _id;
  config[key] = value;
  const dbUpdate = await Model.findByIdAndUpdate(
    _id,
    {
      $set: config,
    },
    { upsert: true },
  ).populate({ path: "author" });

  return dbUpdate;
};

export const FindValueByKey = async (Model, _id, key) => {
  const [document] = await Model.find({ id: _id });
  return document[key];
};
