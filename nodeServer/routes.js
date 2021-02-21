const fs = require("fs");

const requestHandler = (req, res) => {
  // we parse our url which is a property on our request object
  const url = req.url;
  //  we parse the type of request method we recieve
  const method = req.method;
  // redirecting requests:
  // we want to store a user message so in order to work with the file system
  //  we import the node fs module

  // if we are at the root directory
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button.</form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  // check if our url is /message and also check if it is a POST request
  if (url === "/message" && method === "POST") {
    // we want to redirect our user back to "/"
    // & also create a new file and store the user message in it

    // set a const with emtpy array to eventually populate the body of our request with
    const body = [];
    // we want to get our request data by setting up an event listener that createServer set up for us
    // we do this with the on() method. We listen for the data event (drop down of available events on vsCode)(uses buffer to accomplish this)
    // this will fire any time a data event occurs, the second argument is the function that we run on this trigger
    // this asynchronous anonymous function will recieve a chuck of data for a param
    req.on("data", (chunk) => {
      console.log("chunk", chunk);
      // push our data to the body array
      body.push(chunk);
    });
    // now we set up another event listener that will fire asynchronously once we are done parsing the request data 'end'
    return req.on("end", () => {
      // we set up a const to save our body array that we also need to concat and turn to a string (we can do this for sure since we know our request is a string, if it was a file we would have to do something different)
      // we do this with the Buffer object that is avaliable globally with node.js
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedBody", parsedBody);
      // our parsed Body returns message='user-input'
      // we make an array with two values by splitting the string by the '=' to get ['message', 'user-input']
      // we our message that is now in the first index to a const
      const message = parsedBody.split("=")[1];
      // writeFile is built in fs asynschronous method that takes params (name, content, and a callback) (see writeFileSync to use synchronously without callback)
      // this callback recieves and error object which will be null is nothing happens, or something like missing permissions that we can deal with in the function
      // in this case no error can occur, but we still need to put  our writeHead and res.end inside
      fs.writeFile("message.txt", message, (err) => {
        // writeHead is a response object method allows us to add some meta data(could also do in 2 methods res.statusCode & res.setHeader)
        // we set status code 302 which stands for redirection
        // and also pass an Object containing our headers
        // if we had these outside this async function it would run code below first
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  // write our actual response
  res.write("<html>");
  res.write("<head><title>My First Page</title>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  // finish the response
  res.end();
};

// module is a global object made avaliable by node.js

//three approaches for exporting multiple things

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some other hard coded text";

// shortcut
exports.handler = requestHandler;
exports.someText = "Some other hard coded text";
