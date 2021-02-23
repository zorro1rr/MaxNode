const path = require("path");

const express = require("express");

const Router = express.Router();

Router.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "users.html"));
});

module.exports = Router;
