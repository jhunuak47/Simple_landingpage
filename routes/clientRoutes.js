const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const Client = require("../models/Client");

const router = express.Router();

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET: Fetch all clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch clients" });
  }
});

// POST: Add a new client
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, designation, description } = req.body;

    // Ensure an image is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const uploadDir = path.join(__dirname, "../public/uploads/");
    const fileName = `${Date.now()}-${req.file.originalname}`;
    const filePath = path.join(uploadDir, fileName);

    // Ensure the directory exists
    const fs = require("fs");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Crop the image to 450x350 and save
    await sharp(req.file.buffer)
      .resize(450, 350) // Cropping to a specific ratio
      .toFile(filePath);

    // Save client details to the database
    const newClient = new Client({
      name,
      designation,
      description,
      image: `/uploads/${fileName}`,
    });

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    console.error("Error saving client:", error.message);
    res.status(500).json({ error: "Failed to save client" });
  }
});

// DELETE: Remove a client
router.delete("/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    // Remove the image file from the server
    const imagePath = path.join(__dirname, "../public", client.image);
    const fs = require("fs");
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Delete the client from the database
    await client.deleteOne();
    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    console.error("Error deleting client:", error.message);
    res.status(500).json({ error: "Failed to delete client" });
  }
});

module.exports = router;
