const User = require("../models/register-model");

const getData = async (req, res) => {
  res.json({ message: "working" });
};

// Register user route
const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exist
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      res.status(400).json({ message: "User already exist" });
    }

    // Store user data in database
    const storeData = await User.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      message: "Registration successfull",
      user: storeData,
      token: await storeData.generateToken(),
    });
  } catch (error) {
    console.log("Error at register route", error);
    next(error);
  }
};

module.exports = { register, getData };
