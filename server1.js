const http = require("http");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public1");
const filesDir = path.join(__dirname, "files");

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { Allow: "GET", "Content-Type": "text/plain" });
    res.end("Method not allowed. Use GET.");
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const route = parsedUrl.pathname;

  if (route === "/" || route === "/index.html") {
    fs.readFile(path.join(publicDir, "index.html"), (error, data) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Frontend file not found!");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
    return;
  }

  if (route === "/create") {
    const fname = parsedUrl.searchParams.get("fname");
    const content = parsedUrl.searchParams.get("content");

    if (!fname || fname.includes("\0") || path.basename(fname) !== fname || fname === "." || fname === "..") {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Please provide a valid file name." }));
      return;
    }

    if (content === null) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Content not found." }));
      return;
    }

    const fileName = path.join(filesDir, fname);
    fs.writeFile(fileName, content, { encoding: "utf8", flag: "wx" }, (error) => {
      if (error) {
        const statusCode = error.code === "EEXIST" ? 409 : 500;
        res.writeHead(statusCode, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          error: statusCode === 409 ? "File already exists." : "Unable to create file."
        }));
        return;
      }

      res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("File created successfully.");
    });
    return;
  }

  if (route === "/read") {
    const fname = parsedUrl.searchParams.get("fname");

    if (!fname) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "File name not passed!" }));
      return;
    }

    const fileName = path.join(filesDir, path.basename(fname));
    fs.readFile(fileName, "utf8", (error, data) => {
      if (error) {
        const statusCode = error.code === "ENOENT" ? 404 : 500;
        res.writeHead(statusCode, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          error: statusCode === 404 ? "File not found" : "Unable to read file"
        }));
        return;
      }

      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(data);
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route not found!");
});

const port = Number(process.env.PORT) || 3001;

server.listen(port, () => {
  console.log(`Running server on: http://127.0.0.1:${port}`);
});
