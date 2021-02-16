const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String
});

//use passport plugin
User.plugin(passportLocalMongoose);

//Export User module
module.exports = mongoose.model('userData', User, 'userData');

