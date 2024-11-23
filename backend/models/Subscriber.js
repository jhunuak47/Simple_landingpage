//C:\Users\hp\OneDrive\Desktop\project\backend\models\Subscriber.js
const mongoose = require("mongoose");

const SubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // Ensure email is unique
  subscribedAt: { type: Date, default: Date.now },       // Add default timestamp
});

module.exports = mongoose.model("Subscriber", SubscriberSchema);
