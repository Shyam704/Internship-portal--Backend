const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Atlas Connected Successfully");
    })
    .catch((error) => {
        console.error("MongoDB Connection Failed:");
        console.error(error.message);
    });

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "InternX Backend is Running 🚀"
    });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`InternX server running at http://localhost:${PORT}`);
});