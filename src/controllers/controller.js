const Note = require("../models/noteSchema")
const createNote = async (req, res) => {

  // 1. Create Note
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
// 2. Get notes
const getNotes = async (req, res) => {

  try {
    const notes = await Note.find()

    return res.status(200).json({
      message: "all Notes",
      notes: notes
    })

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: "Error fething notes"
    })


  }
}

// 2. Get id notes

const getNoteById = async (req, res) => {
  const id = req.params.id;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found"
      });

    }
    return res.status(200).json({
      message: "Single note fetched",
      note: note
    })

  } catch (err) {
    return res.status(500).json({ message: "Error fetching note" });
  }
}

// 3. Get id notes

const updateNote = async (req, res) => {
  const idse = req.params.id;
  try {
    const { title, content } = req.body;

    const notemila = await Note.findByIdAndUpdate(idse, { title, content },
      { new: true }
    );

    if (!notemila) {
      return res.status(404).json({ message: "Nai mila" });
    }
    return res.status(200).json({ message: "Mil gya", note: notemila })


  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" })
  }
}

// 4. Get delete notes

const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    const deletmila = await Note.findByIdAndDelete(id)
    if (!deletmila) {
      return res.status(404).json({ message: "nai mil raha" })
    }
    return res.status(200).json({ message: "Mil gya note delete krne ko", note: deletmila })

  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Server eror" })
  }


}

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};