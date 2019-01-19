//============================================================
// Dependencies
//============================================================
const router = require("express").Router();
const petController = require("../../controller/petController");
//============================================================
// Get All Pets For 'this' User
//============================================================
router.route("/")
    .get(petController.findAll)



module.exports = router;