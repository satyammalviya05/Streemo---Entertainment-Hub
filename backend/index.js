const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const uploadRoutes = require("./routes/upload");

const app = express();


app.use("/api/upload", uploadRoutes);








app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
