const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express js GET!");
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

app.get("/product/:id/:name", (req, res) => {
  const pid = req.params.id;
  const name = req.params.name;
  res.send(`Product ID: ${pid} <br> Product Name: ${name}`);
});

app.listen(3000, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log("Running server on: http://127.0.0.1:3000");
});