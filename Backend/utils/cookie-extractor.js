/* eslint-disable import/extensions */
import keys from "../config/keys.js";

const cookieExtractor = (req) => {
  const { cookieName } = keys;
  let token = null;
  if (req && req.cookies) token = req.cookies[cookieName];
  return token;
};

export default cookieExtractor;
