const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  // path.join yeilds a path by concatenating different segments
  // the first segment we should pass here is a global variable made available
  // by node.js (__dirname) holds the absolute path to our base directory
  // we seperate by commas not / because path.join makes a path compatable on both windows and linux OS
  // but since we call this in routes folder we also have to go up 1 level with ../
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = Router;
