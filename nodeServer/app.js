//import the core node package http
const http = require("http");
const routes = require("./routes");

console.log(routes.someText);

/* method 1
 function rqListener(req, res) {

 }
 http.createServer(rqListener); */

// method 2 anonymous function

// The http.createServer method returns a server
// it's two arguements are request listener and response listeners
// this give us built in objects that do what their name implies
// we have delegated this logic to routes.js
const server = http.createServer(routes.handler);

// listen method starts a process where node.js will not
// immedatelly exist the script instead stay open and listen
// to requests on a specified port

server.listen(3000);
