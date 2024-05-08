const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note-conroller");
const verifyTokenMiddleware = require("../middleware/verifyTokenMiddleware");

router.route("/getnote").get(noteController.getNote);
router.route("/createnote").post(noteController.createNote);
router.route("/update-note").get(noteController.updateNote);
router
  .route("/delete-note")
  .get(verifyTokenMiddleware, noteController.deleteNote);

module.exports = router;
