const fs = require("fs");
const path = require("path");

function writeFile(req, res, next) {
  const newUser = res.locals.newUser;
  const users = res.locals.users;

  users.push(newUser);

  fs.writeFile(
    path.join(__dirname, "../db/users.json"),
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        return next(err);
      }
      next();
    }
  );
}

module.exports = writeFile;
