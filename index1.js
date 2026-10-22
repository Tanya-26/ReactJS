const express = require("express");
const multer = require("multer")
const app = express();
const output = multer()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Welcome to express js GET!");
});

app.get("/product", (req, res) => {
  const pid = req.body.pid;
  const pname = req.body.pname;
  res.status(200).json({
    pid,pname
  })
  console.log("Data inserted")
});
// (route, middelware, callback)
app.post("/product",output.none(), (req, res) => {
  const pid = req.body.pid;
  const pname = req.body.pname;
  res.status(200).json({
    pid,pname
  })
  console.log("Data inserted")
});
app.put("/", (req, res) => {
  res.send("Welcome to express js PUT!");
});

app.post("/", (req, res) => {
  res.send("Welcome to express js POST!");
});

app.delete("/", (req, res) => {
  res.send("Welcome to express js DELETE!");
});

app.get("/product/:id/:name", (req, res) => { // url parameter
  const pid = req.params.id;
  const name = req.params.name;
  res.send(`Product ID: ${pid} <br> Product Name: ${name}`);
});


app.get("/students", (req, res) => { //Query String parameter /sudent?sid=100&sname=rahul
  const pid = req.query.sid;
  const name = req.query.sname;
  res.send("Student ID:"+pid+"<br>Student Name:"+name);
});

app.listen(3000, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log("Running server on: http://127.0.0.1:3000");
});