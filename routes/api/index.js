const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const mealRoutes = require("./meals");
const restaurantRoutes = require("./restaurants")

router.use("/users", userRoutes);
router.use("/meals", mealRoutes);
router.use("/restaurants", restaurantRoutes)


module.exports = router;
