
const http = require("http");
const { stringify } = require("querystring");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Example:
  // http://localhost:3001/read?fname=abc.txt&content=hello

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const route = parsedUrl.pathname;

  const fname = parsedUrl.searchParams.get("fname");
  const content = parsedUrl.searchParams.get("content");

  if (!fname || !content) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("File name and content not passed!");
    return;
  }

  const fileDir = path.join(__dirname, "/files");
  const fileName = path.join(fileDir, fname);

  if (route === "/read" && req.method === "GET") {
    fs.readFile(fileName, "utf8", (error, data) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "File not found" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<pre>${data}</pre>`);
    });
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found!");
  }
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Running server on: http://127.0.0.1:${port}`);
});