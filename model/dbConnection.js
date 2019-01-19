//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
//============================================================
// MongoDB Connection
//============================================================
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/petDB";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
//============================================================
// Get Info On DB Connection
//============================================================
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database.")
});

module.exports = {
  MONGODB_URI,
  db
}