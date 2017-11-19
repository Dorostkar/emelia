const express = require("express");
const router = express.Router();

router.get("/current_user", (req, res) => {
  //user hass added to request by passport middleware
  res.send(req.user);
});

module.exports = router;
