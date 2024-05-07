const jwt = require("jsonwebtoken");
const User = require("../models/register-model");

const verifyTokenMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(400).json({ message: "Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const verfiyUser = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({
      email: verfiyUser.user.email,
    }).select({ password: 0 });

    req.user = userData;
    req.token = token;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid  token" });
  }
};

module.exports = verifyTokenMiddleware;
