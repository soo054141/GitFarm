/* eslint-disable import/extensions */
import JWT from "passport-jwt";
import httpError from "http-errors";
import keys from "../../config/keys.js";
import { User } from "../../model/index.js";

const JWTStrategy = JWT.Strategy;

const config = {
  jwtFromRequest: (req) => req.cookies.token,
  secretOrKey: keys.secretOrKey,
};

// eslint-disable-next-line consistent-return
export default new JWTStrategy(config, async (jwtPayload, done) => {
  try {
    const { id } = jwtPayload.data;
    const findUser = await User.findOne({ id });

    if (!findUser) return done(httpError(401).message);
    return done(null, findUser);
  } catch (err) {
    done(err);
  }
});
