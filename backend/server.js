require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth-route");
const noteRoutes = require("./routes/note-route");
const dbConnection = require("./database/db");
const errorMiddleware = require("./middleware/errorMIddleware");

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", noteRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  dbConnection();
  console.log("Server is running at port no:", PORT);
});
