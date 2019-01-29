//============================================================
// Dependencies
//============================================================
const router = require("express").Router();
const petRoutes = require("./pets");
const reminderRoutes = require("./reminders");
const contactRoutes = require("./contacts");
//============================================================
// Pet Routes
//============================================================
router.use("/pets", petRoutes);
router.use("/reminders", reminderRoutes);
router.use("/contacts", contactRoutes);

module.exports = router; 
