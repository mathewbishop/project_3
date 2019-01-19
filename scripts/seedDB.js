const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/dog_db"
);

const petProfileSeed = [
    {
        name: "Nola",
        date: new Date(Date.now())
    }
];

db.dog_db
    .remove({})
    .then(() => db.PetProfile.collection.insertMany(petProfileSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
