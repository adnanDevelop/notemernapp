const User = require("../models/register-model");
const bcrypt = require("bcrypt");

const getData = async (req, res) => {
  res.json({ message: "working" });
};

// Register Route
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

//Login Router
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user exit
    const userExit = await User.findOne({ email });
    if (!userExit) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Comparing user password
    const userPassword = await bcrypt.compare(password, userExit.password);

    if (userPassword) {
      res.status(200).json({
        message: "Login successfull",
        user: userExit,
        token: await userExit.generateToken(),
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
    console.log("Error while login user", error);
  }
};

module.exports = { register, getData, login };
