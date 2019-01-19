//============================================================
// Dependencies
//============================================================
const router = require("express").Router();
const PetProfile = require("../../model/petProfileSchema");
//============================================================
// Get All Pets For 'this' User
//============================================================
router.route("/")
    .get(
        PetProfile.find()
            .then(pets => {
            res.json(pets)
        })
    )



module.exports = router;