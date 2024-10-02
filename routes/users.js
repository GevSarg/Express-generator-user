var express = require("express");
var router = express.Router();

const readFile = require("../middleware/readFile.js");
const checkUser = require("../middleware/checkUser.js");

const title = "Users";

/* GET users listing. */
router.get("/", readFile, function (req, res, next) {
  res.render("users", { users: res.locals.users, title });
});

router.post("/", readFile, checkUser, (req, res) => {
  res.render("users", { users: res.locals.users, title });
});

module.exports = router;
