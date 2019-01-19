//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
//============================================================
// Seed
//============================================================

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/petDB"
);

const petProfileSeed = [
    {
        petName: "Tucker",
        petBirthday: 07-31-2008,
        petType: "Dog",
        breed: "Mix",
        color: "Black",
        markings: "",
        weight: 30,
        foodBrand: "Nature's Recipe",
        microchipNumber: null,
        rabiesTagNumber: 23438,
        insurance: null,
        medication: "Heartguard, Flea and Tick",
        allergies: "Seasonal",
        careNotes: ""
    },
    {
        petName: "Jake",
        petBirthday: 08-01-2008,
        petType: "Dog",
        breed: "Silky Terrier",
        color: "Gray",
        markings: "",
        weight: 20,
        foodBrand: "Nature's Recipe",
        microchipNumber: null,
        rabiesTagNumber: 22960,
        insurance: null,
        medication: "Heartguard, Flea and Tick",
        allergies: "",
        careNotes: "Separation anxiety."
    }
];

db.petDB
  .remove({})
  .then(() => db.petDB.collection.insertMany(petProfileSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });