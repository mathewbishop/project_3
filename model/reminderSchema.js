//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
const PetProfile = require("./petProfileSchema");
//============================================================
// Reference to Mongoose Schema constructor
//============================================================
const Schema = mongoose.Schema;
//============================================================
// Reminder Schema 
//============================================================
const reminderSchema = new Schema({
    reminder: String,
    date: String,
    userID: { type: Schema.Types.ObjectId, ref: PetProfile }
})

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = Reminder;