function checkUser(req, res, next) {
  const { email, password } = req.body;

  const user = res.locals.users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.redirect("/users");
  } else {
    res
      .status(401)
      .json({ message: "Invalid email or password", success: false });
  }
}

module.exports = checkUser;
