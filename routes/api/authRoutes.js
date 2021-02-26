const router = require("express").Router();
const User = require("../../models/user")
const passport = require("passport");


router.post('/api/signup', function (req, res) {
  console.log(`${req.body.username} ${req.body.password}`);
  User.register(new User({ username: req.body.username }), req.body.password,
    function (err, newUser) {
      if (err) console.log(err);
      passport.authenticate('local')(req, res, function () {
        res.send(newUser);
      });
    }
  )
});

router.get('/api/isauthenticated', function (req, res) {
  console.log(req.user);
  // passport adds this to the request object
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else
     res.send("Not Authorized");
});

router.post('/api/login', passport.authenticate('local'), function (req, res) {
  console.log(JSON.stringify(req.user));
  res.send(req.user);
});


router.get('/api/logout', function (req, res) {
  req.logout();
  res.send("Logout successful");
});

module.exports = router;
