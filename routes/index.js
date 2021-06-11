var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.cookie("foo", "bar", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    domain: "ngrok.io",
  });
  res.send("Set cookie " + Date.now());
});

module.exports = router;

// api.lodestar.cc -> vod.lodestar.cc
