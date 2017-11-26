const express = require("express");
const router = express.Router();

router.get("/current_user", (req, res) => {
  //user has added to request by passport middleware
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;
