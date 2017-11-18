require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const config = require("./config/config");
require("./service/passport"); // cuz we didnt export anything, so by this line we just telling to node to just run this module
const auth = require("./routes/auth");
const app = express();

//setup Database

//config out router
app.use("/auth/google", auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

const PORT = process.env.PORT || 5000; //Heroku  set the port for us
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
