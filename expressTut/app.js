const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/error");

const app = express();

//view engine points to which template engine we are using
app.set("view engine", "ejs");
// views points to which directory it can find the templates (the views folder)
app.set("views", "views");

// urlencoded is made avaliable by body-parser that parses a middleware
// and runs next() so we do not have to manually parse like in vanilla node
// it's argument is config options, in this case tells it not to parse non-default features
app.use(bodyParser.urlencoded({ extended: false }));

// setting up static folder to direct to our css files
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.get(errorController.get404);

app.listen(3000);
