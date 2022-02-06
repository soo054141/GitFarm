/* eslint-disable import/extensions */
import httpError from "http-errors";
import cookieExtractor from "../utils/cookie-extractor.js";

export default (req, res, next) => {
  const cookie = cookieExtractor(req);
  if (!cookie) {
    next(httpError(401).message);
    return;
  }
  next();
};
