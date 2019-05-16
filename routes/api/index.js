// const path = require("path");
const router = require("express").Router();
const loginRoutes = require("./login");
const userRoutes = require("./users");
const mealRoutes = require("./meals");
const restaurantRoutes = require("./restaurants");
const adminRoutes = require("./admin");

router.use("login", loginRoutes);
router.use("/users", userRoutes);
router.use("/meals", mealRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/admin", adminRoutes)

module.exports = router;
