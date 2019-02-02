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
            .find({ user: "" })
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
        db.Reminder
            .create(req.body)
            .then(dbReminder => db.PetProfile.updateMany({}, { $push: { reminders: dbReminder._id }}, { new: true }))
            .then(dbPetProfile => res.json(dbPetProfile))
            .catch(err => res.status(422).json(err))
    },
    getReminders: function(req, res) {
        db.PetProfile
            .find({})
            .populate("reminders")
            .then(dbPetProfile => res.json(dbPetProfile))
            .catch(err => res.json(err))
    },
    saveContact: function(req, res) {
        db.Contact
            .create(req.body)
            .then(dbContact => db.PetProfile.updateMany({}, { $push: { contacts: dbContact._id }}, { new: true }))
            .then(dbPetProfile => res.json(dbPetProfile))
            .catch(err => res.status(422).json(err))
    },
    getContacts: function(req, res) {
        db.PetProfile
            .find({})
            .populate("contacts")
            .then(dbPetProfile => {
                res.json(dbPetProfile)
            })
            .catch(err => res.json(err))
    }
}