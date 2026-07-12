const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
require("dotenv").config();

app.use(cors());

//this is used for converting raw data into json format
app.use(express.json());

// Register Routes
app.use("/", taskRoutes);

// MongoDB Connection

connectDB();

app.listen(process.env.PORT, () => {
    console.log("🚀 Server is running on port 3000");
});