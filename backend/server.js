require("dotenv").config();
const express = require("express");
const router = require("./routes/auth-route");
const dbConnection = require("./database/db");
// const cores = require("cores");
const app = express();

// app.use(cores());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  dbConnection();
  console.log("Server is running at port no 4000");
});
