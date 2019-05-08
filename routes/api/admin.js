const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/admin/")
    .get(adminController.findAll)
    .post(adminController.create);

router.route("/admin/:id")
    .get(adminController.findById)
    .post(adminController.update)
    .delete(adminController.remove);

// router
//   .route("/admin")
//   .get(adminController.findAll)
//   .get(adminController.findById)
//   .post(adminController.update)
//   .delete(adminController.remove)

module.exports = router;