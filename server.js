// Require Express Module
var express = require("express");

var app = express();

// require body-parser(to receive post data from clients)
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded());

// require path
var path = require("path");

// Setting up static folder directory
app.use(express.static(__dirname + "./static"));

// Setting up views folder directory
app.set("views", path.join(__dirname, "./views"));

// Setting view engine set to EJS
app.set("view engine", "ejs");

// routes
// root request
app.get("/", function(req, res) {
	res.render("index");
})



// Setting our server to listen to port 8000
port = 8000
app.listen(port, function() {
	console.log("Listening to port 8000")
})