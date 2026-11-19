const express = require("express");
const app = express();
const port = Number(process.env.PORT) || 3002;

app.use(express.json());

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("User data received successfully!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});