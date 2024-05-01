const jwt = require("jsonwebtoken");

const verifyTokenMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(400).json({ message: "Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();

  try {
    next();
    
  } catch (error) {
    return res.status(400).json({ message: "Unauthorized. Invalid  token" });
  }
};

module.exports = verifyTokenMiddleware;
