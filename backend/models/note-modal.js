const { Schema, model } = require("mongoose");

const noteModal = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  isPinned: {
    type: Boolean,
    require: true,
  },
  createdOn: {
    type: Date,
    default: new Date().getTime(),
  },
  userId: {
    type: String,
    require: true,
  },
});

const Note = new model("Note", noteModal);

module.exports = Note;
