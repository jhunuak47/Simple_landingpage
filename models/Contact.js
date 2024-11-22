// backend/models/Contact.js
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  areaCity: { type: String, required: true }, // Ensure this field matches with the frontend
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", ContactSchema);

