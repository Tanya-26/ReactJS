const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Example:
  // http://localhost:3001/read?fname=abc.txt&content=hello

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const route = parsedUrl.pathname;

  const fname = parsedUrl.searchParams.get("fname");
  const content = parsedUrl.searchParams.get("content");
  
if (
  route === "/" ||
  route === "/index.html" ||
  route === "/style.css" ||
  route === "/script.js"
) {
  const publicDir = path.join(__dirname, "public");

  const publicFile =
    route === "/" || route === "/index.html"
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
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("File name not passed!");
    return;
  }

  const fileDir = path.join(__dirname, "/files");
  const fileName = path.join(fileDir, fname);
  if (route === "/append" && req.method === "PUT") {
    if (!content) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Content not found" }));
      return;
    } else {
      fs.appendFile(fileName, content || "", "utf8", (error) => {
        if (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ error: "Not able to write or File not found" }),
          );
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>File Updated Successfully!</h2>");
      });
    }
    return;
  }
  if (route === "/write" && req.method === "POST") {
    if (!content) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Content not found" }));
      return;
    } else {
      if (!fs.existsSync(fileName)) {
        fs.writeFile(fileName, content || "", (error) => {
          if (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({ error: "Not able to write or File not found" }),
            );
            return;
          }
          res.writeHead(201, { "Content-Type": "text/html" });
          res.end("<h2>File created with content!</h2>");
        });
      } else {
        res.writeHead(409, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "File already exists" }));
      }
      return;
    }
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
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found!");
    return;
  }
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Running server on: http://127.0.0.1:${port}`);
});
