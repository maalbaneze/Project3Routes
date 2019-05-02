const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .post(userController.create)

router
  .route("/:id")
  .get(userController.findById)
  .post(userController.update)
  .delete(userController.remove)

router
  .route("/admin")
  .get(userController.findAll);


module.exports = router;
