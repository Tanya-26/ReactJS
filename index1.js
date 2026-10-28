const express = require("express");
// formik(middelware), CORS, Helmet-> prevent XSS(attack)
// middelware: Special method in node js In which we have min 3 methods namely req, res, next
// const multer = require("multer");
// Transpiler - Babel
// React is client side
// Internet: Networks of Networks (Decenteralised Networks) because no one manages internet
const app = express();
const path = require("path")
// const output = multer();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname,"/public")))
// app.use(express.static("public"));
const router = require("./routes/myroutes")
app.use("/mcp",router)
app.listen(3001, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log("Running server on: http://127.0.0.1:3001");
});
