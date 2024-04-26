const User = require("../models/register-model");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exist
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      res.status(400).json({ message: "User already exist" });
    }

    const storeData = await User.create({
      name,
      email,
      password,
    });

    console.log(storeData);
    res.status(200).json({ message: storeData });
  } catch (error) {
    console.log("Error at register route", error);
    next(error);
  }
};

module.exports = { register };
