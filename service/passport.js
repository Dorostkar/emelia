const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const config = require("../config/config");

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Access token: " + accessToken);
      console.log("Refresh Token: " + refreshToken);
      console.log("profile: " + JSON.stringify(profile));
    }
  )
);
