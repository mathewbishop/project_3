//============================================================
// Dependencies
//============================================================
const router = require("express").Router();
const petController = require("../../controller/petController");
//============================================================
// Routes
//============================================================
router.route("/")
    .get(petController.findAll)
    .post(petController.saveOne)


module.exports = router;
