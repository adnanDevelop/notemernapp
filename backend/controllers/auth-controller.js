const bcrypt = require("bcrypt");
const User = require("../models/register-model");

// Register Route
const register = async (req, res, next) => {
  try {
    const { name, email, password, image } = req.body;

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

    console.log(req.body);

    res.status(200).json({
      message: "Registration successfull",
      user: storeData,
      token: await storeData.generateToken(),
    });
  } catch (error) {
    // console.log("Error at register route", error);
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
      return res.status(401).json({ message: "User not found" });
    }

    // Comparing user password
    const userPassword = await bcrypt.compare(password, userExit.password);

    if (userPassword) {
      res.status(200).json({
        message: "Login successfull",
        user: userExit,
        token: await userExit.generateToken(),
      });
    }
  } catch (error) {
    next(error);
    console.log("Error while login user", error);
  }
};

// Get User Data Router
const getUser = async (req, res, next) => {
  try {
    const userData = req.user;
    res.status(200).json({ message: userData });
  } catch (error) {
    next(error);
    console.log("Error while getting user data", error);
  }
};

module.exports = { register, login, getUser };
