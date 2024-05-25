const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note-conroller");

router.route("/getnote").get(noteController.getNote);
router.route("/createnote").post(noteController.createNote);
router.route("/update-note").put(noteController.updateNote);
router.route("/delete-note").delete(noteController.deleteNote);

module.exports = router;
