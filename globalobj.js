// Let's try to print the value of __filename
console.log( __filename );

// Let's try to print the value of __dirname
console.log( __dirname );


function printHello(){
   console.log( "Hello, Ashok!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);



function printHellow(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHellow, 2000);

// Now clear the timer
clearTimeout(t);