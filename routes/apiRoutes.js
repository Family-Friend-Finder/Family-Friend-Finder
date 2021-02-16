const router = require("express").Router();
const User = require("../models/user")
const passport = require("passport");


router.post('/signup', function signup(req, res) {
  console.log(`${req.body.username} ${req.body.password}`);
  User.register(new User({ username: req.body.username }), req.body.password,
    function (err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.send(newUser);
      });
    }
  )});

router.post('/login', passport.authenticate('local'), function (req, res) {
  console.log(JSON.stringify(req.user));
  res.send(req.user);
});

router.get('/logout', function (req, res) {
  console.log("BEFORE logout", req);
  req.logout();
  res.send(req);
  console.log("AFTER logout", req);
});

module.exports = router;
