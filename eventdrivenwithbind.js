var events = require('events');//required modules import

var eventEmitter = new events.EventEmitter();//create object

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}
var listner3 = function listner3() {
   console.log('listner3 executed.');
}

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.on('connection', listner1);
// Bind the connection event with the listner3 function
eventEmitter.addListener('connection', listner3);
// Bind the connection event with the listner2 function
eventEmitter.addListener('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");