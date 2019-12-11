const http = require("http");

const hostname = "localhost";
const port = 42069;



const employees = [0,0,0,0,0,0,0,0,0]

var server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  if (request.method === "GET" && request.url === "/emp") {
    response.write(JSON.stringify(employees));
    response.end();
  }
  if(request.method === "POST" && request.url === "/emp") {
    let body = [];
    request.on("data", function(chunk){
        body.push(chunk);
    }).on("end"), () => {
        body = Buffer.concat(body).toString();
        employees = JSON.parse(body);
        response.end();
    }

  }
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

