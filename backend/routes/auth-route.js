const express = require("express");
const authController = require("../controllers/auth-controller");
const router = express.Router();

router.route("/register").post(authController.register);
router.route("/get").get(authController.getData);

module.exports = router;
