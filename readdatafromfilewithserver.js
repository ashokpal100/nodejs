var http=require("http");
var fs=require("fs");
var data={};

var server = http.createServer(function (req, res) {
    fs.readFile("input.txt", "utf8", function (error, content) {
        data=content;
        res.write(data); //Write the content to the client on web page
        res.end();
    });
});
server.listen(9090);
console.log("server running...");