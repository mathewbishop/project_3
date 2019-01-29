//============================================================
// Dependencies
//============================================================
const router = require("express").Router();
const petRoutes = require("./pets");
const reminderRoutes = require("./reminders");
//============================================================
// Pet Routes
//============================================================
router.use("/pets", petRoutes);
router.use("/reminders", reminderRoutes);

module.exports = router; 
