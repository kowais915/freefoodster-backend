const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

//* router
const mealsRouter = require('./routes/mealsRouter');

require('dotenv').config();
PORT = process.env.PORT || 8000;



const app = express();
app.use(cors())

app.use(express.json())
app.use(cors())

//* conntecting to mongodb
mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log("Successfully connected to MongoDB.");
    app.listen(PORT, ()=>{
      console.log(`Listening on ${PORT}`);
    })
  })



app.get("/", (req, res)=>{
    res.json({msg: "Welcome to the FreeFoodster API"})
})


// routes
app.use("/api/meals", mealsRouter);