const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  familyDescription: String,
  lovePets: Boolean,
  imageURL: String,
  matches: [
    {
      type: Schema.Types.ObjectId,
      ref: "userData",
    },
  ],
});

//use passport plugin
User.plugin(passportLocalMongoose);

//Export User module
module.exports = mongoose.model("userData", User, "userData");
