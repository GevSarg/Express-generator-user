var express = require("express");
var router = express.Router();
const readFile = require("../middleware/readFile.js");
const writeFile = require("../middleware/writeFile.js");
const checkBody = require("../middleware/checkBody.js");
const checkValidation = require("../middleware/checkValidation.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login", { title: "Login Page" });
});

router.post(
  "/",
  readFile,
  checkBody,
  checkValidation,
  writeFile,
  (req, res) => {
    res.redirect("/login");
  }
);
module.exports = router;
