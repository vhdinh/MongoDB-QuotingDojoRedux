// Require Express Module
var express = require("express");
var path = require("path");
var app = express();
var mongoose = require('mongoose');


// Require body-parser (to receive post data from clients)
var bodyParser = require("body-parser");
// Integrate body-parser with our App
app.use(bodyParser.urlencoded());


// Setting up static folder directory
app.use(express.static(path.join(__dirname, "./client/static")));

// Setting up views folder directory
app.set("views", path.join(__dirname, "./client/views"));

// Setting view engine set to EJS
app.set("view engine", "ejs");

// require mongoose configuration file which doe the rest
require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require("./server/config/routes.js");
// invoke funciton stored in routes_setter and pass it to the "app" variable
routes_setter(app);


// Setting our server to listen to port 8000
port = 8000
app.listen(port, function() {
	console.log("Listening to port 8000")
})