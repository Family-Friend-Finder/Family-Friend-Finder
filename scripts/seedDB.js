const mongoose = require("mongoose");
const db = require("../models");

// This file adds seed data for the family finder app

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/familyfriendfinder");

// const userSeed = [
//   {
//     thumbnail: "http://img.recipepuppy.com/34541.jpg",
//     href:
//       "http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805",
//     ingredients: [
//       "bread flour",
//       "yeast",
//       "olive oil",
//       "salt",
//       "sugar",
//       "water",
//     ],
//     title: "Easy Peezy Pizza Dough (Bread Machine Pizza Dough) ",
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
