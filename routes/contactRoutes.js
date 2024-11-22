const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Add a new contact
router.post("/", async (req, res) => {
  const { fullName, email, mobile, areaCity } = req.body;
  try {
    // Validate fields (can add more validations as necessary)
    if (!fullName || !email || !mobile || !areaCity) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create new contact and save to the database
    const newContact = new Contact({ fullName, email, mobile, areaCity });
    const savedContact = await newContact.save();
    
    // Return the saved contact object
    res.status(201).json(savedContact);
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to save contact" });
  }
});


// GET: Fetch all contact form submissions
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contact form data:", error);
    res.status(500).json({ error: "Failed to fetch contact form data" });
  }
});

module.exports = router;
