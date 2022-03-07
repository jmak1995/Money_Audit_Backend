const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies.user;

  if (!token) {
    res.status(401).json("login");
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_KEY);

    // user -> { email: 'julian@google.com }
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json("login");
    console.log(error);
  }
};
