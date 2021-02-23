const path = require("path");
const express = require("express");

const app = express();

const index = require("./routes/index");
const users = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));

app.use(index);
app.use(users);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
});

app.listen("3000");
