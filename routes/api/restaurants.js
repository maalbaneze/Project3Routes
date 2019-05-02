const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantController");

router.route("/")
    .get(restaurantController.findAll)
    .post(restaurantController.create);

router
    .route("/:id")
    .get(restaurantController.findById)
    .post(restaurantController.update)
    .delete(restaurantController.remove);

module.exports = router;
