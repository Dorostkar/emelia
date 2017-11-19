require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const config = require("./config/config");
require("./service/passport"); // cuz we didnt export anything, so by this line we just telling to node to just run this module
require("./models/user");
const auth = require("./routes/auth");
const user = require("./routes/user");

const app = express();

//Passport-step7
app.use(
  cookieSession({
    // maxAge get millisecond
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookie.cookieKey]
  })
);
//passport-step8
app.use(passport.initialize());
app.use(passport.session());

//setup Database
mongoose.connect(
  `mongodb://${config.db.username}:${config.db.password}@${config.db
    .url}/${config.db.name}`
);
//config out router
app.use("/auth", auth);
app.use("/api/users", user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  res.send("This page you are looking for is not exist");
});

const PORT = process.env.PORT || 5000; //Heroku  set the port for us
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
