// @ts-nocheck
// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/auth-routes");
const ticketRoutes = require("./src/routes/api/ticket-routes");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
