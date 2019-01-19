//============================================================
// Dependencies
//============================================================
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const dataTest = require("./model/testSeed");
//============================================================
// PORT
//============================================================
const PORT = process.env.PORT || 3001;
//============================================================
// Middleware
//============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
//============================================================
// Serve up static assets (Heroku Deployment Essential)
//============================================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//============================================================
// Routes
//============================================================
app.use(routes)
//============================================================
// Test
//============================================================

//============================================================
// Listener
//============================================================
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
