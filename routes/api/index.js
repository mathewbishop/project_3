//============================================================
// Dependencies
//============================================================
<<<<<<< HEAD
// module.exports = {
//     Pet: require("./pet")
//   };

const router = require("express").Router();
const petRoutes = require("./pets");

// Book routes
router.use("/pets", petRoutes);

module.exports = router;
=======
const router = require("express").Router();
const petRoutes = require("./pets");
//============================================================
// Pet Routes
//============================================================
router.use("/pets", petRoutes);

module.exports = router; 
>>>>>>> d1939827e5de7375784187bec6e8d49220c0d7e5
