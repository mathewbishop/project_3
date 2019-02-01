//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
//============================================================
// Reference to Mongoose Schema constructor
//============================================================
const Schema = mongoose.Schema;
//============================================================
// Contact Schema 
//============================================================
const contactSchema = new Schema({
    contactName: String,
    phoneNumber: String,
    contactCategory: String,
    contactWebsite: String
})


const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;