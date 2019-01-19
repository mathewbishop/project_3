//============================================================
// Dependencies
//============================================================
const PetProfile = require("./petProfileSchema");
//============================================================
// Seed
//============================================================
const petProfileSeed = [
    {
        user: "mattyb",
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
        user: "mattyb",
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

function dataTest() {
    let testProfile = new PetProfile(petProfileSeed[0])

    testProfile.save((err) => {
        if (err) return console.log(err);
        else { console.log("Data successfully submitted.") }
    })
}


module.exports = dataTest;