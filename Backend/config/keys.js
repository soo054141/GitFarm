import dotenv from "dotenv";

dotenv.config();

export default {
  mongoURI: process.env.mongoURI,
  secretOrKey: process.env.secretOrKey,
  expiresIn: process.env.expiresIn,
  cookieName: process.env.cookieName,
  GitHub: {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
  },
};
