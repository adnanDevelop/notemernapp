const mongoose = require("mongoose");
const URI = process.env.MONGODB_URL;

const dbConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected with mongodb");
  } catch (error) {
    console.log("Error while connecting with mongodb:", error);
  }
};

module.exports = dbConnection;
