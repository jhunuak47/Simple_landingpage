const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const Project = require("../models/Project");

const router = express.Router();

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory for cropping
const upload = multer({ storage });

// GET: Fetch all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// POST: Add a new project
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    // Define paths for cropped images
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
      .resize(450, 350) // Resize to 450x350
      .toFile(filePath);

    // Save project details to the database
    const newProject = new Project({
      name,
      description,
      image: `/uploads/${fileName}`, // Save relative path to the image
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error saving project:", error.message);
    res.status(500).json({ error: "Failed to add project" });
  }
});

// DELETE: Remove a project by ID
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Remove the image file from the server
    const imagePath = path.join(__dirname, "../public", project.image);
    const fs = require("fs");
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Delete the project from the database
    await project.deleteOne();
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error.message);
    res.status(500).json({ error: "Failed to delete project" });
  }
});

module.exports = router;
