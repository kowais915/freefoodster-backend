const express = require("express");
const app = express();

app.use(express.json())

app.listen(3001, ()=>{
  console.log("listening on port 3000");
});

app.get("/", (req, res)=>{
    res.json({msg: "Welcome to the FreeFoodster API"})
})