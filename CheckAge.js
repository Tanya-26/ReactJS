const express = require("express");
const app = express();
const port = Number(process.env.PORT) || 3002;

const checkAge = (req, res, next) => {
    const age = Number(req.query.age);
    if (age >= 18) {
        next();
    } else {
        res.send("Access Denied! You must be 18 or older.");
    }
};

app.get("/adult", checkAge, (req, res) => {
    res.send("Access Granted! Welcome.");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});