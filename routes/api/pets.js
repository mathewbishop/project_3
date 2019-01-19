const router = require("express").Router();
const petController = require("../../controllers/petController");

// Matches with "/api/pets"
router.route("/")
  .get(petController.findAll)
  


  module.exports = router;
