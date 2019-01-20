//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
const db = require("../model");
//============================================================
// Pet Controller
//============================================================
module.exports = {
    findAll: function(req, res) {
        db.PetProfile
            .find({ user: "mattyb" })
            .then(dbModel => res.json(dbModel))
            // .then(dbModel => console.log(dbModel))
            .catch(err => res.status(422).json(err))
    }
}