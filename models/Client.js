//C:\Users\hp\OneDrive\Desktop\project\backend\models\Client.js
const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Client", ClientSchema);
