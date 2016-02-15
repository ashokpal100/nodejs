var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {//Open file for reading and writing. An exception occurs if the file does not exist.
   if (err) {
       return console.error(err);
   }
  console.log("File opened successfully!");     
});