const router = require("express").Router();
const User = require("../models/user")
const passport = require("passport");


router.post('/api/signup', function (req, res) {
  console.log(`${req.body.username} ${req.body.password}`);
  User.register(new User({ username: req.body.username }), req.body.password,
    function (err, newUser) {
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

// router.post('/api/login', function (req, res) {
//   console.log(req.body);
// });
// router.get('/api/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { res.send(next(err)); }
//     if (!user) { res.send("incorrect username or password"); }
//     req.logIn(user, function(err) {
//       if (err) { res.send(next(err)); }
//       return res.send(user);
//     });
//   })(req, res, next);
// });

router.get('/api/logout', function (req, res) {
  console.log("BEFORE logout", req);
  req.logout();
  res.send(req);
  console.log("AFTER logout", req);
});

module.exports = router;
