const Note = require("../models/note-modal");

const createNote = async (req, res) => {
  const { title, content, isPinned } = req.body;

  try {
    console.log(title, content);

    const saveNote = await Note.create({
      title,
      content,
      isPinned,
    });

    res
      .status(200)
      .json({ message: "Note successfully created", note: saveNote });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error while creating note" });
  }
};

// Get User notes
const getNote = async (req, res) => {
  try {
    const getUserNote = await Note.find({});

    res.status(200).json({ Data: getUserNote });
  } catch (error) {
    res.status(400).json({ message: "Error while fetching notes" });
  }
};

const updateNote = (req, res) => {
  try {
    res.status(200).json({ message: req.body });
  } catch (error) {}
};

const deleteNote = (req, res) => {
  try {
    res.status(200).json({ message: req.body });
  } catch (error) {}
};

module.exports = { createNote, getNote, updateNote, deleteNote };
