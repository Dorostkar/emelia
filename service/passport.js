const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const config = require("../config/config").key;
const User = require("../models/user"); //with this fashion of importing we should face to any problem when we use test unit.

//step1
passport.use(
  //1.1
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true //trust to heroku proxy/it will fix google callback to http problem!
    },
    async (accessToken, refreshToken, profile, done) => {
      //1.2
      const userExist = await User.findOne({ googleId: profile.id });

      if (userExist) {
        //call done to tell to strategy we have done the process off authentication
        //we pass user to done() to after in serializeuser we can have it as a argument.
        return done(null, userExist);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

//step2
passport.serializeUser((user, done) => {
  done(null, user.id); //passing _id in user record
  //after serialize user  we need to put it in a cockie, so dont forget to install cookie-session
  //also do step4 and step5
});

//step3
passport.deserializeUser((id, done) => {
  //we get back the deserialized id , so we try to find it in out db,if it was there so pass it to done
  User.findById(id).then(user => {
    done(null, user);
  });
});
