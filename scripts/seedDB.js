const mongoose = require("mongoose");
const db = require("../models");

// This file adds seed data for the family finder app

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/familyfriendfinder"
);

// const userSeed = [
//   {
//     firstName: "Michael",
//     lasName: "O'brien",
//     phoneNumber: 555 - 555 - 5555,
//   },
// ];

// db.User.remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
