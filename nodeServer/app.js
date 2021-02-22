const express = require("express");

const app = express();

// use is a built in express method that allows use to add a middleware function
// this function is ran for every incoming request
// the third arguement "next"(abitrary name) must be called in order for
// the request to continue to the next middleware in line

app.use("/", (req, rest, next) => {
  console.log("this always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("in another middleware");

  res.send("<h1>The add product page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in another middleware 2");

  res.send("<h1>hello from express!</h1>");
});

app.listen(3000);
