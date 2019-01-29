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
    saveReminder: function(req, res) {
        db.Reminder.create(req.body)
            .then(dbReminder => db.PetProfile.findOneAndUpdate({ user: "mattyb" }, { $push: { reminders: dbReminder._id }}, { new: true }))
            .then(dbPetProfile => res.json(dbPetProfile))
            .catch(err => res.status(422).json(err))
    }
}