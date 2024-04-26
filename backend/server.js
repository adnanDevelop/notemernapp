const express = require("express");
const router = require("./routes/auth-route");
const dbConnection = require("./database/db");
const app = express();

app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  dbConnection();
  console.log("Server is running at port no 4000");
});
