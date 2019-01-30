//============================================================
// Dependencies
//============================================================
const router = require("express").Router();
const petController = require("../../controller/petController");
//============================================================
// Routes
//============================================================
router.route("/")
    .get(petController.getReminders)
    .post(petController.saveReminder)


module.exports = router;