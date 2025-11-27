

const express = require('express');
const connectdb = require('./config/db');
const schema = require('./models/noteSchema');
const notesroute = require('./routers/routes');


const app = express()
app.use(express.json())


app.use('/', notesroute)
connectdb();




app.post('/', (req, res) => {
  res.send("Hello World")
})


app.listen(3000, () => {
  console.log("port successfull")
})
