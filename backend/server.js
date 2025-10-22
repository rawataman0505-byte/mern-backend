// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
const User = require("./models/userModel");
const userController = require("./controller/userController");
const dotenv = require("dotenv").config()

const app = express();
const port = process.env.PORT || 5001;

// ✅ Enable CORS
app.use(
  cors({
    origin: "*", // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!!!!!!!!!");
});

app.get("/read-users", userController.readUsers);
app.post("/create-user", userController.addUser);

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
