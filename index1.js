const express = require("express");
const path = require("path");

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public1")));

const router = require("./routes/myroutes");
app.use("/mcp", router);

app.listen(port, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(`Running server on: http://127.0.0.1:${port}`);
});
