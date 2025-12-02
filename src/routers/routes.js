const express = require('express');
const router = express.Router();

const {
  createNote,
  getNotes,
  getNoteById
  // updateNote,
  // deleteNote
} = require("../controllers/controller.js")

router.post("/notes", createNote)

router.get("/notes", getNotes)

router.get("/notes/:id", getNoteById)

// router.put("./notes", updateNote)

// router.delete("./notes", deleteNote)

module.exports = router;