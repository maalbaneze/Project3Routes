const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/login/")
    .get(loginController.findAll)
    .post(loginController.create);

router.route("/login/:id")
    .get(loginController.findById)
    .post(loginController.update)
    .delete(loginController.remove);


module.exports = router;