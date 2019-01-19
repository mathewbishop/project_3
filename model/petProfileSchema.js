//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
//============================================================
// Reference to Mongoose Schema constructor
//============================================================
const Schema = mongoose.Schema;
//============================================================
// Article Schema 
//============================================================
const petProfileSchema = new Schema({
    petName: {
        type: String,
        trim: true
    },
    petBirthday: {
        type: Date
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
    }
})