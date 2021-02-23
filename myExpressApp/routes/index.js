const path = require("path");

const express = require("express");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "index.html"));
});

module.exports = Router;
