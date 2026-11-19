
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // Get current date and time
    const dateTime = new Date().toLocaleString();

    // Create log message
    const log = `Request received at: ${dateTime}, URL: ${req.url}, Method: ${req.method}\n`;

    // Maintain log in a file
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error writing log");
        } else {
            console.log("Log maintained successfully");
        }
    });

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Welcome to Node.js Server!</h2>");
});

const port = 3001;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
