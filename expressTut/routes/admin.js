const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const Router = express.Router();

const products = [];

Router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-products", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

Router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(req.body);

  // redirect is another method made avaliable from express.js that replaces
  // having to manually set the statis code and rederect header
  res.redirect("/");
});

exports.routes = Router;
exports.products = products;
