//============================================================
// Dependencies
//============================================================
const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");
//============================================================
// Reference/Pass API Routes
//============================================================
router.use("/api", apiRoutes);
//============================================================
// Default Route => Sends React App
//============================================================
router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;