 var express    = require("express");
 var mysql      = require('mysql');
 //var fs = require('fs');
 //var url = require('url');

 var connection = mysql.createConnection
 ({
   host     : 'localhost',
   user     : 'root',
   password : '2016',
   database : 'mydatabase'
 });
var app = express();
app.use(express.static('public'));
app.get('/connectionsql.html', function (req, res) 
{//connect html file with request
   res.sendFile( __dirname + "/" + "connectionsql.html" );
});
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
 
 app.get("/get",function(req,res)
 {

    // Prepare output in JSON format
  var users= {user_id:req.query.user_id,user_name:req.query.user_name};
  connection.query('INSERT INTO user SET ?', users, function(err,res)//insert data into a user table
  {
       if(err) throw err;
       console.log('Last insert ID:', res.insertId);
  });/*
  connection.query('UPDATE user SET user_name = ? Where user_id = ?',["South Africa", 5],function (err, result) //update table record
  {
    if (err) throw err;
    console.log('Changed ' + result.changedRows + ' rows');
  }
);
/*connection.query('DELETE FROM user WHERE user_id = ?',[10],function (err, result) //delete record
 {
    if (err) throw err;
    console.log('Deleted ' + result.affectedRows + ' rows');
  });*/
 connection.query('SELECT *  from user', function(err, rows)//retrive the data fron user table
 {
     connection.end();
    if (!err)
     {
          //console.log(rows);
          res.json(rows);
     }
   else
     console.log('Error while performing Query.');
   });
 });
  app.listen(9090);
