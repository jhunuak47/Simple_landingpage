const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (for uploaded images)
app.use("/uploads", express.static("public/uploads"));

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/subscribers", require("./routes/subscriberRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
