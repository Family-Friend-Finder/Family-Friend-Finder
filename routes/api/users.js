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

module.exports = router;
