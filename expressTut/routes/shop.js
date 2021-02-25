const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
});

module.exports = Router;
