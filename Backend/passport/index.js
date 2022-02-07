/* eslint-disable import/extensions */
import GitHubOAuth from "./strategy/GitHub.js";
import JWTStrategy from "./strategy/jwt.js";

export default (passport) => {
  passport.use(GitHubOAuth);
  passport.use(JWTStrategy);
};
