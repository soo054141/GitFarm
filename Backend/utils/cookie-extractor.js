/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
import keys from "../config/keys.js";

const cookieExtractor = (req) => {
  const isCookie = req.headers.cookie;
  if (!isCookie) return;

  const getCookie = isCookie.split(" ");
  const cookieName = new RegExp(keys.cookieName);

  const [, value] = getCookie
    .filter((cookie) => cookieName.test(cookie))
    .join()
    .split("=");

  return value;
};

export default cookieExtractor;
