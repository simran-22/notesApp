const express = require('express');
const router = express.Router();

const {
  createNote
  // getNotes,
  // getNotesById,
  // updateNote,
  // deleteNote
} = require("../controllers/controller.js")

router.post("/notes", createNote)

// router.get("./notes", getNotes)

// router.get("./notes", getNotesById)

// router.put("./notes", updateNote)

// router.delete("./notes", deleteNote)

module.exports = router;