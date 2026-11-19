
const express = require("express");
const router = express.Router();

const logger = (req, res, next) => {
  console.log(
    `Login with method: ${req.method}, with URL: ${req.url} at ${new Date().toISOString()}`
  );
  next();
};

// Apply custom middleware to all routes
router.use(logger);

// GET request with query parameter
router.get("/", (req, res) => {
  if (req.query.valid) {
    return res.send("Welcome to express js GET!");
  }

  res.status(400).send("Please provide the valid query parameter!");
});

// GET request with token middleware
router.get(
  "/protected",
  (req, res, next) => {
    const token = req.header("token");

    if (token) {
      res.setHeader("token", token);
      res.setHeader("X-Powered-By", "Dr. Vipin Kumar");
      return next();
    }

    return res.status(400).json({
      error: "You are not valid user!"
    });
  },
  (req, res) => {
    res.send("Welcome, valid user!");
  }
);

// GET product using request body or query parameters (for practice)
router.get("/product", (req, res) => {
  const pid = req.body?.pid ?? req.query.pid;
  const pname = req.body?.pname ?? req.query.pname;

  res.status(200).json({
    pid,
    pname
  });

  console.log("Data inserted");
});

// PUT request
router.put("/", (req, res) => {
  res.send("Welcome to express js PUT!");
});

// POST request
router.post("/", (req, res) => {
  res.send("Welcome to express js POST!");
});

// DELETE request
router.delete("/", (req, res) => {
  res.send("Welcome to express js DELETE!");
});

// URL parameter
router.get("/product/:id/:name", (req, res) => {
  const pid = req.params.id;
  const name = req.params.name;

  res.send(`Product ID: ${pid} <br> Product Name: ${name}`);
});

// Query string parameter
router.get("/students", (req, res) => {
  const sid = req.query.sid;
  const sname = req.query.sname;

  res.send("Student ID: " + sid + "<br>Student Name: " + sname);
});

module.exports = router;
