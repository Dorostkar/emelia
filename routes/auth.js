const express = require("express");
const passport = require("passport");

var router = express.Router();

router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/callback", passport.authenticate("google")); //the callback function in the passport config will run

module.exports = router;
