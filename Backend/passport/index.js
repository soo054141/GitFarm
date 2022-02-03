/* eslint-disable import/extensions */
import GitHubOAuth from "./strategy/GitHub.js";

export default (passport) => {
  passport.use(GitHubOAuth);
};
