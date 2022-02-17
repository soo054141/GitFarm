import dotenv from "dotenv";

dotenv.config();

export default {
  mongoURI: process.env.mongoURI,
  secretOrKey: process.env.secretOrKey,
  JWTexpiresIn: process.env.expiresIn,
  cookieMaxAge: process.env.maxAge,
  clientURL: process.env.CLIENT_URL,
  GitHub: {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
  },
};
