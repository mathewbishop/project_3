//============================================================
// Dependencies
//============================================================
const express = require("express");
const path = require("path");
const app = express();
const baseRoutes = require("./controller/index");
//============================================================
// PORT 
//============================================================
const PORT = process.env.PORT || 3001;
//============================================================
// Middleware
//============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(baseRoutes)
//============================================================
// Serve up static assets (Heroku Deployment Essential)
//============================================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//============================================================
// Send every other request to the React app
//============================================================
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//============================================================
// Listener
//============================================================
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
