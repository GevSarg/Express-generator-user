const e = require("express");

function checkBody(req, res, next) {
  let { fullname, email, password, birthDate } = req.body;

  if (fullname && email && password && birthDate) {
    res.locals.newUser = {
      fullname: fullname.trim(),
      email: email.toLowerCase(),
      password,
      birthDate,
    };
    next();
  } else {
    return res.status(422).json({ msg: "Invalid data format" });
  }
}

module.exports = checkBody;
