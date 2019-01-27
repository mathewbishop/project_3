//============================================================
// Dependencies
//============================================================
const router = require("express").Router();
const petController = require("../../controller/petController");
//============================================================
// Get Contacts for 'this' Profile
//============================================================ 
router.route("/")
    .get(petController.findContacts)


module.exports = router;