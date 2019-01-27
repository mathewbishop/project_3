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
// Contact Schema 
//============================================================
const contactSchema = new Schema({
    contactName: String,
    phoneNumber: String,
    category: String,
    userID: { type: Schema.Types.ObjectId, ref: "PetProfile" }
})


const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;