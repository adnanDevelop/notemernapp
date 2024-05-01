const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const registerValidation = require("../validator/auth-validator");
const validator = require("../middleware/validator");
const verifyTokenMiddleware = require("../middleware/verifyTokenMiddleware");

router
  .route("/register")
  .post(validator(registerValidation), authController.register);
router.route("/login").post(authController.login);
router.route("/user").get(verifyTokenMiddleware, authController.getUser);

module.exports = router;
