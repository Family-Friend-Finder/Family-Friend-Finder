const router = require("express").Router();
const UsersController = require("../../controllers/DBRouteControllers");

// Matches with "/api/users"
router.route("/")
  .get(UsersController.findAll)
  .post(UsersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(UsersController.findById)
  .put(UsersController.update)
  .delete(UsersController.remove);

// Matches with "/api/users/addmatch/:id"
router
  .route("/addmatch/:id")
  .put(UsersController.updatematch);

  // Matches with "/api/users/viewmatches/:id"
router
.route("/viewmatches/:id")
.get(UsersController.findmatches);

// Matches with "/api/users/addmatch/:id"
router
  .route("/removematch/:id")
  .put(UsersController.removematch);

module.exports = router;
