const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// urlencoded is made avaliable by body-parser that parses a middleware
// and runs next() so we do not have to manually parse like in vanilla node
// it's argument is config options, in this case tells it not to parse non-default features
app.use(bodyParser.urlencoded({ extended: false }));

// setting up static folder to direct to our css files
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
