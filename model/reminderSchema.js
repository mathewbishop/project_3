//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
//============================================================
// Reference to Mongoose Schema constructor
//============================================================
const Schema = mongoose.Schema;
//============================================================
// Reminder Schema 
//============================================================
const reminderSchema = new Schema({
    taskName: String,
    taskNotes: String
})

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = Reminder;