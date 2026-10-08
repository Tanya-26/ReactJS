// console.log("Welcome to Node JS")
// setTimeout(()=>{
//     console.log("Inside SetTimeOut")
// },2000)
// console.log("After setTimeOut");
// Promise.resolve().then(()=>{
//     console.log("Inside the promise")
// })
// console.log("End of the page")
// // Synchoronous -> MicroTask(Promise) -> MacroTask(Asyncronous)
// // Callstack -> MicroTask Queue -> Callback Queue

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const path = parseUrl.pathname;

  if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome to Node.js server!\n");
    res.end("this is second line");
  } else if (path === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h3>This is about page</h3>");
    res.end("<p>In KIET MCA Section D</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Running server on: http://127.0.0.1:${port}`);
});
