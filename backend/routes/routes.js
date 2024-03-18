// routes.js
// Import required modules
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userData = require("../models/userData");
// Create a Mongoose model

// POST endpoint for saving data
router.post("/save", async (req, res) => {
  try {
    // Extract data from the request body
    const { predicted_category, points_earned, username, date } = req.body;

    // Create a new document using the Mongoose model
    const newData = new userData({
      predicted_category,
      points_earned,
      username,
      date,
    });

    // Save the document to MongoDB
    await newData.save();

    // Respond with success message
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Export the router
const { getUserData } = require("../controllers/userData");

router.get("/userData", getUserData);
module.exports = router;
