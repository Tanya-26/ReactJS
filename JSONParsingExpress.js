const express = require("express")
const app = express()
app.use(express.json())
app.post("/user", (req, res) => {
    console.log(req.body)
    res.send("User data received successfully!")
})

app.listen(3002, () => {
    console.log("Server running on port 3000")
})