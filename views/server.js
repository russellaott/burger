// dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// sets up port
var PORT = process.env.PORT || 3100;

// tells app to use express
var app = express();

// makes public assets folder available
app.use(express.static("public"));
// parses data
app.use(bodyParser.urlencoded({extended: false}));

// override for POST method
app.use(methodOverride("_method"));

// sets up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// connects routes
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  