const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/user.js");
const apiRoutes = require("./routes/api/authRoutes");
const userRoutes = require("./routes/api");
const mongoose = require("mongoose");

//Create Express application
const app = express();

// Connect to the database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/familyfriendfinder",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//to config API to use body body-parser and look for JSON in req.body
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(cookieParser());

// Configure Sessions Middleware
app.use(
  session({
    genid: function (req) {
      return uuidv4();

  },
  secret: 'SuperSecretKey',
  resave:false,
  saveUninitialized: true,
  cookie: {maxAge: 60 * 60 * 1000} // 60 mins
}));

app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passport Local Strategy
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(apiRoutes);
app.use(userRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
