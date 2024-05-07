const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const authValidation = require("../validator/auth-validator");
const validator = require("../middleware/validator");
const verifyTokenMiddleware = require("../middleware/verifyTokenMiddleware");

router
  .route("/register")
  .post(validator(authValidation.registerValidation), authController.register);
router
  .route("/login")
  .post(validator(authValidation.loginValidation), authController.login);
router.route("/user").get(verifyTokenMiddleware, authController.getUser);

module.exports = router;
