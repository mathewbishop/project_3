//============================================================
// Dependencies
//============================================================
const PetProfile = require("../model/petProfileSchema");
//============================================================
// Seed
//============================================================

const petProfileSeed = [
    {
        user: "mattyb",
        petName: "Tucker",
        petBirthday: "2008-07-31",
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
        careNotes: "",
        date: new Date(Date.now())
    },
    {
        user: "mattyb",
        petName: "Jake",
        petBirthday: "2008-08-01",
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
        careNotes: "Separation anxiety.",
        date: new Date(Date.now())
    }
];

function dataTest() {
    let testProfile = new PetProfile(petProfileSeed[0])

    testProfile.save((err) => {
        if (err) return console.log(err);
        else { console.log("Data successfully submitted.") }
    })
}

// PetProfile
//   .remove({})
//   .then(() => PetProfile.collection.insertMany(petProfileSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });


module.exports = dataTest;
