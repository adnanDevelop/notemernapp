require("dotenv").config();
const express = require("express");
const router = require("./routes/auth-route");
const dbConnection = require("./database/db");
const errorMiddleware = require("./middleware/errorMIddleware");
const app = express();

app.use(express.json());
app.use("/api", router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  dbConnection();
  console.log("Server is running at port no:", PORT);
});
