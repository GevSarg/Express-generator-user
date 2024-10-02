const fs = require("fs");
const path = require("path");

function readFile(req, res, next) {
  fs.readFile(path.join(__dirname, "../db/users.json"), "utf8", (err, data) => {
    if (err) {
      return next(err);
    }

    try {
      res.locals.users = JSON.parse(data);
      next();
    } catch (parseError) {
      next(parseError);
    }
  });
}

module.exports = readFile;
