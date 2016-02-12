var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write("Hello ashok");
  response.end();
}).listen(9090);
console.log("hay pal");