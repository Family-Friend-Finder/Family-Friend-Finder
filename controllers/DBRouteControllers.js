const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updatematch: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id },
        {$addToSet: {matches:req.body.matchid}},
        {new: true, useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findmatches: function(req, res) {
    db.User
    .findOne({_id:req.params.id}).populate("matches")
    .exec(function(err, user) {
     if (err) {
       console.log(err);
       return res.status(422).json(err);
     }
     return res.json(user);
    });
  },
  removematch: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id },
        {$pull: {matches:req.body.matchid}},
        {new: true, useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};