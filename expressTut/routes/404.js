const path = require("path");

const express = require("express");

const Router = express.Router();

Router.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

module.export = Router;
