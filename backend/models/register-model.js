const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerModel = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: new Date().getTime(),
  },
});

// Secure the password with bcrypt
registerModel.pre("save", async function (next) {
  try {
    const user = this;
    const saltRound = 10;
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
    console.log("Error while hashing password in register model", error);
  }
});

registerModel.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        user: this,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15d",
      }
    );
  } catch (error) {
    console.log("Error while generating token", error);
  }
};

const User = new model("User", registerModel);
module.exports = User;
