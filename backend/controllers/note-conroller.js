const Note = require("../models/note-modal");

// Create note api
const createNote = async (req, res) => {
  const { title, content, isPinned, userId } = req.body;

  try {
    const saveNote = await Note.create({
      title,
      content,
      isPinned,
      userId,
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

// Update note api
const updateNote = (req, res) => {
  try {
    res.status(200).json({ message: req.body });
  } catch (error) {}
};

// Delete note api
const deleteNote = (req, res) => {
  try {
    res.status(200).json({ message: req.body });
  } catch (error) {}
};

module.exports = { createNote, getNote, updateNote, deleteNote };
