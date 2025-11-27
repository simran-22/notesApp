const mongoose = require('mongoose')

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://simranpreet3d:Simran123@cluster0.e2sl4.mongodb.net/project-1")
    console.log("DB connected");
  } catch (err) {
    console.error("issues")
  }
}

module.exports = connect