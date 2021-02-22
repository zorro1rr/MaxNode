const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const Router = express.Router();

Router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

Router.post("/add-product", (req, res, next) => {
  console.log(req.body);

  // redirect is another method made avaliable from express.js that replaces
  // having to manually set the statis code and rederect header
  res.redirect("/");
});

module.exports = Router;
