const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const route = parsedUrl.pathname;
  const fname = parsedUrl.searchParams.get("fname");
  const content = parsedUrl.searchParams.get("content");

  const publicDir = path.join(__dirname, "public");
  const filesDir = path.join(__dirname, "files");

  if (route === "/" || route === "/index.html" || route === "/style.css" || route === "/script.js") {
    const publicFile = route === "/" || route === "/index.html"
      ? path.join(publicDir, "index.html")
      : path.join(publicDir, route.slice(1));

    const contentType = publicFile.endsWith(".css")
      ? "text/css"
      : publicFile.endsWith(".js")
        ? "application/javascript"
        : "text/html";

    fs.readFile(publicFile, (error, data) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Frontend file not found!");
        return;
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });
    return;
  }

  if (!fname) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "File name not passed!" }));
    return;
  }

  const fileName = path.join(filesDir, path.basename(fname));

  if (route === "/append" && req.method === "PUT") {
    if (!content) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Content not found" }));
      return;
    }

    fs.stat(fileName, (existsError) => {
      if (existsError) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "File not found" }));
        return;
      }

      fs.appendFile(fileName, content, "utf8", (error) => {
        if (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Not able to write or File not found" }));
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>File Updated Successfully!</h2>");
      });
    });
    return;
  }

  if (route === "/write" && req.method === "POST") {
    if (!content) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Content not found" }));
      return;
    }

    fs.stat(fileName, (existsError) => {
      if (!existsError) {
        res.writeHead(409, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "File already exists" }));
        return;
      }

      fs.writeFile(fileName, content, "utf8", (error) => {
        if (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Not able to write or File not found" }));
          return;
        }

        res.writeHead(201, { "Content-Type": "text/html" });
        res.end("<h2>File created with content!</h2>");
      });
    });
    return;
  }

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
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route not found!");
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Running server on: http://127.0.0.1:${port}`);
});
