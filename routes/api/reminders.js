//============================================================
// Dependencies
//============================================================
const router = require("express").Router();
const petController = require("../../controller/petController");
//============================================================
// Get Reminders for 'this' Profile
//============================================================
router.route("/")
    .get(petController.findReminders)


module.exports = router;