require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const ContactModel = require("./models/Contact");

const app = express();

// Middleware
app.use(express.json());
app.use(helmet()); // Security headers
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100, // limit each IP to 100 requests
  })
);

// CORS - allow only your frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL, 
};
app.use(cors(corsOptions));

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.post("/Contact", async (req, res) => {
  try {
    const contact = await ContactModel.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    console.error("Error creating contact:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/Contact", async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
