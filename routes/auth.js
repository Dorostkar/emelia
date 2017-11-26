const express = require("express");
const passport = require("passport");

var router = express.Router();
//passport-step4
router.get(
  "/google/",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);
//passport-step5
router.get(
  "/google/callback",
  passport.authenticate("google"), //the callback function in the passport config will run
  (req, res) => {
    //after that callback finish we will redirect user to servey route (react)
    res.redirect("/surveys");
  }
);

//passport-step6
router.get("/logout/", (req, res) => {
  req.logout(); //it attached automaticly to request by passport.
  // res.send(req.user);
  res.redirect("/");
});
module.exports = router;
