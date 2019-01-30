//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
//============================================================
// Reference to Mongoose Schema constructor
//============================================================
const Schema = mongoose.Schema;
//============================================================
// PetProfile Schema 
//============================================================
const petProfileSchema = new Schema({
    user: {
        type: String,
        trim: true
    },
    petName: {
        type: String,
        trim: true
    },
    petBirthday: {
        type: String
    },
    petType: {
        type: String,
        trim: true
    },
    breed: {
        type: String,
        trim: true
    },
    color: {
        type: String,
        trim: true
    },
    markings: {
        type: String,
        trim: true
    },
    weight: {
        type: Number
    },
    foodBrand: {
        type: String,
        trim: true
    },
    microchipNumber: {
        type: Number
    },
    rabiesTagNumber: {
        type: Number
    },
    insurance: {
        type: String,
        trim: true
    },
    medication: {
        type: String
    },
    allergies: {
        type: String
    },
    careNotes: {
        type: String
    },
    addedDate: {
        type: Date
    },
    reminders: [{ type: Schema.Types.ObjectId, ref: "Reminder" }],
    contacts: [{ type: Schema.Types.ObjectId, ref: "Contact" }]
})

const PetProfile = mongoose.model("PetProfile", petProfileSchema);

module.exports = PetProfile;
