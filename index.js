const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const config = require("./config/config");

const app = express();
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

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000; //Heroku  set the port for us
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
