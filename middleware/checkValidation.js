const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

function checkValidation(req, res, next) {
  const newUser = res.locals.newUser;

  // Validate fullname
  if (newUser.fullname.length < 2) {
    return res
      .status(422)
      .json({ msg: "Full name must be at least 2 characters long." });
  }

  // Validate email
  if (!emailRegex.test(newUser.email)) {
    return res.status(422).json({ msg: "Invalid email format." });
  }

  // Validate password
  if (!passwordRegex.test(newUser.password)) {
    return res.status(422).json({
      msg: "Password must be at least 6 characters long and include both letters and numbers.",
    });
  }

  res.locals.newUser = req.body;
  next();
}

module.exports = checkValidation;
