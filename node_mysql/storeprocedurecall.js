 var express    = require("express");
 var mysql      = require('mysql');

 var connection = mysql.createConnection
 ({
   host     : 'localhost',
   user     : 'root',
   password : '2016',
   database : 'mydatabase'
 });
var app = express();
 connection.connect(function(err)
 {
    if(!err) 
   {
      console.log("Database is connected ... \n\n");  
   } 
   else
   {
      console.log("Error connecting database ... \n\n");  
   }
});
 
 app.get("/",function(req,res)
 {
    connection.query('CALL user();', function(err, rows)//retrive the data fron store procedure
    {
         connection.end();
         if (!err)
         {
           console.log(rows);
         }
          else
          console.log('Error while performing Query.');
        });
});
    app.listen(9090);
