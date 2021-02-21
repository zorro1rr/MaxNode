const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My Server</title></head>");
    res.write(
      "<body><h1>Greetings Friends</h1><form action='/create-user' method='POST'><input input='text' name='username'><button type='submit></button></input></form></body>"
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>My Server</title></head>");
    res.write(
      "<body><ul><li>Joe</li><li>Sally</li><li>Henry</li><li>Tito</li></ul></body>"
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/create-user" && method === "POST") {
    res.write("<html>");
    res.write("<head><title>My Server</title></head>");
    res.write(
      "<body><h1>create-user</h1><p>check console for incoming data</p></h1></body>"
    );
    res.write("</html>");

    // log our data to the console
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      return res.end;
    });
  }
});

server.listen(3000);
