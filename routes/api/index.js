// const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const mealRoutes = require("./meals");
const restaurantRoutes = require("./restaurants");
const adminRoutes = require("./admin");

router.use("/users", userRoutes);
router.use("/meals", mealRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/admin", adminRoutes)

module.exports = router;
