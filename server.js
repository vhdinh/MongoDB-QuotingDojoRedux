// Require Express Module
var express = require("express");
var path = require("path");
var app = express();
var mongoose = require('mongoose');

// connect mongodb database wusing mongoose - basic_mongoose is name of our db in mongodb - this name should match name of db we are using for project
mongoose.connect('mongodb://localhost/quote_dojo');

var UserSchema = new mongoose.Schema({
	name: String,
	quote: String,
	date: Date
})

mongoose.model('Quote', UserSchema); //setting this Schema in our Models as "User"
var Quote = mongoose.model('Quote') // retrieve this Schema from our Models named "User"


// Require body-parser (to receive post data from clients)
var bodyParser = require("body-parser");
// Integrate body-parser with our App
app.use(bodyParser.urlencoded());


// Setting up static folder directory
app.use(express.static(path.join(__dirname, "./static")));

// Setting up views folder directory
app.set("views", path.join(__dirname, "./views"));

// Setting view engine set to EJS
app.set("view engine", "ejs");

// routes
// root request
app.get("/", function(req, res) {
	res.render("index");
})

app.post('/quotes', function(req, res) {
	console.log("POST DATA", req.body)
	var quote = new Quote({name: req.body.name, quote: req.body.quote, date: Date()})
	// console.log("QUOTEEE ", quote)
	quote.save(function(err) {
		if(err){
			console.log("Something went wrong!!!")
		}
		else{
			console.log("Successfully added a quote");
			res.redirect("/")
		}
	})
})


// Setting our server to listen to port 8000
port = 8000
app.listen(port, function() {
	console.log("Listening to port 8000")
})