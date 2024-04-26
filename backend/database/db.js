const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect();
    console.log("Connected with mongodb");
  } catch (error) {
    console.log("Error while connecting with mongodb:", error);
  }
};

module.exports = dbConnection;
