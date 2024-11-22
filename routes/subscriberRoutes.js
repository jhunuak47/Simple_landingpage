//backend\routes\subscriberRoutes.js
const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// POST: Subscribe to the newsletter
router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    // Add new subscriber
    const newSubscriber = new Subscriber({ email });
    const savedSubscriber = await newSubscriber.save();
    res.status(201).json(savedSubscriber);
  } catch (error) {
    console.error("Error subscribing:", error.message);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

// GET: Fetch all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error.message);
    res.status(500).json({ error: "Failed to fetch subscribers" });
  }
});

module.exports = router;
