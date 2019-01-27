//============================================================
// Dependencies
//============================================================
const db = require("../model");
//============================================================
// Pet Controller
//============================================================
module.exports = {
    findAll: function(req, res) {
        db.PetProfile
            .find({ user: "mattyb" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    saveOne: function(req, res) {
        db.PetProfile
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findContacts: function(req, res) {
        db.PetProfile
            .find({})
            .populate("contacts")
            .then(dbContacts => res.json(dbContacts))
            .catch(err => res.status(422).json(err))
    },
    findReminders: function(req, res) {
        db.PetProfile
            .find({})
            .populate("reminders")
            .then(dbReminders => res.json(dbReminders))
            .catch(err => res.status(422).json(err))
    }
}