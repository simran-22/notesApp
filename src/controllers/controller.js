const Note = require("../models/noteSchema")
const createNote = async (req, res) => {


  const { title, content } = req.body;
  try {
    const newNote = await Note.create({
      title,
      content
    })
    return res.status(201).json({
      message: "Note Created",
      note: newNote
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error created" })
  }
};













// const getNotesById = (req, res) => {
//   res.send("Get Notes ById Called")
// }

// const updateNote = (req, res) => {
//   res.send("Update Note called")
// }

// const deleteNote = (req, res) => {
//   res.send("Delete Note called")
// }



module.exports = {
  createNote
  // getNoteById,
  // updateNote,
  // deleteNote
};