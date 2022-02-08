/* eslint-disable import/extensions */
import GitHub from "passport-github2";
import keys from "../../config/keys.js";
import { User } from "../../model/index.js";

const GitHubStrategy = GitHub.Strategy;
const { clientID, clientSecret, callbackURL } = keys.GitHub;

const config = {
  clientID,
  clientSecret,
  callbackURL,
};

export default new GitHubStrategy(
  config,
  async (accessToken, refreshToken, profile, done) => {
    const { username } = profile;
    // eslint-disable-next-line no-underscore-dangle
    const { id, email } = profile._json;

    const findUser = await User.findOne({ id });
    console.log("findUser", findUser);
    if (!findUser) {
      const newUser = new User({
        id,
        email,
        username,
        accessToken,
      });

      newUser.save();
      return done(null, newUser);
    }
    return done(null, findUser);
  },
);
